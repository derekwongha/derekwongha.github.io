const projects = [
  {
    title: 'TasteLocal SG',
    type: 'Full-stack platform',
    summary: 'A Singapore food-tourism platform with Tourist, Vendor, and Administrator workflows for discovery, bookings, itinerary planning, and catalogue management.',
    technologies: ['React', 'Django REST Framework', 'MySQL', 'JWT', 'Google Maps'],
    visualLabel: 'Food tourism · three user roles',
    caseStudyUrl: '/projects/tastelocal/',
    sourceUrl: 'https://github.com/derekwongha/tastelocal-sg',
    featured: true,
  },
  {
    title: 'SmartShop AI',
    type: 'Supporting project',
    summary: 'A grounded AI-assisted shopping demonstration with a 50-product synthetic catalogue, provider fallback, deterministic degradation, and verified backend testing.',
    technologies: ['React', 'Django REST Framework', 'MySQL', 'OpenAI', 'Gemini'],
    visualLabel: 'Grounded AI · synthetic catalogue',
    caseStudyUrl: '/projects/smartshop/',
    sourceUrl: 'https://github.com/derekwongha/smartshop-ai',
  },
  {
    title: 'HopeHands',
    type: 'Supporting project',
    summary: 'A role-protected volunteer onboarding workflow with controlled CSV intake, administrative reporting, and failure-aware HubSpot synchronization.',
    technologies: ['React', 'Django REST Framework', 'MySQL', 'JWT', 'HubSpot'],
    visualLabel: 'Volunteer onboarding · resilient CRM boundary',
    caseStudyUrl: '/projects/hopehands/',
    sourceUrl: 'https://github.com/derekwongha/hopehands-volunteer',
  },
  {
    title: 'SilentLibrary',
    type: 'Additional coursework',
    summary: 'A server-rendered library coursework project demonstrating Django fundamentals, authentication, catalogue search, relational data, and role checks.',
    technologies: ['Django', 'Python', 'MySQL', 'HTML', 'CSS'],
    visualLabel: 'Django foundations',
    sourceUrl: null,
  },
]

export default projects
