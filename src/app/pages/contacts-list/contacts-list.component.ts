import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/shareds/interface/Contacts';
import { ContactService } from 'src/app/shareds/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.sass']
})
export class ContactsListComponent implements OnInit {

  contacts: Contacts[] = [];

  constructor(private service: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.getContactsList();
  }

  /**
   * @description get Contacts List from API
   */
  async getContactsList() {
    try {
      this.contacts = await this.service.getContacts();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @description see contact details 
   * */
  seeContactDetail(index: any) {
    this.router.navigate(['/contactsDetails', index])
  }

}
