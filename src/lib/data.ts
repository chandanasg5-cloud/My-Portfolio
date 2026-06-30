export const profile = {
  name: 'Chandana S. Gowda',
  title: 'Business Analyst',
  location: 'Chicago, IL',
  email: 'chandanasg5@gmail.com',
  phone: '(262) 993-2691',
  linkedin: 'https://www.linkedin.com/in/chandanasgowda26',
  github: 'https://github.com/chandanasg5-cloud',
  summary:
    'Business Analyst with four years of experience across operations, risk, and marketing. I turn complex data into clear, defensible recommendations using SQL, Tableau, Power BI, and structured, hypothesis-driven analysis.',
}

export const stats = [
  { number: '4+', label: 'Years of experience', trend: [2, 3, 3, 4, 4, 5, 6] },
  { number: '15+', label: 'KPIs tracked per role', trend: [4, 6, 7, 9, 11, 13, 15] },
  { number: '20%+', label: 'Workflow efficiency gained', trend: [5, 8, 9, 12, 15, 18, 21] },
  { number: '3.98', label: 'Graduate GPA', trend: [3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.98] },
]

export const skillLevels = [
  { name: 'SQL', level: 92 },
  { name: 'Tableau', level: 90 },
  { name: 'Power BI', level: 85 },
  { name: 'Excel (VBA, Power Pivot)', level: 95 },
  { name: 'Statistical Modeling', level: 82 },
  { name: 'Alteryx', level: 78 },
]

export const about = [
  'I work at the line where data meets decision. My focus is operations efficiency, KPI development, risk analysis, and customer behavior, always measured by business impact rather than report volume.',
  'I hold a Master of Science in Business Analytics from DePaul University, and I have delivered work across organizations in the United Kingdom and India. That mix gives me both quantitative rigor and the stakeholder fluency to land a recommendation.',
  'My method is consistent: frame the problem, form a hypothesis, run the analysis, and present findings that drive action.',
]

export const certifications = [
  'Prince2 Foundation',
  'Microsoft Office Specialist (Excel, Word, PowerPoint)',
  'Alteryx Micro-Credential',
  'KPMG Data Analytics',
  'Tata Data Visualization',
]

export const experience = [
  {
    role: 'Business Analyst, Technology and Operations',
    company: 'Marketplace Direct Ltd',
    location: 'London, UK',
    period: '2020-2023',
    bullets: [
      'Identified operational gaps through hypothesis-driven analysis and drove a 20 percent improvement in workflow efficiency.',
      'Built Tableau and Excel reporting that tracked 15+ KPIs across procurement and operations for senior stakeholders.',
      'Partnered with IT, finance, and operations to implement process improvements across five business units.',
    ],
  },
  {
    role: 'Operations and Quality Analyst',
    company: 'Bundle Technologies (Swiggy)',
    location: 'Bangalore, India',
    period: '2019',
    bullets: [
      'Monitored 15+ KPIs on a platform processing thousands of daily transactions, surfacing trend shifts and risk signals.',
      'Reduced reporting discrepancies by 15 percent and lifted execution quality scores by more than 20 percent.',
      'Analyzed customer behavior across partner and end-user segments to inform service design.',
    ],
  },
  {
    role: 'Project Assistant',
    company: 'Posiflex Technologies',
    location: 'Bangalore, India',
    period: '2018',
    bullets: [
      'Ran market and competitive research for product and pricing decisions, preparing presentations for leadership.',
      'Supported requirements analysis and project coordination from scoping through delivery.',
    ],
  },
]

export const skills = [
  { category: 'Analytics', items: ['SQL', 'Tableau', 'Power BI', 'Alteryx', 'BigQuery', 'Advanced Excel'] },
  { category: 'Methods', items: ['Statistical Modeling', 'Hypothesis Testing', 'Funnel Analysis', 'Forecasting', 'Segmentation'] },
  { category: 'Business', items: ['KPI Development', 'Risk Analysis', 'Market Research', 'Strategic Recommendations'] },
  { category: 'Delivery', items: ['Problem Framing', 'UAT', 'Jira', 'Stakeholder Management'] },
]

type ProjectLink = { label: string; href: string }

export const projects: {
  title: string
  org: string
  context: string
  role: string
  actions: string[]
  outcome: string
  metric: string
  metricLabel: string
  links: ProjectLink[]
}[] = [
  {
    title: 'Funnel and KPI Analysis, Hazmat Industry',
    org: 'DePaul University Capstone',
    context:
      'A compliance process in the hazardous-materials industry was losing efficiency to unclear KPI drop-off and hidden workflow bottlenecks.',
    role: 'Lead analyst on the capstone team, owning problem framing through recommendation.',
    actions: [
      'Mapped the end-to-end process and built a multi-stage funnel to locate where KPIs dropped off.',
      'Ran hypothesis-driven analysis to isolate the bottlenecks with the largest impact.',
      'Translated findings into prioritized, defensible recommendations for stakeholders.',
    ],
    outcome: 'Recommendations improved tracking efficiency by roughly 30 percent.',
    metric: '+30%',
    metricLabel: 'tracking efficiency',
    links: [],
  },
  {
    title: 'Operations KPI Dashboard',
    org: 'Marketplace Direct Ltd',
    context:
      'Procurement and operations leaders across five business units lacked a single, trusted view of performance.',
    role: 'Business analyst owning the reporting solution end to end.',
    actions: [
      'Defined and consolidated 15+ KPIs spanning procurement and operations.',
      'Built a Tableau and Excel reporting suite tailored to senior stakeholders.',
      'Standardized metric definitions to cut reporting discrepancies and rework.',
    ],
    outcome: 'Faster, better-aligned decisions across all five business units.',
    metric: '15+',
    metricLabel: 'KPIs unified',
    links: [],
  },
  {
    title: 'FinOps Command Center',
    org: 'Self-Directed Project',
    context:
      'Early-stage founders had no single screen to answer the questions that decide a startup’s survival: how long until cash runs out, where the money is going, and whether anything is going wrong.',
    role: 'Sole designer and builder, from data model through the analytics engine and UI.',
    actions: [
      'Built a pure, fully unit-tested finance engine for cash runway, burn rate, revenue forecasts, and vendor concentration risk via the HHI index.',
      'Added anomaly detection that automatically flags duplicate vendor payments and spend spikes without being told where to look.',
      'Layered a deterministic rule-based analyst that ranks every finding by severity and explains, in plain English, what changed and why.',
    ],
    outcome:
      'A single decision screen that turns raw financial data into ranked, plain-English actions — runway, risk, and anomalies at a glance.',
    metric: '5',
    metricLabel: 'finance modules unified',
    links: [
      { label: 'Live demo', href: 'https://finops-command-center.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/chandanasg5-cloud/finops-command-center' },
    ],
  },
  {
    title: 'TRACE: Early High-Value Customer Prediction',
    org: 'Independent Research',
    context:
      'Customer-lifetime-value models are usually scored on the whole population, which lets a model look accurate just by re-identifying already high-spend customers while missing those whose spend is about to climb.',
    role: 'Author of the paper and reference implementation, owning the method, model, and evaluation.',
    actions: [
      'Designed the Trajectory-Signal Validity (TSV) test, which re-scores models on mid-spend customers against a naive threshold rule to expose hollow accuracy.',
      'Built TRACE, a transformer sequence encoder with self-supervised contrastive pre-training over short transaction windows and late fusion of transaction and engagement signals.',
      'Targeted the cold-start regime where aggregate RFM features are unstable, and published the work in IEEE format with a reference implementation.',
    ],
    outcome:
      'A reusable audit that separates genuine trajectory signal from re-identification, paired with a model built to pass it.',
    metric: '0.68',
    metricLabel: 'TSV AUC threshold',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/chandanasg5-cloud/Customer-Lifetime-Value-CLV-Customer-Segmentation',
      },
    ],
  },
  {
    title: 'Healthcare Claims Policy Assistant',
    org: 'Self-Directed Project',
    context:
      'Claims analysts need to know why a claim was denied and which policy rule applies — answers buried in long policy documents and easy for a generic chatbot to fabricate.',
    role: 'Designed and built the full retrieval-augmented application, frontend to backend.',
    actions: [
      'Built an assistant that answers denial questions grounded in the actual policy documents and cites the governing rule id (e.g. COV-002.2).',
      'Implemented retrieval with Postgres full-text search over chunked policy docs — no external embeddings service — and streamed answers via Server-Sent Events.',
      'Re-architected a Streamlit prototype into a Next.js (Vercel) and Encore TypeScript (Encore Cloud) monorepo driven by GitHub CI/CD.',
    ],
    outcome:
      'Traceable, policy-grounded answers — including drafted appeals — that cite their source rule rather than guessing.',
    metric: '5',
    metricLabel: 'analyst workflows',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/chandanasg5-cloud/healthcare-claims-policy-assistant',
      },
    ],
  },
]

export const education = [
  { degree: 'M.S. Business Analytics', school: 'DePaul University, Chicago', year: '2025', gpa: '3.98 / 4.00' },
  { degree: 'M.S. International Business', school: 'Kingston University, London', year: '', gpa: '' },
  { degree: 'MBA, Marketing and Human Resources', school: 'Jain University, Bangalore', year: '', gpa: '' },
  { degree: 'B.E. Electronics and Communication', school: 'Visvesvaraya Technological University', year: '', gpa: '' },
]
