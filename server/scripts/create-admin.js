#!/usr/bin/env node
/**
 * CLI script to create or update an Admin user for VRM AI Careers Panel.
 * Usage:
 *   node server/scripts/create-admin.js <username> <password>
 * Or run without arguments for interactive prompt:
 *   node server/scripts/create-admin.js
 */

const readline = require('readline');
const { createOrUpdateAdmin } = require('../careers-db');

async function main() {
  const args = process.argv.slice(2);

  if (args.length >= 2) {
    const [username, password] = args;
    try {
      const user = createOrUpdateAdmin(username, password);
      console.log(`\n✅ Admin user "${user.username}" created/updated successfully!`);
      process.exit(0);
    } catch (err) {
      console.error(`\n❌ Error: ${err.message}`);
      process.exit(1);
    }
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query) => new Promise(resolve => rl.question(query, resolve));

  console.log('\n--- VRM AI Careers Admin Setup ---');
  const username = await question('Enter Admin Username (or email): ');
  const password = await question('Enter Admin Password (min 8 chars): ');
  rl.close();

  try {
    const user = createOrUpdateAdmin(username, password);
    console.log(`\n✅ Admin user "${user.username}" created/updated successfully!`);
    console.log('You can now log in at /admin/careers.\n');
    process.exit(0);
  } catch (err) {
    console.error(`\n❌ Error: ${err.message}\n`);
    process.exit(1);
  }
}

main();
