export const screenshots = [
  ['01-public-discovery-landing.png', 'Public discovery and experience catalogue', 'TasteLocal SG public discovery page with experience catalogue and search controls'],
  ['02-search-filter-results.png', 'Keyword, category, location and price filtering', 'TasteLocal SG catalogue showing filtered experience search results'],
  ['03-google-maps-discovery.png', 'Google Maps catalogue discovery', 'TasteLocal SG discovery page with Google Maps and public experience markers'],
  ['04-experience-details-availability.png', 'Experience details and future availability', 'TasteLocal SG experience details showing description, pricing and future availability'],
  ['05-gemini-recommendations-fallback.png', 'Deterministic recommendation fallback when live Gemini is unavailable', 'TasteLocal SG recommendations page clearly identifying the deterministic catalogue fallback'],
  ['06-tourist-booking-request.png', 'Tourist booking request', 'TasteLocal SG Tourist booking request page with an available time slot selected'],
  ['07-tourist-itinerary-planner.png', 'Tourist itinerary planning', 'TasteLocal SG Tourist itinerary arranged across multiple future days'],
  ['08-vendor-dashboard.png', 'Vendor dashboard', 'TasteLocal SG approved Vendor dashboard with listing and booking summaries'],
  ['09-vendor-booking-management.png', 'Vendor booking management', 'TasteLocal SG Vendor booking request management workflow'],
  ['10-vendor-availability-management.png', 'Vendor availability management', 'TasteLocal SG Vendor availability page with available and unavailable time slots'],
  ['11-admin-vendor-approval.png', 'Administrator Vendor approval', 'TasteLocal SG Administrator view for reviewing a pending Vendor application'],
  ['12-tourist-review-submission.png', 'Tourist review submission for an eligible completed booking', 'TasteLocal SG Tourist review form for an eligible completed booking'],
]

export const technologyGroups = [
  { title: 'Frontend', items: ['React', 'Vite', 'React Router DOM', 'Axios', 'Bootstrap'] },
  { title: 'Backend and data', items: ['Python', 'Django', 'Django REST Framework', 'SimpleJWT', 'MySQL through the Django ORM'] },
  { title: 'Integrations', items: ['Google Maps JavaScript API', 'Gemini using gemini-2.5-flash'] },
]

export const roles = [
  { title: 'Tourist', items: ['Browse public experiences', 'Search and filter', 'Submit and cancel booking requests', 'Review eligible completed experiences', 'Manage one itinerary'] },
  { title: 'Vendor', items: ['Register for Administrator approval', 'Manage owned listings after approval', 'Manage availability', 'Approve, reject, cancel and complete booking requests for owned experiences'] },
  { title: 'Administrator', items: ['Approve Vendors', 'Manage categories', 'Moderate listings and reviews', 'View and manage platform users'] },
]
