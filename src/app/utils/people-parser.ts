import { Person, StudentCategory } from '../models/content.models';

const STUDENT_CATEGORIES: StudentCategory[] = [
  'director',
  'masters',
  'ms_alumni',
  'phd_alumni',
  'phds',
  'post_doc_alumni',
  'undergrad_alumni',
  'undergraduates',
];

export type ParsedPeople = Record<StudentCategory, Person[]> & {
  alumni: Person[];
};

function normalizePerson(entry: unknown): Person {
  if (typeof entry === 'string') {
    return { name: entry.trim(), img_name: '' };
  }

  if (entry && typeof entry === 'object') {
    const raw = entry as Partial<Person>;
    return {
      img_name: raw.img_name || '',
      name: (raw.name || '').trim(),
      job: raw.job,
      research: raw.research,
    };
  }

  return { name: String(entry ?? '').trim(), img_name: '' };
}

export function personDisplayName(person: Person | string): string {
  if (typeof person === 'string') {
    return person.trim();
  }
  return (person.name || '').trim();
}

function toPersonArray(value: unknown): Person[] {
  if (!value) {
    return [];
  }

  const entries = Array.isArray(value)
    ? value
    : typeof value === 'object'
      ? Object.keys(value)
          .sort((a, b) => Number(a) - Number(b))
          .map((key) => (value as Record<string, unknown>)[key])
      : [value];

  return entries
    .map(normalizePerson)
    .filter((person) => person.name.length > 0);
}

export function parsePeople(data: Record<string, unknown> | null | undefined): ParsedPeople {
  const result = {} as Record<StudentCategory, Person[]>;

  for (const category of STUDENT_CATEGORIES) {
    result[category] = data ? toPersonArray(data[category]) : [];
  }

  return {
    ...result,
    alumni: [...result.phd_alumni, ...result.post_doc_alumni],
  };
}
