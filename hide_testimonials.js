const fs = require('fs');

function commentOutComponent(file, componentName) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        const regex = new RegExp('<(' + componentName + '[^>]*)>(.*?)</\\\\1>', 'gs');
        const regexSelfClosing = new RegExp('<(' + componentName + '[^>]*)/>', 'gs');
        
        let newContent = content.replace(regex, '{/* <$1>$2</$1> */}');
        newContent = newContent.replace(regexSelfClosing, '{/* <$1/> */}');
        
        if (content !== newContent) {
            fs.writeFileSync(file, newContent);
            console.log('Commented out ' + componentName + ' in ' + file);
        }
    }
}

commentOutComponent('src/home/HomeOne.jsx', 'WorkflowTestimonials');
commentOutComponent('src/inner/Workflow.jsx', 'WorkflowTestimonials');
