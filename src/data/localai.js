export const localAiMetrics = [
  ['250+', 'listings screened in the first week'],
  ['33 / 33', 'jobs recovered in one run, 0 timeouts'],
  ['~156 s', 'measured local analysis per job'],
  ['0', 'applications sent without my decision'],
]

export const localAiStack = [
  ['Application', 'Python · SQLite · openpyxl · BeautifulSoup · Requests · vanilla HTML/CSS/JavaScript dashboard'],
  ['Integration', 'Gmail API with read-only OAuth · JobStreet listing pages · Excel application tracker'],
  ['Local model', 'LM Studio · openai/gpt-oss-20b · OpenAI-compatible local endpoint on a laptop with a 6 GB GPU'],
]

export const localAiScreenshots = [
  ['01-review-queue.png', 'Review queue: each listing is scored and shown with the local model\'s summary, matched evidence and honest gaps.', 'Dashboard listing five synthetic job cards with priority badges, and a detail panel showing an executive summary, key matches and key gaps for the selected role'],
  ['02-cover-letter.png', 'After I choose Pursue, an editable cover-letter draft is generated from verified evidence only.', 'Dashboard detail panel showing an editable draft cover letter for a fictional company, with summary, key matches and key gaps below it'],
  ['03-confirm-application.png', 'Marking an application as submitted opens a confirmation step; nothing is written until I confirm.', 'Modal dialog titled Mark Application as Submitted showing role, company, date, priority, work type, URL and notes fields, with Cancel and Confirm and Write Excel buttons'],
  ['04-tracker-writeback.png', 'The confirmed application is written to the next free row of the Excel tracker, with a backup taken first.', 'Excel tracker row APP-001 showing date, company, role, source, status Applied, priority High and notes'],
]
