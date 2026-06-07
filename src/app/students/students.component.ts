import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Person, StudentCategory } from '../models/content.models';
import { parsePeople, personDisplayName } from '../utils/people-parser';

interface StudentSection {
  key: StudentCategory;
  label: string;
  people: Person[];
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  sections: StudentSection[] = [];

  private readonly sectionConfig: { key: StudentCategory; label: string }[] = [
    { key: 'phds', label: 'PhD Students' },
    { key: 'masters', label: 'Master Students' },
    { key: 'undergraduates', label: 'Undergraduate Students' },
    { key: 'post_doc_alumni', label: 'Post-Doc Alumni' },
    { key: 'phd_alumni', label: 'PhD Alumni' },
    { key: 'ms_alumni', label: 'MS Alumni' },
  ];

  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const people = await this.databaseService.getPeople();
    const parsed = parsePeople(people);

    this.sections = this.sectionConfig
      .map(({ key, label }) => ({
        key,
        label,
        people: parsed[key],
      }))
      .filter((section) => section.people.length > 0);
  }

  isNameOnlySection(section: StudentSection): boolean {
    return section.key === 'undergraduates';
  }

  displayName(person: Person): string {
    return personDisplayName(person);
  }

  getSubtitle(person: Person): string {
    return person.research || person.job || '';
  }

  hasPhoto(person: Person): boolean {
    return !!person.img_name;
  }

  initials(person: Person): string {
    const parts = this.displayName(person).split(/\s+/).filter(Boolean);
    if (!parts.length) {
      return '?';
    }
    const first = parts[0].charAt(0);
    const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
    return (first + last).toUpperCase();
  }

}
