export const hopeHandsMetrics = [
  ['15', 'synthetic volunteers'],
  ['5', 'Pending'],
  ['5', 'Approved'],
  ['5', 'Rejected'],
  ['56', 'backend tests'],
  ['3', 'volunteer roles'],
  ['3', 'HubSpot modes'],
  ['Persisted', 'CRM sync state'],
  ['Safe failure', 'approval remains valid'],
  ['Staff-only', 'manual CRM recovery'],
]

export const hopeHandsScreenshots = [
  ['01-volunteer-registration.png', 'Validated public volunteer registration using synthetic demonstration data', 'HopeHands validated volunteer registration form with role, availability, password guidance, and synthetic-data notice'],
  ['02-volunteer-profile-status.png', 'Volunteer profile with clear application-status guidance', 'HopeHands volunteer profile showing a prominent Pending application status and next-step guidance'],
  ['03-admin-dashboard.png', 'Administrator dashboard with reporting, search, and controlled CSV intake', 'HopeHands staff dashboard showing summary cards, charts, CSV intake, search, and synthetic applications'],
  ['04-approval-hubspot-state.png', 'Administrator CRM retry recovery with persisted mock HubSpot synchronization', 'HopeHands administrator CRM panel showing prior Failed state, Retry CRM sync recovery, Mock Synced result, synthetic contact ID, preserved review details, and no-live-request disclosure'],
]

export const hopeHandsStack = [
  ['Frontend', 'React · Vite · React Router · Recharts · plain CSS'],
  ['Backend', 'Python · Django · Django REST Framework · SimpleJWT'],
  ['Data and integration', 'MySQL · Django ORM · controlled CSV intake · HubSpot boundary'],
]
