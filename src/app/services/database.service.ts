import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { first, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  list: any; 

  constructor(
    private db: AngularFireDatabase,
  ) { } 

  getData(path: string) {
    return this.db.object(path).valueChanges().pipe(take(1)).toPromise();
  }

  async addAwardData(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data)
  }

  async addJournalData(path: string, title: string, url: string, journal: string, authors: string) {
    await this.db.object(path).valueChanges().pipe(take(1)).toPromise().then((data: any) => {
      this.list = data;
    })
    this.list.unshift({authors: authors, url: url, journal: journal, title: title});
    const ref = this.db.object(path);
    return ref.set(this.list);
  }

  async addPublicationData(path: string, title: string, url: string, journal: string, authors: string, year: string) {
    await this.db.object(path).valueChanges().pipe(take(1)).toPromise().then((data: any) => {
      this.list = data;
    })
    this.list.unshift({authors: authors, url: url, journal: journal, title: title, year: year});
    const ref = this.db.object(path);
    return ref.set(this.list);
  }

  remove(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data);
  }
  
  async addResearchData(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data)
  }


}
