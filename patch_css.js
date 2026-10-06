const fs = require('fs');

function replaceClass(filePath) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/className="rts-ai-consulting-services basic-font-family"/g, 'className="rts-ai-strategy-services basic-font-family"');
        fs.writeFileSync(filePath, content);
    }
}

replaceClass('src/inner/AIChatbotServices.jsx');
replaceClass('src/inner/AICompanyTamilNadu.jsx');
replaceClass('src/inner/AIInnovationIndia.jsx');
replaceClass('src/inner/GenerativeAIDevelopment.jsx');
replaceClass('src/inner/VoiceAISolutions.jsx');
