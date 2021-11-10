import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'contactsList' },
  { path: 'contactsList', component: ContactsListComponent },
  { path: 'contactsDetails/:id', component: ContactDetailsComponent },
  { path: '**', redirectTo: 'contactsList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
