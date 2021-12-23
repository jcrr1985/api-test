import { Injectable } from '@angular/core';
import { Contacts } from '../interface/Contacts';
import { contacts } from '../data_dummy/contacts'
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /**
   * @description returns a promise that fetches associated contacts in case there were a real API, for this test purposes it's using dummy data.
   *
   */

  getContacts(): Observable<Contacts[]> {
    return of(contacts).pipe(delay(500));
  }
}

