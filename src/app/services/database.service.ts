import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  list: any; 

  constructor(
    private db: AngularFireDatabase
  ) { } 

  getData(path: string) {
    return this.db.object(path).valueChanges().pipe(take(1)).toPromise();
  }

  async addAwardData(path: string, name: string, link: string, timespan: string, earnings: string, extra: string) {
    await this.db.object(path).valueChanges().pipe(take(1)).toPromise().then((data: any) => {
      this.list = data;
    });
    this.list.unshift({name: name, link: link, timespan: timespan, earnings: earnings, extra: extra});
    const ref = this.db.object(path);
    return ref.set(this.list)
  }

  removeAward(path: string) {
    const ref = this.db.object(path);
    return ref.remove();
  }

  async addResearchData(path: string, content: string, img_name: string, title: string) {
    await this.db.object(path).valueChanges().pipe(take(1)).toPromise().then((data: any) => {
      this.list = data;
    });
    this.list.unshift({content: content, img_name: img_name, title: title});
    const ref = this.db.object(path);
    return ref.set(this.list)
  }
}
