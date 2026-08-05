export const silentLibraryMetrics = [
  ['12', 'fictional books'],
  ['3', 'synthetic accounts'],
  ['2', 'active loans'],
  ['1', 'returned loan'],
  ['34', 'backend tests passed'],
  ['4', 'approved screenshots'],
]

export const silentLibraryScreenshots = [
  ['01-homepage.png', 'Editorial homepage for a server-rendered Django catalogue', 'SilentLibrary editorial homepage with centred typography, catalogue action, reading manifesto and controlled book preview'],
  ['02-catalogue-search.png', 'Searchable fictional catalogue with availability states', 'SilentLibrary catalogue search showing fictional covers, genre labels and available or on-loan states'],
  ['03-book-detail-borrowing.png', 'Book detail with a truthful borrowing action', 'SilentLibrary fictional book detail showing description, synopsis, available status and protected borrow action'],
  ['04-staff-dashboard.png', 'Staff dashboard for catalogue and loan oversight', 'SilentLibrary staff dashboard showing controlled catalogue, availability and loan metrics with management links'],
]

export const silentLibraryWorkflow = [
  ['Discover', 'A member searches fictional titles by book, author or genre and opens a server-rendered detail page.'],
  ['Borrow', 'An authenticated POST action transactionally checks whether the single lendable catalogue item is available.'],
  ['Return', 'The owning member returns an active loan, making the book available while retaining concise history.'],
  ['Administer', 'Staff-only pages support catalogue CRUD, summary metrics and read-only oversight of active and returned loans.'],
]

export const silentLibraryBoundaries = [
  ['Public visitor', 'Can view the editorial home page, register, log in and start local password recovery.'],
  ['Authenticated member', 'Can search the catalogue, view details, borrow an available book, return an owned loan and review history.'],
  ['Staff administrator', 'Receives server-enforced access to catalogue management, staff metrics, loan oversight and Django Admin.'],
]
