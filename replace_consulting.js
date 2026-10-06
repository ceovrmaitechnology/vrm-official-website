const fs = require('fs');
const glob = require('glob'); // Not available? I'll just use a predefined list

function replaceInFile(file, replacements) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    for (let r of replacements) {
        if (content.match(r.match)) {
            content = content.replace(r.match, r.replace);
            modified = true;
        }
    }
    if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}

const globFiles = [
    'src/inner/AIInnovationIndia.jsx',
    'src/inner/AboutUs.jsx',
    'src/inner/Careers.jsx',
    'src/inner/GenerativeAIDevelopment.jsx',
    'src/inner/MachineLearningServices.jsx',
    'src/inner/PricingPlane.jsx',
    'src/inner/AICallingAgent.jsx',
    'src/inner/AIChatbotDevelopment.jsx',
    'src/inner/AIChatbotServices.jsx',
    'src/inner/AICompanyBangalore.jsx',
    'src/inner/AICompanyMadurai.jsx',
    'src/inner/AICompanyTamilNadu.jsx',
    'src/inner/AIDevelopmentServices.jsx',
    'src/inner/Visionix.jsx',
    'src/inner/BlogDetails.jsx',
    'src/inner/BlogDetailsDefault.jsx',
    'src/inner/BlogList.jsx',
    'src/inner/VoiceAISolutions.jsx',
    'src/components/about/AboutFive.jsx',
    'src/components/about/AboutFour.jsx',
    'src/components/about/AboutTwo.jsx',
    'src/components/banner/BannerFive.jsx',
    'src/components/banner/BannerFour.jsx',
    'src/components/banner/BannerSeven.jsx',
    'src/components/banner/BannerSix.jsx',
    'src/components/blog/BlogFive.jsx',
    'src/components/calltoaction/CallToActionSeven.jsx',
    'src/components/calltoaction/CallToActionTwo.jsx',
    'src/components/contactform/ContactForm.jsx',
    'src/components/faq/FaqOne.jsx',
    'src/components/faq/FaqTwo.jsx',
    'src/components/feature/Feature.jsx',
    'src/components/pricing/PricingOne.jsx',
    'src/components/pricing/PricingTwo.jsx',
    'src/components/pricing/PricingThree.jsx',
    'src/components/service/ServiceEight.jsx',
    'src/components/service/ServiceEleven.jsx',
    'src/components/service/ServiceThree.jsx',
    'src/components/team/TeamTwo.jsx',
    'src/inner/TeamFive.jsx',
    'src/inner/TeamFour.jsx',
    'src/inner/TeamTwo.jsx',
    'src/components/whychooseus/WhyChooseThree.jsx',
    'src/components/workingprocess/WorkingProcessFour.jsx'
];

for (let file of globFiles) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Links to remove
    content = content.replace(/\{\s*title: "Enterprise AI Consulting",[^}]+\/solutions\/ai-consulting-services"\s*\},?/g, '');
    content = content.replace(/\{\s*title: "AI Strategy & Consulting",[^}]+\/solutions\/ai-consulting-services"\s*\},?/g, '');
    content = content.replace(/\{\s*title: "AI Architecture Consulting",[^}]+\/solutions\/ai-consulting-services"\s*\},?/g, '');

    // Common replacements
    content = content.replace(/AI consulting/gi, 'AI solutions');
    content = content.replace(/Consultation/g, 'Assessment');
    content = content.replace(/consultation/g, 'assessment');
    content = content.replace(/Consultant Service/g, 'Support Service');
    content = content.replace(/Consultancy &amp; Advice/g, 'Strategic Advice');
    content = content.replace(/Business Consultancy/g, 'Business Strategy');
    content = content.replace(/Consulting Agency/g, 'Strategy Agency');
    content = content.replace(/Free Consultant/g, 'Free Assessment');
    content = content.replace(/Consulting Busiuness/g, 'Enterprise Business');
    content = content.replace(/Consulting session/g, 'Strategy session');
    content = content.replace(/consultative delivery/g, 'collaborative delivery');
    content = content.replace(/strategic consulting/g, 'strategic planning');
    content = content.replace(/Consult with us/g, 'Talk with us');
    content = content.replace(/Consulting For All Kind Of Finance Services/g, 'Strategy For All Kind Of Finance Services');
    content = content.replace(/Consulting Services/g, 'Strategy Services');
    content = content.replace(/Great Skilled Consultant/g, 'Great Skilled Professional');
    content = content.replace(/HR consulting expertise/g, 'HR software expertise');
    content = content.replace(/CONSULTING SOLUTION/g, 'STRATEGY SOLUTION');
    content = content.replace(/Get a Free Consultancy/g, 'Get a Free Assessment');
    content = content.replace(/Business Consultancy\?/g, 'Business Strategy?');
    content = content.replace(/business consultant\?/g, 'business strategy?');
    content = content.replace(/JUST A CONSULTANCY/g, 'JUST A STRATEGY');
    content = content.replace(/SEO consultant/g, 'SEO specialist');
    content = content.replace(/<span>Consultant<\/span>/g, '<span>Engineer</span>');
    content = content.replace(/Schedule Chatbot Assessment/g, 'Schedule Chatbot Strategy');

    // Delete AboutUs.jsx card
    content = content.replace(/<div className="col-lg-6 col-md-6 col-sm-12 col-12">[\s\S]*?<h4 className="service-title-about">AI solutions<\/h4>[\s\S]*?<\/div>/g, '');

    fs.writeFileSync(file, content);
}
console.log("Global replacements done.");
