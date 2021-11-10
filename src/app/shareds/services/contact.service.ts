import { Injectable } from '@angular/core';
import { Contacts } from '../interface/Contacts';
import { contacts } from '../data_dummy/contacts'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  /**
   * @description returns a promise that fetches associated contactacts in case there were a real API, for this test purposes it's using dummy data.
   * 
   */
  getContacts(): Promise<Contacts[]> {
    return new Promise<Contacts[]>((res, rej) => {
      try {
        setTimeout(() => { res(contacts) }, 500)
      } catch (error) {
        rej(error)
      }
    })
  }

  /**
   * 
   * @param index reference index in the contacts array.
   * @returns {Contacts} object
   */
  getContactDetails(index: number): Promise<Contacts> {
    return new Promise<Contacts>((res, rej) => {
      try {
        setTimeout(() => { res(contacts[index]) }, 500)
      } catch (error) {
        rej(error)
      }
    })
  }

}

