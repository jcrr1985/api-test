import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsDetails } from 'src/app/shareds/enum/enums';
import { Contacts } from 'src/app/shareds/interface/Contacts';
import { ContactService } from 'src/app/shareds/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

  contactIndex: number;
  contactDetails: Contacts | undefined;
  contactDetailsEnum = ContactsDetails;

  constructor(private route: ActivatedRoute, private router: Router, private service: ContactService) {
    this.contactIndex = 0;
  }

  ngOnInit(): void {
    this.getIndex();
    this.getContactDetails();
  }

  /**
   * @description get index from url
   */
  getIndex() {
    this.route.params.subscribe(param => { this.contactIndex = param.id })
  }

   /**
   * @description set details for the contact clicked
   */
  async getContactDetails() {
    try {
      this.contactDetails = await this.service.getContactDetails(this.contactIndex);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @description navigate to ContactList
   */
  seeContactsList() {
    this.router.navigate(['contactsList'])
  }
}
