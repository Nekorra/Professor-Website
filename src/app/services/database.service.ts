import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { take } from 'rxjs/operators';
import {
  Award,
  Conference,
  Fund,
  FundingSummary,
  Journal,
  Person,
  ResearchItem,
  StudentCategory,
  FIREBASE_PATHS,
} from '../models/content.models';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private readonly db: AngularFireDatabase) {}

  getData<T>(path: string): Promise<T | null> {
    return this.db.object<T>(path).valueChanges().pipe(take(1)).toPromise();
  }

  async updateData<T>(path: string, data: T): Promise<void> {
    await this.db.object(path).set(data);
  }

  getAwards(): Promise<Award[] | null> {
    return this.getData<Award[]>(FIREBASE_PATHS.AWARDS);
  }

  getResearch(): Promise<ResearchItem[] | null> {
    return this.getData<ResearchItem[]>(FIREBASE_PATHS.RESEARCH);
  }

  getJournals(): Promise<Journal[] | null> {
    return this.getData<Journal[]>(FIREBASE_PATHS.JOURNALS);
  }

  getConferences(): Promise<Conference[] | null> {
    return this.getData<Conference[]>(FIREBASE_PATHS.CONFERENCES);
  }

  getFunds(): Promise<Fund[] | null> {
    return this.getData<Fund[]>(FIREBASE_PATHS.FUNDS);
  }

  getFundingSummary(): Promise<FundingSummary | null> {
    return this.getData<FundingSummary>(FIREBASE_PATHS.FUNDING);
  }

  getPeople(): Promise<Record<StudentCategory, Person[]> | null> {
    return this.getData<Record<StudentCategory, Person[]>>(FIREBASE_PATHS.PEOPLE);
  }

  async addAwardData(path: string, data: Award[]): Promise<void> {
    await this.updateData(path, data);
  }

  async addJournalData(path: string, data: Journal[]): Promise<void> {
    await this.updateData(path, data);
  }

  async addPublicationData(path: string, data: Conference[]): Promise<void> {
    await this.updateData(path, data);
  }

  async addResearchData(path: string, data: ResearchItem[]): Promise<void> {
    await this.updateData(path, data);
  }

  async addFundData(path: string, data: Fund[]): Promise<void> {
    await this.updateData(path, data);
  }

  async addStudentData(path: string, data: Person[]): Promise<void> {
    await this.updateData(path, data);
  }
}
