export interface Award {
  name: string;
  link: string;
  timespan: string;
  earnings: string;
  description: string;
  img_name: string;
}

export interface ResearchItem {
  content: string;
  img_name: string;
  title: string;
}

export interface Journal {
  title: string;
  url: string;
  journal: string;
  authors: string;
}

export interface Conference {
  title: string;
  url: string;
  journal: string;
  authors: string;
  year: string;
}

export interface Fund {
  amount: string;
  img_name: string;
  purpose: string;
  role: string;
  source: string;
  timespan: string;
}

export interface Person {
  img_name: string;
  name: string;
  job?: string;
  research?: string;
}

export type StudentCategory =
  | 'director'
  | 'masters'
  | 'ms_alumni'
  | 'phd_alumni'
  | 'phds'
  | 'post_doc_alumni'
  | 'undergrad_alumni'
  | 'undergraduates';

export interface FundingSummary {
  total: string;
}

export const FIREBASE_PATHS = {
  AWARDS: 'honors/awards',
  RESEARCH: 'research/research',
  JOURNALS: 'journals/journals',
  CONFERENCES: 'publications/conferences',
  FUNDS: 'funding/funds',
  FUNDING: 'funding',
  PEOPLE: 'people',
  peopleCategory: (category: StudentCategory): string => `people/${category}`,
} as const;
