import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/shareds/interface/Contacts';
import { ContactsDetails } from 'src/app/shareds/enum/enums';
import { ContactService } from 'src/app/shareds/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

  private contactIndex!: number;
  public contactDetails!: Contacts;
  public contactDetailsEnum = ContactsDetails;

  constructor(private route: ActivatedRoute, private router: Router, private service: ContactService) {
  }

  ngOnInit(): void {
    this.getIndex();
    this.getContactDetails();
  }

  /**
   * @description get index from url
   */
  getIndex() {
    this.route.params.subscribe(param => this.contactIndex = param.id );
  }

   /**
   * @description set details for the clicked contact. 
   */
   getContactDetails() {
    try {
      this.service.getContacts().subscribe(contacts => this.contactDetails = contacts[this.contactIndex]);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @description navigate to ContactList
   */
  displayContactsList() {
    this.router.navigate(['contactsList']);
  }
}
