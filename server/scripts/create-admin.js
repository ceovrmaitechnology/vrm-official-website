#!/usr/bin/env node
/**
 * CLI script to manage Admin accounts for VRM AI Careers Panel.
 *
 * Usage:
 *   List admins:
 *     node server/scripts/create-admin.js --list
 *
 *   Delete admin:
 *     node server/scripts/create-admin.js --delete <username>
 *
 *   Create or update admin:
 *     node server/scripts/create-admin.js <username> <password> [--role=superadmin|admin] [--email=user@vrmaitechnology.com] [--name="Display Name"]
 *
 *   Interactive mode:
 *     node server/scripts/create-admin.js
 */

const readline = require('readline');
const {
  getAdminUsers,
  createOrUpdateAdmin,
  deleteAdminUser,
  readAdminsRaw
} = require('../careers-db');

async function main() {
  const args = process.argv.slice(2);

  // 1. List admins flag
  if (args.includes('--list') || args.includes('-l')) {
    const admins = getAdminUsers();
    console.log('\n================ VRM AI Admin Accounts ================');
    if (admins.length === 0) {
      console.log('No admin accounts found in server/data/admin.json.\n');
    } else {
      console.table(
        admins.map(a => ({
          ID: a.id,
          Username: a.username,
          'Display Name': a.displayName,
          Email: a.email,
          Role: a.role,
          Active: a.active ? 'Yes' : 'No',
          'Force Pwd Change': a.forcePasswordChange ? 'Yes' : 'No',
          'Updated At': (a.updatedAt || '').slice(0, 19).replace('T', ' ')
        }))
      );
      console.log(`Total accounts: ${admins.length}\n`);
    }
    process.exit(0);
  }

  // 2. Delete admin flag
  const deleteIdx = args.findIndex(arg => arg === '--delete' || arg === '-d');
  if (deleteIdx !== -1) {
    const targetUser = args[deleteIdx + 1];
    if (!targetUser) {
      console.error('\n❌ Error: Please specify the username to delete.');
      console.error('Usage: node server/scripts/create-admin.js --delete <username>\n');
      process.exit(1);
    }
    const cleanUser = targetUser.toLowerCase().trim();
    const admins = readAdminsRaw();
    const found = admins.find(a => a.username.toLowerCase() === cleanUser);
    if (!found) {
      console.error(`\n❌ Error: Admin user "${cleanUser}" not found.\n`);
      process.exit(1);
    }
    try {
      deleteAdminUser(found.id);
      console.log(`\n✅ Admin user "${cleanUser}" deleted successfully!\n`);
      process.exit(0);
    } catch (err) {
      console.error(`\n❌ Error: ${err.message}\n`);
      process.exit(1);
    }
  }

  // 3. Command-line positional create/update
  // node server/scripts/create-admin.js <username> <password> [--role=...] [--email=...] [--name=...]
  const nonFlagArgs = args.filter(a => !a.startsWith('--'));
  if (nonFlagArgs.length >= 2) {
    const [username, password] = nonFlagArgs;

    // Parse optional flags
    let role = 'superadmin';
    let email = 'contactus@vrmaitechnology.com';
    let displayName = username;

    for (const arg of args) {
      if (arg.startsWith('--role=')) role = arg.slice(7).toLowerCase();
      if (arg.startsWith('--email=')) email = arg.slice(8).toLowerCase();
      if (arg.startsWith('--name=')) displayName = arg.slice(7);
    }

    try {
      const user = createOrUpdateAdmin(username, password, role, email, displayName);
      console.log(`\n✅ Admin user "${user.username}" (${user.role}) created/updated successfully!`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Display Name: ${user.displayName}`);
      console.log('You can now log in at /admin/careers.\n');
      process.exit(0);
    } catch (err) {
      console.error(`\n❌ Error: ${err.message}\n`);
      process.exit(1);
    }
  }

  // 4. Interactive Mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query) => new Promise(resolve => rl.question(query, resolve));

  console.log('\n================ VRM AI Careers Admin Setup ================');
  console.log('1. Create or Update Admin');
  console.log('2. List Admins');
  console.log('3. Delete Admin');
  console.log('4. Exit\n');

  const choice = (await question('Select option [1-4]: ')).trim();

  if (choice === '2') {
    rl.close();
    const admins = getAdminUsers();
    console.log('\n--- Admin Accounts ---');
    console.table(
      admins.map(a => ({
        Username: a.username,
        Name: a.displayName,
        Email: a.email,
        Role: a.role,
        Active: a.active ? 'Yes' : 'No'
      }))
    );
    process.exit(0);
  } else if (choice === '3') {
    const usernameToDelete = await question('\nEnter username to delete: ');
    rl.close();
    const cleanUser = usernameToDelete.toLowerCase().trim();
    const admins = readAdminsRaw();
    const found = admins.find(a => a.username.toLowerCase() === cleanUser);
    if (!found) {
      console.error(`\n❌ Error: Admin user "${cleanUser}" not found.\n`);
      process.exit(1);
    }
    try {
      deleteAdminUser(found.id);
      console.log(`\n✅ Admin user "${cleanUser}" deleted successfully!\n`);
      process.exit(0);
    } catch (err) {
      console.error(`\n❌ Error: ${err.message}\n`);
      process.exit(1);
    }
  } else if (choice === '1' || choice === '') {
    const username = await question('\nEnter Admin Username (letters/numbers): ');
    const displayName = await question('Enter Display Name (e.g. John Doe): ');
    const email = await question('Enter Email (e.g. contactus@vrmaitechnology.com): ');
    const roleInput = await question('Enter Role (superadmin or admin, default: superadmin): ');
    const password = await question('Enter Password (min 12 characters recommended): ');
    rl.close();

    const role = roleInput.trim().toLowerCase() === 'admin' ? 'admin' : 'superadmin';

    try {
      const user = createOrUpdateAdmin(
        username,
        password,
        role,
        email.trim() || 'contactus@vrmaitechnology.com',
        displayName.trim() || username.trim()
      );
      console.log(`\n✅ Admin user "${user.username}" (${user.role}) created/updated successfully!`);
      console.log('You can now log in at /admin/careers.\n');
      process.exit(0);
    } catch (err) {
      console.error(`\n❌ Error: ${err.message}\n`);
      process.exit(1);
    }
  } else {
    rl.close();
    process.exit(0);
  }
}

main();
