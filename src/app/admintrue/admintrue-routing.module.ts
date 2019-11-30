import { UsersComponent } from './users/users.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { AdmintrueComponent } from './admintrue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'admintrue',
    component: AdmintrueComponent,
    children: [
      {path: '' , component: UsersComponent},
      {path: 'blas' , component: EmailBlastComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmintrueRoutingModule { }
