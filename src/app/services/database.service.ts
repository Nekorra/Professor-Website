import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase
  ) { } 

  getData(path: string) {

    return this.db.object(path).valueChanges().pipe(take(1)).toPromise();
  }
}
