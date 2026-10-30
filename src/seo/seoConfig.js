/**
 * Central SEO Configuration for VRM AI Technology
 * Canonical Origin: https://www.vrmaitechnology.com
 */

const CANONICAL_ORIGIN = 'https://www.vrmaitechnology.com';
const DEFAULT_OG_IMAGE = `${CANONICAL_ORIGIN}/assets/images/logo/vrm-og-image.png`;
const LOGO_URL = `${CANONICAL_ORIGIN}/assets/images/logo/logo-header.webp`;
const BRAND_NAME = 'VRM AI Technology';
const LEGAL_NAME = 'VRM AI Technology (OPC) Pvt.Ltd.';
const CONTACT_EMAIL = 'contactus@vrmaitechnology.com';
const CONTACT_PHONE = '+91 73977 51037';
const CONTACT_PHONE_TEL = '+917397751037';

const SOCIAL_PROFILES = [
  'https://x.com/vrmaitechnology',
  'https://www.instagram.com/vrm_ai_technology/',
  'https://www.linkedin.com/company/vrm-ai-technology-pvt-ltd/',
  'https://www.facebook.com/profile.php?id=61595572251148',
  'https://medium.com/@vrmaitechnology',
  'https://dev.to/vrmaitechnology'
];

const ADDRESS_BENGALURU = {
  '@type': 'PostalAddress',
  streetAddress: 'GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I',
  addressLocality: 'Bengaluru',
  addressRegion: 'Karnataka',
  postalCode: '560100',
  addressCountry: 'IN'
};

const ADDRESS_MADURAI = {
  '@type': 'PostalAddress',
  streetAddress: 'Door No.209, 1st Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai',
  addressLocality: 'Madurai',
  addressRegion: 'Tamil Nadu',
  postalCode: '625014',
  addressCountry: 'IN'
};

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: LEGAL_NAME,
  alternateName: BRAND_NAME,
  url: CANONICAL_ORIGIN,
  logo: LOGO_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_TEL,
  sameAs: SOCIAL_PROFILES
};

const PROFESSIONAL_SERVICE_BLR = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${BRAND_NAME} - Bengaluru Headquarters`,
  url: `${CANONICAL_ORIGIN}/ai-company-bangalore`,
  image: LOGO_URL,
  telephone: CONTACT_PHONE_TEL,
  email: CONTACT_EMAIL,
  address: ADDRESS_BENGALURU
};

const PROFESSIONAL_SERVICE_MADURAI = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${BRAND_NAME} - Madurai Development Center`,
  url: `${CANONICAL_ORIGIN}/ai-company-madurai`,
  image: LOGO_URL,
  telephone: CONTACT_PHONE_TEL,
  email: CONTACT_EMAIL,
  address: ADDRESS_MADURAI
};

function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${CANONICAL_ORIGIN}${item.url}`
    }))
  };
}

function createServiceSchema(name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: LEGAL_NAME,
      alternateName: BRAND_NAME,
      url: CANONICAL_ORIGIN
    },
    areaServed: 'India'
  };
}

function createFAQSchema(qaList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaList.map(qa => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.a
      }
    }))
  };
}

export const SEO_CONFIG = {
  '/': {
    title: 'AI Software Company in Bengaluru & Madurai | VRM AI Technology',
    description: 'VRM AI Technology builds Generative AI systems, conversational voice agents and machine learning software from Bengaluru and Madurai, India.',
    canonical: CANONICAL_ORIGIN,
    h1: 'Enterprise AI Built Around Your Workflows',
    schemas: [ORGANIZATION_SCHEMA]
  },
  '/solutions': {
    title: 'AI Solutions & Services | VRM AI Technology',
    description: 'AI integration, AI development, chatbot development, AI calling agents and machine learning services from VRM AI Technology in Bengaluru and Madurai.',
    canonical: `${CANONICAL_ORIGIN}/solutions`,
    h1: 'AI Software Services & Solutions',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' }
      ])
    ]
  },
  '/solutions/ai-integration-services': {
    title: 'AI Integration Services | VRM AI Technology',
    description: 'Connect language models, speech and machine learning to your CRM, ERP and cloud systems through REST APIs, event pipelines and containerized deployments.',
    canonical: `${CANONICAL_ORIGIN}/solutions/ai-integration-services`,
    h1: 'AI Integration Services',
    schemas: [
      ORGANIZATION_SCHEMA,
      createServiceSchema(
        'AI Integration Services',
        'Connect language models, speech and machine learning to your CRM, ERP and cloud systems through REST APIs, event pipelines and containerized deployments.'
      ),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: 'AI Integration Services', url: '/solutions/ai-integration-services' }
      ]),
      createFAQSchema([
        { q: 'What are AI integration services?', a: 'AI integration services embed artificial intelligence capabilities into existing enterprise systems and workflows, enabling seamless interoperability, efficient adoption, and measurable business impact.' },
        { q: 'How does system integration with AI help your business?', a: 'System integration with AI improves enterprise efficiency by enabling seamless interoperability between core systems and AI-driven services through standardized interfaces and data pipelines.' },
        { q: 'What is included in AI implementation services?', a: 'AI implementation services encompass structured deployment of AI solutions into production environments, integration with enterprise systems, and establishment of monitoring and performance controls.' },
        { q: 'Do I need to replace my existing software to use AI?', a: 'No. AI capabilities can be embedded into existing enterprise systems using integration layers, adapters, and middleware, allowing organizations to extend current platforms without disruptive replacements.' },
        { q: 'Which industries benefit the most from AI integration?', a: 'Industries such as finance, healthcare, retail, manufacturing, real estate, and energy benefit significantly by embedding intelligent automation and predictive analytics into existing workflows.' }
      ])
    ]
  },
  '/solutions/ai-development-services': {
    title: 'AI Development Services | VRM AI Technology',
    description: 'Custom AI development: machine learning, NLP, computer vision and Generative AI applications, built from discovery through production support.',
    canonical: `${CANONICAL_ORIGIN}/solutions/ai-development-services`,
    h1: 'AI Development Services',
    schemas: [
      ORGANIZATION_SCHEMA,
      createServiceSchema(
        'AI Development Services',
        'Custom AI development: machine learning, NLP, computer vision and Generative AI applications, built from discovery through production support.'
      ),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: 'AI Development Services', url: '/solutions/ai-development-services' }
      ]),
      createFAQSchema([
        { q: 'What AI development services does VRM AI Technology provide?', a: 'We provide end-to-end custom AI development services including machine learning models, natural language processing, computer vision, Generative AI applications, and enterprise software integration.' },
        { q: 'How long does custom AI development take?', a: 'Timelines vary based on complexity. Proof-of-concept solutions typically take 3 to 6 weeks, while production enterprise systems take 2 to 4 months.' },
        { q: 'How do you ensure data security in custom AI development?', a: 'We adhere to enterprise security standards, implementing strict role-based access controls, data encryption in transit and at rest, and compliance with ISO 9001:2015 frameworks.' }
      ])
    ]
  },
  '/solutions/ai-chatbot-development': {
    title: 'AI Chatbot Development | VRM AI Technology',
    description: 'Custom AI chatbots for customer support, e-commerce, HR and lead qualification, built on NLP and large language models, with human handoff.',
    canonical: `${CANONICAL_ORIGIN}/solutions/ai-chatbot-development`,
    h1: 'AI Chatbot Development',
    schemas: [
      ORGANIZATION_SCHEMA,
      createServiceSchema(
        'AI Chatbot Development',
        'Custom AI chatbots for customer support, e-commerce, HR and lead qualification, built on NLP and large language models, with human handoff.'
      ),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: 'AI Chatbot Development', url: '/solutions/ai-chatbot-development' }
      ]),
      createFAQSchema([
        { q: 'What is an AI chatbot and how does it work?', a: 'An AI chatbot uses Natural Language Processing (NLP) and Large Language Models (LLMs) to understand user intent, converse contextually, and automate responses or business tasks.' },
        { q: 'Can the chatbot integrate with our existing CRM and tools?', a: 'Yes. Our chatbots seamlessly connect with major CRMs, ERPs, ticketing systems, WhatsApp Business API, and custom REST APIs.' },
        { q: 'What happens when a chatbot cannot answer a customer question?', a: 'The chatbot intelligently escalates the inquiry to human support agents through an integrated seamless human-handoff protocol.' }
      ])
    ]
  },
  '/solutions/ai-calling-agent': {
    title: 'AI Calling Agent Solutions | VRM AI Technology',
    description: 'Conversational AI calling agents for inbound customer support and outbound campaigns, with enterprise CRM integration and seamless human handoff.',
    canonical: `${CANONICAL_ORIGIN}/solutions/ai-calling-agent`,
    h1: 'AI Calling Agent Company in India',
    schemas: [
      ORGANIZATION_SCHEMA,
      createServiceSchema(
        'AI Calling Agent Solutions',
        'Conversational AI calling agents for inbound customer support and outbound campaigns, with enterprise CRM integration and seamless human handoff.'
      ),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: 'AI Calling Agent', url: '/solutions/ai-calling-agent' }
      ]),
      createFAQSchema([
        { q: 'What is an AI Calling Agent?', a: 'A virtual assistant that handles inbound/outbound calls using natural language processing.' },
        { q: 'Does it sound robotic?', a: 'No, we use advanced neural voice synthesis to ensure human-like intonation and latency.' },
        { q: 'Can it integrate with my CRM?', a: 'Yes, we support native integrations with major CRMs and custom webhooks.' },
        { q: 'Is it secure?', a: 'We adhere to enterprise security standards including data encryption and compliance protocols.' },
        { q: 'How fast can we launch?', a: 'Typical deployment takes 2-4 weeks depending on complexity.' }
      ])
    ]
  },
  '/solutions/machine-learning-services': {
    title: 'Machine Learning Services | VRM AI Technology',
    description: 'Custom machine learning: predictive models, deep learning, computer vision and data pipelines, from data audit to deployed, monitored models.',
    canonical: `${CANONICAL_ORIGIN}/solutions/machine-learning-services`,
    h1: 'Custom Machine Learning Services',
    schemas: [
      ORGANIZATION_SCHEMA,
      createServiceSchema(
        'Machine Learning Services',
        'Custom machine learning: predictive models, deep learning, computer vision and data pipelines, from data audit to deployed, monitored models.'
      ),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: 'Machine Learning Services', url: '/solutions/machine-learning-services' }
      ]),
      createFAQSchema([
        { q: 'What types of machine learning models do you develop?', a: 'We build predictive analytics models, classification algorithms, computer vision pipelines, natural language processing models, and deep learning neural architectures tailored to specific business domains.' },
        { q: 'How do you validate and test ML models prior to deployment?', a: 'We perform multi-phase testing including cross-validation, edge-case analysis, latency benchmarking, and bias audits before rolling models into production environments.' },
        { q: 'Do you offer MLOps and ongoing model monitoring?', a: 'Yes. We establish automated retraining pipelines, data drift detection, and 24/7 inference performance monitoring.' }
      ])
    ]
  },
  '/products': {
    title: 'AI Products Suite | VRM AI Technology',
    description: 'Workflow SI, People Connect, SI Buddy, Exit Intelligence, Visionix SI, VRM Reality and Bench to Deploy: AI products by VRM AI Technology.',
    canonical: `${CANONICAL_ORIGIN}/products`,
    h1: 'AI Software Products & Platforms',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' }
      ])
    ]
  },
  '/products/workflow': {
    title: 'Workflow SI | AI Recruitment Screening | VRM AI Technology',
    description: 'An enterprise AI platform that automates business workflows, streamlines operations, and orchestrates intelligent processes across the organization.',
    canonical: `${CANONICAL_ORIGIN}/products/workflow`,
    h1: 'Workflow SI',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Workflow SI', url: '/products/workflow' }
      ])
    ]
  },
  '/products/workflow/xpress-screening': {
    title: 'Xpress Screening | VRM AI Technology',
    description: 'Transform resume screening with AI candidate intelligence. Analyze resumes, match applicants to job requirements, and rank top talent to accelerate hiring.',
    canonical: `${CANONICAL_ORIGIN}/products/workflow/xpress-screening`,
    h1: 'Xpress Screening',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Workflow SI', url: '/products/workflow' },
        { name: 'Xpress Screening', url: '/products/workflow/xpress-screening' }
      ])
    ]
  },
  '/products/workflow/screensage': {
    title: 'ScreenSage | VRM AI Technology',
    description: 'Automate candidate screening with AI-powered voice interviews that evaluate communication, experience, technical knowledge, and role suitability.',
    canonical: `${CANONICAL_ORIGIN}/products/workflow/screensage`,
    h1: 'ScreenSage',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Workflow SI', url: '/products/workflow' },
        { name: 'ScreenSage', url: '/products/workflow/screensage' }
      ])
    ]
  },
  '/products/workflow/videosage': {
    title: 'VideoSage | VRM AI Technology',
    description: 'Transform hiring with AI-powered video interviews that evaluate communication, technical knowledge, confidence, and behavioral skills for recruiters.',
    canonical: `${CANONICAL_ORIGIN}/products/workflow/videosage`,
    h1: 'VideoSage',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Workflow SI', url: '/products/workflow' },
        { name: 'VideoSage', url: '/products/workflow/videosage' }
      ])
    ]
  },
  '/products/workflow/codesage': {
    title: 'CodeSage | VRM AI Technology',
    description: 'Evaluate technical talent with AI-powered coding assessments, intelligent technical interviews, automated proctoring, and comprehensive candidate insights.',
    canonical: `${CANONICAL_ORIGIN}/products/workflow/codesage`,
    h1: 'CodeSage',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Workflow SI', url: '/products/workflow' },
        { name: 'CodeSage', url: '/products/workflow/codesage' }
      ])
    ]
  },
  '/products/people-connect': {
    title: 'People Connect | VRM AI Technology',
    description: 'Connect communities with People Connect: engage citizens through automated voice calling, official WhatsApp outreach, and real-time decision panels.',
    canonical: `${CANONICAL_ORIGIN}/products/people-connect`,
    h1: 'People Connect',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'People Connect', url: '/products/people-connect' }
      ])
    ]
  },
  '/products/sibuddy': {
    title: 'SI Buddy | AI Language Coach | VRM AI Technology',
    description: 'Learn, practice, and communicate confidently in multiple languages with your personal AI language coach to build speaking fluency and pronunciation.',
    canonical: `${CANONICAL_ORIGIN}/products/sibuddy`,
    h1: 'SI Buddy',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'SI Buddy', url: '/products/sibuddy' }
      ])
    ]
  },
  '/products/exitinterview': {
    title: 'Exit Intelligence | VRM AI Technology',
    description: 'Transform employee departures into actionable workforce intelligence with AI-powered exit interviews, sentiment analysis, and organizational insights.',
    canonical: `${CANONICAL_ORIGIN}/products/exitinterview`,
    h1: 'Exit Intelligence',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Exit Intelligence', url: '/products/exitinterview' }
      ])
    ]
  },
  '/products/visionix': {
    title: 'Visionix SI | AI Face Recognition | VRM AI Technology',
    description: 'Automate security, attendance, and biometric verification with Visionix SI face recognition engine using deep learning models with high accuracy.',
    canonical: `${CANONICAL_ORIGIN}/products/visionix`,
    h1: 'Visionix SI',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Visionix SI', url: '/products/visionix' }
      ])
    ]
  },
  '/products/vrm-reality': {
    title: 'VRM Reality | VRM AI Technology',
    description: 'An end-to-end real estate platform connecting buyers, sellers, and agents with map-first search, virtual Zoom tours, and a built-in agent CRM.',
    canonical: `${CANONICAL_ORIGIN}/products/vrm-reality`,
    h1: 'VRM Reality',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'VRM Reality', url: '/products/vrm-reality' }
      ])
    ]
  },
  '/products/bench-to-deploy': {
    title: 'Bench to Deploy | VRM AI Technology',
    description: 'Move unassigned bench talent into active billing with automated AI screening, real-time proctored evaluations, and intelligent requisition matching.',
    canonical: `${CANONICAL_ORIGIN}/products/bench-to-deploy`,
    h1: 'Bench to Deploy (B2D)',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Bench to Deploy', url: '/products/bench-to-deploy' }
      ])
    ]
  },
  '/about-us': {
    title: 'About Us | VRM AI Technology',
    description: 'VRM AI Technology is an AI product and engineering company headquartered in Bengaluru, with a development center in Madurai.',
    canonical: `${CANONICAL_ORIGIN}/about-us`,
    h1: 'About Us',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about-us' }
      ])
    ]
  },
  '/careers': {
    title: 'Careers | VRM AI Technology',
    description: 'No open roles right now. Send your profile to hr@vrmaitechnology.com and we will contact you when a matching role opens.',
    canonical: `${CANONICAL_ORIGIN}/careers`,
    h1: 'Careers',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Careers', url: '/careers' }
      ])
    ]
  },
  '/contactus': {
    title: 'Contact Us | VRM AI Technology',
    description: 'Contact VRM AI Technology: Bengaluru headquarters and Madurai development center. Email contactus@vrmaitechnology.com or call +91 73977 51037.',
    canonical: `${CANONICAL_ORIGIN}/contactus`,
    h1: 'Contact VRM AI Technology',
    schemas: [
      ORGANIZATION_SCHEMA,
      PROFESSIONAL_SERVICE_BLR,
      PROFESSIONAL_SERVICE_MADURAI,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contactus' }
      ])
    ]
  },
  '/ai-company-bangalore': {
    title: 'AI Development Company in Bengaluru | VRM AI Technology',
    description: 'VRM AI Technology is headquartered in Electronic City, Bengaluru. We build Generative AI, voice agents and machine learning software for enterprises.',
    canonical: `${CANONICAL_ORIGIN}/ai-company-bangalore`,
    h1: 'AI Development Company in Bengaluru',
    schemas: [
      ORGANIZATION_SCHEMA,
      PROFESSIONAL_SERVICE_BLR,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'AI Company in Bangalore', url: '/ai-company-bangalore' }
      ]),
      createFAQSchema([
        { q: "Where is VRM AI Technology's headquarters located in Bangalore?", a: 'Our corporate headquarters and registered office are situated at GoodWorks Infinity Park, 21, 2nd Main Rd, Electronic City Phase I, Bengaluru, Karnataka 560100.' },
        { q: 'What AI services and solutions do you provide to Bangalore enterprises?', a: 'We engineer enterprise Generative AI applications, custom domain LLMs, conversational voice calling agents, predictive machine learning pipelines, and Workflow SI recruitment automation.' },
        { q: 'How does VRM AI Technology deliver projects for Bangalore clients?', a: 'We offer a blended delivery model: executive strategy, technical architecture, and on-site alignment meetings in Bangalore, backed by robust, high-velocity engineering delivery from our staffed Madurai development center.' },
        { q: 'Which tech corridors and business hubs in Bangalore do you serve?', a: 'We serve organizations across Electronic City Phase I & II, Whitefield, Koramangala, Indiranagar, HSR Layout, Outer Ring Road (ORR), Manyata Tech Park, and the wider Bengaluru metropolitan region.' },
        { q: 'Is VRM AI Technology ISO 9001:2015 certified?', a: 'Yes. VRM AI Technology is an ISO 9001:2015 Certified company (Certificate No. E20260749630, Valid through 20 July 2029), ensuring structured quality management and secure AI system governance.' }
      ])
    ]
  },
  '/ai-company-madurai': {
    title: 'AI Development Company in Madurai | VRM AI Technology',
    description: 'VRM AI Technology is an AI development company in Madurai, engineering generative AI, voice bots, and ML systems for businesses across India.',
    canonical: `${CANONICAL_ORIGIN}/ai-company-madurai`,
    h1: 'AI Development Company in Madurai',
    schemas: [
      ORGANIZATION_SCHEMA,
      PROFESSIONAL_SERVICE_MADURAI,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'AI Company in Madurai', url: '/ai-company-madurai' }
      ]),
      createFAQSchema([
        { q: "Where is VRM AI Technology's development center located in Madurai?", a: 'Our staffed engineering development center is located at Door No.209, 1st Floor, No.147, 5th St, Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014.' },
        { q: 'What AI software solutions are engineered at the Madurai facility?', a: 'Our Madurai engineering hub develops Generative AI platforms, intelligent conversational chatbots, autonomous voice calling agents, machine learning pipelines, Visionix SI computer vision, and Workflow SI modules.' },
        { q: 'Can businesses in Madurai schedule an in-person meeting or technical consultation?', a: 'Yes. Local enterprises, startups, and institutions in Madurai can schedule on-site discussions, product demonstrations, and technical discovery workshops directly at our Tiruppalai facility or at their premises.' },
        { q: 'Which areas and industrial zones in Madurai do you serve?', a: 'We actively serve businesses across Tiruppalai, Poriyalar Nagar, Iyer Bungalow, K.K. Nagar, Anna Nagar, Mattuthavani, Othakadai, Tallakulam, and surrounding industrial corridors across Madurai district.' },
        { q: 'Is VRM AI Technology an ISO certified software company in Madurai?', a: 'Yes. VRM AI Technology is an ISO 9001:2015 Certified company (Certificate No. E20260749630, Valid through 20 July 2029) ensuring rigorous software quality and data security across every product release.' }
      ])
    ]
  },
  '/ai-company-tamil-nadu': {
    title: 'AI Software Company in Tamil Nadu | VRM AI Technology',
    description: 'VRM AI Technology builds Generative AI, chatbots, voice agents and machine learning software for Tamil Nadu businesses from its Madurai development center.',
    canonical: `${CANONICAL_ORIGIN}/ai-company-tamil-nadu`,
    h1: 'AI Software Company in Tamil Nadu',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'AI Company in Tamil Nadu', url: '/ai-company-tamil-nadu' }
      ]),
      createFAQSchema([
        { q: 'What AI services are available across Tamil Nadu?', a: 'Custom Generative AI solutions, AI chatbot development, AI calling agents, machine learning services and enterprise software development.' },
        { q: 'Does VRM AI Technology build custom AI solutions?', a: 'Yes. We build custom AI chatbots, AI calling agents, machine learning systems and Generative AI solutions, along with enterprise software development.' },
        { q: 'Is VRM AI Technology ISO certified?', a: 'Yes. VRM AI Technology is ISO 9001:2015 certified for quality management.' }
      ])
    ]
  },
  '/ai-innovation-india': {
    title: 'AI Software Solutions in India | VRM AI Technology',
    description: 'VRM AI Technology develops AI software from our Madurai engineering center and Bengaluru registered office, delivering GenAI, chatbots, and ML systems.',
    canonical: `${CANONICAL_ORIGIN}/ai-innovation-india`,
    h1: 'AI Software Solutions in India',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'AI Solutions in India', url: '/ai-innovation-india' }
      ]),
      createFAQSchema([
        { q: 'Where are VRM AI Technology operations located in India?', a: 'VRM AI Technology operates its registered headquarters in Electronic City, Bengaluru, Karnataka, and an offshore engineering development center in Tiruppalai, Madurai, Tamil Nadu.' },
        { q: 'What proprietary AI products does VRM AI Technology offer in India?', a: 'Workflow SI, People Connect (Global), SI Buddy, Exit Intelligence, Visionix SI, VRM Reality and Bench to Deploy (B2D).' },
        { q: 'How does VRM AI Technology ensure enterprise quality standards?', a: 'We hold an ISO 9001:2015 Quality Management certification (Certificate No. E20260749630, Valid through 20 July 2029) and implement structured engineering frameworks.' }
      ])
    ]
  },
  '/generative-ai-development': {
    title: 'Generative AI Development | VRM AI Technology',
    description: 'VRM AI Technology provides generative AI development services, platform architectures, and enterprise AI automation solutions.',
    canonical: `${CANONICAL_ORIGIN}/generative-ai-development`,
    h1: 'Generative AI Development Services',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Generative AI Development', url: '/generative-ai-development' }
      ]),
      createFAQSchema([
        { q: 'What are enterprise Generative AI development services?', a: 'Generative AI development services encompass the design, fine-tuning, integration, and deployment of foundation models (LLMs, multi-modal systems, and diffusion models) into core business workflows.' },
        { q: 'How do you prevent hallucinations in generative applications?', a: 'We implement Retrieval-Augmented Generation (RAG) connected to verified enterprise knowledge bases, apply strict semantic guardrails, and enforce deterministic output validation.' },
        { q: 'Can Generative AI models be deployed on private cloud or on-premise infrastructure?', a: 'Yes. We specialize in deploying open-weight models (such as Llama and Mistral) within private AWS/GCP/Azure VPCs or on-premises GPU clusters to guarantee full data sovereignty.' }
      ])
    ]
  },
  '/voice-ai-solutions': {
    title: 'Voice AI Solutions | VRM AI Technology',
    description: 'VRM AI Technology delivers voice AI solutions, real-time calling agents, speech synthesis, and conversational telephony automation for modern enterprises.',
    canonical: `${CANONICAL_ORIGIN}/voice-ai-solutions`,
    h1: 'Voice AI Solutions & Conversational Voice Agents',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Voice AI Solutions', url: '/voice-ai-solutions' }
      ]),
      createFAQSchema([
        { q: 'What are enterprise Voice AI solutions?', a: 'Voice AI solutions encompass real-time neural speech synthesis, automatic speech recognition (ASR), and conversational telephony automation that allow systems to converse naturally over phone lines.' },
        { q: 'How low is the latency of your conversational voice agents?', a: 'Our voice pipeline achieves sub-second turn-around times (500ms to 800ms) from the moment the user stops speaking to the agent response.' },
        { q: 'Can your voice bots connect to existing PBX and telecom systems?', a: 'Yes. We support SIP trunk interconnects, WebRTC protocols, Twilio, and enterprise PBX contact centers.' }
      ])
    ]
  },
  '/ai-chatbot-development': {
    title: 'AI Chatbot Development Services | VRM AI Technology',
    description: 'Custom AI chatbot development services by VRM AI Technology. Deploy intelligent, multi-channel chatbots for automated customer support and workflows.',
    canonical: `${CANONICAL_ORIGIN}/ai-chatbot-development`,
    h1: 'AI Chatbot & Conversational AI Services',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'AI Chatbot Development', url: '/ai-chatbot-development' }
      ]),
      createFAQSchema([
        { q: 'What channels do your enterprise chatbots support?', a: 'We deploy omni-channel conversational bots across WhatsApp Business, web portals, mobile apps (iOS & Android), Slack, Microsoft Teams, and custom REST API endpoints.' },
        { q: 'Can chatbots authenticate customers and perform account actions?', a: 'Yes. Through secure OAuth 2.0 flows and API integrations, chatbots can securely verify identities and execute actions such as resetting passwords or retrieving statements.' },
        { q: 'How are chatbot knowledge bases updated?', a: 'Knowledge bases can sync continuously with your CMS, documentation, knowledge wikis, or database tables using automated vector ingestion pipelines.' }
      ])
    ]
  },
  '/privacy-policy': {
    title: 'Privacy Policy | VRM AI Technology',
    description: 'Read the Privacy Policy of VRM AI Technology to understand how we collect, protect, and use your personal information across our platform and services.',
    canonical: `${CANONICAL_ORIGIN}/privacy-policy`,
    h1: 'Privacy Policy',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Privacy Policy', url: '/privacy-policy' }
      ])
    ]
  },
  '/terms-conditions': {
    title: 'Terms of Service | VRM AI Technology',
    description: 'Review the Terms of Service for using VRM AI Technology platforms and services. Understand your rights and responsibilities as a user of our products.',
    canonical: `${CANONICAL_ORIGIN}/terms-conditions`,
    h1: 'Terms of Service',
    schemas: [
      ORGANIZATION_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Terms of Service', url: '/terms-conditions' }
      ])
    ]
  },
  '/chennai': {
    title: 'AI Software Services for Chennai Businesses | VRM AI Technology',
    description: 'VRM AI Technology provides AI software development services for Chennai companies remotely from Bengaluru and Madurai. No physical office in Chennai.',
    canonical: '',
    noindex: true,
    h1: 'AI Software Services for Chennai Businesses',
    schemas: [ORGANIZATION_SCHEMA]
  },
  '/404': {
    title: 'Page Not Found | VRM AI Technology',
    description: 'Sorry, the page you are looking for does not exist on VRM AI Technology.',
    canonical: '',
    noindex: true,
    h1: 'Oops! Nothing Was Found',
    schemas: [ORGANIZATION_SCHEMA]
  }
};

export function getSEOForRoute(route) {
  const cleanRoute = (route || '/').replace(/\/+$/, '') || '/';
  if (SEO_CONFIG[cleanRoute]) {
    return { ...SEO_CONFIG[cleanRoute], route: cleanRoute };
  }
  return { ...SEO_CONFIG['/404'], route: cleanRoute };
}

export {
  CANONICAL_ORIGIN,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  BRAND_NAME,
  LEGAL_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  SOCIAL_PROFILES,
  ADDRESS_BENGALURU,
  ADDRESS_MADURAI,
  ORGANIZATION_SCHEMA,
  PROFESSIONAL_SERVICE_BLR,
  PROFESSIONAL_SERVICE_MADURAI
};
