import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintrueRoutingModule } from './admintrue-routing.module';
import { AdmintrueComponent } from './admintrue.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UsersComponent } from './users/users.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AdmintrueComponent, EmailBlastComponent, UsersComponent],
  imports: [
    CommonModule,
    AdmintrueRoutingModule,
    DragDropModule
  ]
})
export class AdmintrueModule { }
