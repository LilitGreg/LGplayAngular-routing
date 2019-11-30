import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintrueRoutingModule } from './admintrue-routing.module';
import { AdmintrueComponent } from './admintrue.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [AdmintrueComponent, EmailBlastComponent, UsersComponent],
  imports: [
    CommonModule,
    AdmintrueRoutingModule
  ]
})
export class AdmintrueModule { }
