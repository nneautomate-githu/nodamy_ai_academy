import { 
  Course, 
  AITool, 
  PortfolioProject, 
  Testimonial, 
  FaqItem, 
  DownloadableResource, 
  SuccessMetric, 
  AdvantageCard,
  WhatYouWillLearnItem
} from './types';

export const COURSES: Course[] = [
  {
    id: 'content-creator',
    title: 'AI Content Creator Masterclass',
    suitability: 'Beginner',
    badge: 'Beginner Friendly',
    description: 'Transform your creative workflow. Learn to generate professional graphics, premium visual content, videos, music, and complete marketing assets from scratch using the world\'s most advanced AI tools.',
    topics: [
      'AI Fundamentals & Mindset',
      'Core Prompt Engineering',
      'AI Image Generation (Midjourney & Leonardo)',
      'Brand Identity & Logo Design',
      'Marketing Flyer & Poster Design',
      'Hyper-Realistic Product Mockups',
      'Cinematic AI Video Generation',
      'AI Music & Soundtrack Generation',
      'CapCut Video Editing with AI Sync',
      'AI Monetization Strategies',
      'Finding and Pitching Clients'
    ],
    price: '14,900',
    originalPrice: '29,900',
    ctaText: 'Enroll Now'
  },
  {
    id: 'creator-pro',
    title: 'AI Creator Pro Masterclass',
    suitability: 'Intermediate & Advanced',
    badge: 'Most Popular',
    isPopular: true,
    description: 'Become an elite tech-enabled creator. Step into the world of AI software generation, website automation, and no-code product development to build fully-functional applications and high-converting channels.',
    topics: [
      'Advanced Prompt Engineering Methods',
      'AI Script Writing & Copywriting Matrix',
      'Instant AI Website Creation & SEO',
      'No-Code App Building with AI tools',
      'Automated YouTube Channel Orchestration',
      'UGC (User Generated Content) Creation',
      'Advanced AI Research & Productivity Hacks',
      'High-Impact Personal Branding',
      'High-Income Freelancing Strategies',
      'Complex Monetization Pipelines'
    ],
    price: '24,900',
    originalPrice: '49,900',
    ctaText: 'Enroll Now'
  },
  {
    id: 'private-coaching',
    title: 'Private Coaching & Corporate Training',
    suitability: 'All Levels',
    badge: 'VIP Experience',
    description: 'Bespoke one-on-one sessions or custom corporate bootcamps tailored strictly to your individual goals, industry vertical, or business operations. Optimize your workflows with expert guidance.',
    topics: [
      'Bespoke Curriculum Mapping',
      '1-on-1 Deep-Dives & Tool Setups',
      'Internal Workflow Automation Audits',
      'Custom GPTs & Custom Assistant Provisioning',
      'Executive Leadership AI Orientations',
      'Direct Project Collaboration & Advisory',
      'Lifetime VIP Resource & Updates Vault'
    ],
    price: '49,900',
    ctaText: 'Book Consultation'
  }
];

export const WHAT_YOU_LEARN: WhatYouWillLearnItem[] = [
  {
    id: 'learn-1',
    title: 'Prompt Engineering',
    description: 'Learn the exact linguistic structures and formulas to elicit flawless responses from models like ChatGPT, Gemini, and Claude.',
    iconName: 'Terminal'
  },
  {
    id: 'learn-2',
    title: 'AI Image Generation',
    description: 'Master tools to create hyper-realistic portraits, product designs, architectural marvels, and digital artwork in seconds.',
    iconName: 'Image'
  },
  {
    id: 'learn-3',
    title: 'AI Video Creation',
    description: 'Generate cinematic motion, dynamic camera pans, and studio-grade videos using text-to-video and image-to-video AI.',
    iconName: 'Video'
  },
  {
    id: 'learn-4',
    title: 'AI Music Generation',
    description: 'Produce catchy, high-fidelity soundtracks, background scores, and vocal tracks without needing music production software.',
    iconName: 'Music'
  },
  {
    id: 'learn-5',
    title: 'AI Voice Generation',
    description: 'Synthesize incredibly natural human voiceovers, voice clones, and localized translations with realistic pitch and pacing.',
    iconName: 'Mic'
  },
  {
    id: 'learn-6',
    title: 'ChatGPT Power Usage',
    description: 'Deploy advanced workflows, data analysis, custom GPT agents, and web research shortcuts to supercharge your writing.',
    iconName: 'MessageSquareText'
  },
  {
    id: 'learn-7',
    title: 'Gemini Synergy',
    description: 'Leverage Google’s multimodality to analyze complex videos, parse giant files, and ground your searches in real-time facts.',
    iconName: 'Sparkles'
  },
  {
    id: 'learn-8',
    title: 'Claude Precision',
    description: 'Utilize Anthropic’s model for highly complex analytical reasoning, technical documentation, coding, and meticulous copy.',
    iconName: 'Cpu'
  },
  {
    id: 'learn-9',
    title: 'AI Website Building',
    description: 'Design and deploy modern, responsive, and SEO-optimized business websites in under 15 minutes using AI assistance.',
    iconName: 'Globe'
  },
  {
    id: 'learn-10',
    title: 'No-Code App Development',
    description: 'Build functional mobile and web applications without writing code, allowing you to prototype and launch SaaS products.',
    iconName: 'Smartphone'
  },
  {
    id: 'learn-11',
    title: 'UGC Creation',
    description: 'Design highly-engaging User Generated Content assets, ads, and reviews using automated, high-retention frameworks.',
    iconName: 'Users'
  },
  {
    id: 'learn-12',
    title: 'YouTube Automation',
    description: 'Build faceless YouTube channels that generate income on autopilot by automating scriptwriting, voiceover, and video edits.',
    iconName: 'Tv'
  },
  {
    id: 'learn-13',
    title: 'AI Productivity',
    description: 'Integrate browser extensions, document search tools, and scheduling agents to save 20+ hours of manual work every week.',
    iconName: 'Activity'
  },
  {
    id: 'learn-14',
    title: 'High-Income Freelancing',
    description: 'Find premium foreign clients, write winning proposals, negotiate projects, and scale your freelance agency using AI.',
    iconName: 'Briefcase'
  },
  {
    id: 'learn-15',
    title: 'AI Monetization',
    description: 'Turn your practical knowledge into cash flows via digital templates, micro-SaaS, premium content, and consulting.',
    iconName: 'Coins'
  }
];

export const AI_TOOLS: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s flagship conversational model for strategic planning, brainstorming, and writing assistance.',
    category: 'Text & Logic',
    primaryUse: 'Advanced Copywriting & General Problem Solving',
    courseCovered: 'Both Masterclasses',
    iconName: 'MessageCircle',
    features: ['Custom GPTs', 'Data Analysis', 'Voice Mode']
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Google\'s state-of-the-art multimodal model with deep Google Workspace integration and vast context windows.',
    category: 'Text & Logic',
    primaryUse: 'Vast Context Analysis & Live Grounding Search',
    courseCovered: 'Both Masterclasses',
    iconName: 'Sparkles',
    features: ['2M Context Window', 'Workspace Sync', 'Google Search Grounding']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s exceptionally articulate model specializing in logical workflows, technical prose, and long-form writing.',
    category: 'Text & Logic',
    primaryUse: 'Precision Writing & Code Formulation',
    courseCovered: 'Both Masterclasses',
    iconName: 'BookOpen',
    features: ['Artifacts', 'Meticulous Logic', 'High-Trust Analysis']
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Integrated design assistants to expedite image resizing, object erasing, background removal, and layouts.',
    category: 'Design & Creative',
    primaryUse: 'Rapid Content Layouts & Graphics Customization',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Palette',
    features: ['Magic Eraser', 'Instant Text-to-Image', 'Bulk Design Creator']
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    description: 'Developer-grade access to raw Gemini models to build custom prompts, test temperatures, and structure outputs.',
    category: 'Text & Logic',
    primaryUse: 'Raw API Prototyping & Multimodal System Prompts',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'Code',
    features: ['System Instructions', 'JSON Output Mode', 'API Key Generation']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'The absolute gold standard in artistic image generation, producing unmatched aesthetics and photographic realism.',
    category: 'Design & Creative',
    primaryUse: 'Premium Editorial Graphics & Cinematic Wallpapers',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Compass',
    features: ['Stylize parameters', 'Image Inpainting', 'Consistent Characters']
  },
  {
    id: 'google-flow',
    name: 'Google Flow',
    description: 'Advanced workspace workflow automation that coordinates file ingestion, structured output, and batch parsing.',
    category: 'Automation',
    primaryUse: 'Intelligent App and Document Workflow Connection',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'GitBranch',
    features: ['Automated Ingestion', 'Batch Prompting', 'Workspace Triggers']
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    description: 'An expansive design playground offering incredible control over aspect ratios, styles, textures, and canvas edits.',
    category: 'Design & Creative',
    primaryUse: 'Custom Asset Generation & Model Fine-Tuning',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Layers',
    features: ['Real-Time Canvas', 'Motion Generation', 'Custom LoRAs']
  },
  {
    id: 'kling',
    name: 'Kling AI',
    description: 'A powerful cinematic video generator capable of producing physically accurate motions and detailed scenes.',
    category: 'Video & Audio',
    primaryUse: 'High-Fidelity Text-to-Video Production',
    courseCovered: 'Both Masterclasses',
    iconName: 'Clapperboard',
    features: ['Physics Simulation', '1080p Output', 'Multi-Angle Shots']
  },
  {
    id: 'veo',
    name: 'Google Veo',
    description: 'Google’s next-generation video model that captures dramatic tracking shots, cinematic lighting, and realistic details.',
    category: 'Video & Audio',
    primaryUse: 'High-Definition Stylized Movie Generation',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'Film',
    features: ['High Visual Fidelity', 'Cinematic Directives', 'Consistent Subjects']
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    description: 'The industry standard for motion control, text-to-video, and generating fluid camera angles for short films.',
    category: 'Video & Audio',
    primaryUse: 'Cinematic B-Roll & Liquid Transition Loops',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Eye',
    features: ['Gen-3 Alpha Power', 'Camera Brush controls', 'High Framerate']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Hyper-realistic voice cloning, speech-to-speech, and emotional sound effect generator.',
    category: 'Video & Audio',
    primaryUse: 'Studio Voiceovers & Realistic Character Dialogue',
    courseCovered: 'Both Masterclasses',
    iconName: 'Volume2',
    features: ['Voice Cloning', 'Sound Effects Maker', 'Voice Design']
  },
  {
    id: 'capcut',
    name: 'CapCut',
    description: 'The premier video editing tool containing advanced AI features like auto-captions, keyframes, and background removal.',
    category: 'Video & Audio',
    primaryUse: 'Fast Social Media Editing & Sound Coordination',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Scissors',
    features: ['Auto Captions', 'AI Body Effects', 'Cloud Templates']
  },
  {
    id: 'suno-ai',
    name: 'Suno AI',
    description: 'An AI music generator that produces full songs with authentic-sounding lyrics, instrumentation, and melodies.',
    category: 'Video & Audio',
    primaryUse: 'Custom Jingles, Background Tracks, & Full Songs',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Music',
    features: ['Vocal Synthesis', 'Genre Prompting', 'Custom Lyric Inject']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'Advanced AI web development assistant that converts conversational prompts into interactive, beautiful, deployed web apps.',
    category: 'Development & No-Code',
    primaryUse: 'Building Complex React/Vite SaaS Prototypes',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'Heart',
    features: ['Instant Live Previews', 'Database Integrations', 'Vite/Tailwind Support']
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    description: 'Full-stack sandbox assistant running completely in-browser, generating client-side frameworks and Node servers on command.',
    category: 'Development & No-Code',
    primaryUse: 'Instant Dev Sandbox Generation',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'Zap',
    features: ['Complete Filesystem Control', 'Dev Server Run', 'Direct Deployment']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'An AI-first code editor integrated with Claude 3.5 Sonnet to write, edit, refactor, and understand code bases with ease.',
    category: 'Development & No-Code',
    primaryUse: 'Elite IDE Assistance & Codebase Editing',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'MousePointerClick',
    features: ['Tab Autocomplete', 'Codebase Chat', 'Interactive Terminal Composer']
  },
  {
    id: 'softr',
    name: 'Softr',
    description: 'Allows you to turn Airtable databases or Google Sheets into client portals, directories, and internal tooling.',
    category: 'Development & No-Code',
    primaryUse: 'Rapid Client Portal & Directory Generation',
    courseCovered: 'AI Creator Pro Masterclass',
    iconName: 'SquareStack',
    features: ['Airtable Integration', 'User Permissions', 'Stripe Payments']
  },
  {
    id: 'higgsfield',
    name: 'Higgsfield',
    description: 'Next-generation visual platform focusing on realistic human animations, action scenes, and social media shorts.',
    category: 'Video & Audio',
    primaryUse: 'Dynamic Human Motion & Social Ad Creation',
    courseCovered: 'Content Creator Masterclass',
    iconName: 'Flame',
    features: ['Action Shot Modeling', 'High Render Speed', 'Mobile Creator Suite']
  }
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Cyberpunk Sneaker Launch Campaign',
    category: 'AI Images',
    description: 'A complete commercial mockup set for an imaginary athletic brand, featuring hyper-stylized futuristic environments and perfect product consistency.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    studentName: 'Adebayo Johnson',
    tags: ['E-Commerce', 'Product Design', 'Commercial'],
    toolsUsed: ['Midjourney', 'Canva AI', 'Leonardo AI']
  },
  {
    id: 'proj-2',
    title: 'Echoes of Tomorrow Short Film',
    category: 'AI Videos',
    description: 'An atmospheric sci-fi cinematic teaser utilizing advanced physics simulations, complex motion paths, and custom ElevenLabs voice overlays.',
    imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800',
    studentName: 'Chinedu Eze',
    tags: ['Sci-Fi', 'Cinematic', 'Audio Sync'],
    toolsUsed: ['Runway Gen-3', 'Kling AI', 'ElevenLabs', 'CapCut']
  },
  {
    id: 'proj-3',
    title: 'Solaris Real Estate Hub',
    category: 'AI Websites',
    description: 'A lightning-fast, highly modern landing page built for a luxury property agency with integrated lead capturing and responsive layouts.',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    studentName: 'Sarah Alabi',
    tags: ['Real Estate', 'No-Code Web', 'Lead Capture'],
    toolsUsed: ['Lovable', 'Claude 3.5 Sonnet', 'Canva AI']
  },
  {
    id: 'proj-4',
    title: 'TaskFlow Micro-SaaS Tool',
    category: 'AI Apps',
    description: 'A client-facing task management dashboard containing authentication, real-time lists, and custom AI sub-task generation built entirely using AI.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    studentName: 'Tunde Bakare',
    tags: ['SaaS App', 'React Frontend', 'Live Data'],
    toolsUsed: ['Bolt.new', 'Cursor', 'Google AI Studio']
  },
  {
    id: 'proj-5',
    title: 'Aura Skincare Brand Rebrand',
    category: 'Brand Identity',
    description: 'A unified and organic visual brand system. Includes vector-style logo iterations, typography manuals, package textures, and matching social media grids.',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800',
    studentName: 'Nneka Obi',
    tags: ['Cosmetics', 'Logo Design', 'Typography'],
    toolsUsed: ['Leonardo AI', 'Canva AI', 'Midjourney']
  },
  {
    id: 'proj-6',
    title: 'Metaverse Gym UGC Launch',
    category: 'Marketing Campaigns',
    description: 'A full TikTok organic campaign, generating 12 distinct video hooks, automated avatar presenters, script variants, and synthetic background music.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    studentName: 'Blessing Williams',
    tags: ['Viral Marketing', 'Short Form Video', 'Voice Synthesis'],
    toolsUsed: ['Higgsfield', 'ElevenLabs', 'Suno AI', 'CapCut']
  },
  {
    id: 'proj-7',
    title: 'Renewable Tech Pitch Deck',
    category: 'Presentations',
    description: 'An interactive, investor-grade presentation slide deck containing beautiful bespoke vector layouts, AI data charts, and clean styling.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    studentName: 'David Udoh',
    tags: ['Clean Tech', 'Investor Pitch', 'Data Layout'],
    toolsUsed: ['ChatGPT', 'Claude', 'Canva AI']
  },
  {
    id: 'proj-8',
    title: 'PromptMatrix Premium Pack',
    category: 'Digital Products',
    description: 'A highly structured, downloadable prompt library containing 250+ vetted prompt blocks for Midjourney, Claude, and ChatGPT, which sold 500+ copies.',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    studentName: 'Emeka Nwosu',
    tags: ['Prompt Pack', 'Passive Income', 'Notion Hub'],
    toolsUsed: ['ChatGPT', 'Claude', 'Softr']
  }
];

export const STATS: SuccessMetric[] = [
  {
    id: 'stat-images',
    value: 25000,
    prefix: '',
    suffix: '+',
    label: 'Professional AI Images',
    description: 'Stunning commercial-grade assets generated by our creative students.'
  },
  {
    id: 'stat-videos',
    value: 12000,
    prefix: '',
    suffix: '+',
    label: 'Cinematic AI Videos',
    description: 'B-rolls, short films, social hooks, and promotional footage designed.'
  },
  {
    id: 'stat-websites',
    value: 1500,
    prefix: '',
    suffix: '+',
    label: 'Functional Websites',
    description: 'Fully active business landings, personal portfolios, and service sites.'
  },
  {
    id: 'stat-apps',
    value: 850,
    prefix: '',
    suffix: '+',
    label: 'No-Code AI Apps',
    description: 'Functional SaaS prototypes and internal business automation utilities.'
  },
  {
    id: 'stat-freelance',
    value: 94,
    prefix: '',
    suffix: '%',
    label: 'Freelancing Success',
    description: 'Students who successfully land international clients within 45 days.'
  },
  {
    id: 'stat-music',
    value: 4200,
    prefix: '',
    suffix: '+',
    label: 'AI Music Projects',
    description: 'Original tracks, audio commercials, and studio vocal layers produced.'
  },
  {
    id: 'stat-ugc',
    value: 3100,
    prefix: '',
    suffix: '+',
    label: 'UGC Campaigns',
    description: 'Engaging user-centric short-form ads engineered for online brands.'
  },
  {
    id: 'stat-products',
    value: 6800,
    prefix: '',
    suffix: '+',
    label: 'Digital Products Created',
    description: 'Prompt libraries, templates, and ebooks monetized directly by students.'
  }
];

export const ADVANTAGES: AdvantageCard[] = [
  {
    id: 'adv-1',
    title: 'Hands-on Practical Training',
    description: 'No boring theory. We open tools immediately and build live together, translating actions into lasting neurological skills.',
    iconName: 'Laptop'
  },
  {
    id: 'adv-2',
    title: 'Project-Based Learning',
    description: 'Every single lesson centers around a tangible, real-world asset that you design, refine, and deploy immediately.',
    iconName: 'FolderKanban'
  },
  {
    id: 'adv-3',
    title: 'Beginner-Friendly Teaching',
    description: 'We speak plain, simple language. Absolutely no technical backgrounds, coding skills, or computer science degrees are needed.',
    iconName: 'Smile'
  },
  {
    id: 'adv-4',
    title: 'Latest AI Tools',
    description: 'Our curriculum is constantly updated in real-time. You will learn cutting-edge tools weeks before the general public discovers them.',
    iconName: 'Cpu'
  },
  {
    id: 'adv-5',
    title: 'Portfolio Development',
    description: 'Exit the academy with an elite, highly professional showcase website containing 8+ distinct high-value client-ready projects.',
    iconName: 'LayoutGrid'
  },
  {
    id: 'adv-6',
    title: 'Real Client Projects',
    description: 'Test your capabilities on genuine commercial assignments from local and international companies to build true confidence.',
    iconName: 'Briefcase'
  },
  {
    id: 'adv-7',
    title: 'Ongoing Support',
    description: 'We do not abandon you. Access private weekly Q&A workshops to troubleshoot your technical pipelines and client pitches.',
    iconName: 'HelpCircle'
  },
  {
    id: 'adv-8',
    title: 'Community Learning',
    description: 'Surround yourself with a vibrant, hyper-driven peer group of creators, entrepreneurs, and professional builders.',
    iconName: 'Users'
  },
  {
    id: 'adv-9',
    title: 'Career Guidance',
    description: 'Gain tactical blueprints on freelance pricing, profile creation (Upwork/Fiverr), digital product publishing, and agency growth.',
    iconName: 'Milestone'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Olumide Sobola',
    role: 'Freelance UI Designer & Content Creator',
    company: 'Upwork Elite Freelancer',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Nodamy completely flipped my freelancing business. I used to spend days drafting custom design mockups and flyer graphics for client reviews. Now, using Midjourney and Leonardo, I present dozens of stunning variations within an hour. My delivery times dropped by 80% and my monthly client income practically tripled.'
  },
  {
    id: 'test-2',
    name: 'Ngozi Chukwu',
    role: 'E-commerce Brand Founder',
    company: 'Zera Aesthetics',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'I had zero technical skills and thought AI was only for software engineers. The Beginner Creator Masterclass took me step-by-step from prompt basics to full cinematic product video generation. I built my own cosmetics launch videos and flyer campaigns completely for free. This course is an absolute goldmine.'
  },
  {
    id: 'test-3',
    name: 'Samuel Adeniji',
    role: 'Digital Marketing Lead',
    company: 'Omni Media Group',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'The AI Creator Pro Masterclass exceeded all expectations. We learned how to write custom scripts, synthesize professional voiceovers, build functional no-code marketing apps, and deploy fully automated YouTube campaigns. If you want to remain relevant and highly paid in this digital economy, Nodamy is mandatory.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need coding experience?',
    answer: 'No. Our training is designed for complete beginners as well as working professionals. Most tools taught are no-code or low-code, making them incredibly easy to learn regardless of your technical or mathematical background.'
  },
  {
    id: 'faq-2',
    question: 'Can beginners join?',
    answer: 'Absolutely. We start right with the absolute fundamentals—demystifying AI, prompt formats, and simple commands—before progressing to more advanced concepts, ensuring every student can easily follow along.'
  },
  {
    id: 'faq-3',
    question: 'Is the training online?',
    answer: 'Yes. All training sessions are conducted online, allowing you to participate, interact, and learn from absolutely anywhere with a stable internet connection.'
  },
  {
    id: 'faq-4',
    question: 'Will recordings be available?',
    answer: 'Yes. All interactive lessons are fully recorded and provided to students where applicable, so you can easily revisit instructions, review tools, and learn at your exact own pace.'
  },
  {
    id: 'faq-5',
    question: 'What device do I need?',
    answer: 'For the AI Content Creator Masterclass (Package 1), a modern smartphone with a stable internet connection is entirely enough to participate in the training and complete most practical exercises. Many of the AI tools used in this course work perfectly well on mobile devices.\n\nFor the AI Creator Pro Masterclass (Package 2), a laptop (Windows or Mac) is strongly recommended. This package includes building AI-powered websites, no-code applications, and other advanced projects that are best completed on a computer.\n\nIf you don\'t have a laptop yet, you can start with Package 1, begin applying your new AI skills to earn income, and later upgrade to Package 2 when you\'re ready.'
  },
  {
    id: 'faq-6',
    question: 'Will I receive support after the training?',
    answer: 'Yes. Students receive post-training support, community guidance, access to interactive Q&A workshops, and regular updates on new learning resources and tools.'
  },
  {
    id: 'faq-7',
    question: 'Will I receive a certificate?',
    answer: 'Yes. Students who successfully complete the required practical training assignments and develop their graduation portfolio will receive a digital Certificate of Completion.'
  }
];

export const RESOURCES: DownloadableResource[] = [
  {
    id: 'res-1',
    title: 'AI Prompt Master Guide',
    description: 'Get our private copy-paste prompt formulas and linguistic structures to obtain perfect, high-quality responses from ChatGPT, Gemini, and Claude instantly.',
    size: '4.2 MB',
    type: 'Guide',
    downloadsCount: 1420,
    topicsCovered: ['Role Playing Prompting', 'Few-Shot Learning', 'Chain-of-Thought Templates']
  },
  {
    id: 'res-2',
    title: 'Beginner AI Career Roadmap',
    description: 'A step-by-step master plan laying out which tools to learn, how to package your services, and how to land high-paying international clients in 45 days.',
    size: '2.8 MB',
    type: 'Roadmap',
    downloadsCount: 980,
    topicsCovered: ['Niche Selection', 'Upwork Setup Blueprint', 'First 5 Clients Guide']
  },
  {
    id: 'res-3',
    title: 'The Ultimate AI Tools Directory',
    description: 'A comprehensive, categorized guide of 150+ essential AI tools for content creation, audio, video editing, no-code web dev, and business automation.',
    size: '1.9 MB',
    type: 'Resource List',
    downloadsCount: 2150,
    topicsCovered: ['Feature Comparisons', 'Free vs Paid Index', 'Mobile Capability Tags']
  },
  {
    id: 'res-4',
    title: 'Free Video & Copywriting Prompt Templates',
    description: 'The exact high-conversion script templates and aesthetic hooks we use to generate highly engaging short-form marketing videos and social ads.',
    size: '3.1 MB',
    type: 'Templates',
    downloadsCount: 1640,
    topicsCovered: ['TikTok Hook Scripts', 'LinkedIn Copy Blocks', 'CapCut Sync Sheets']
  }
];
