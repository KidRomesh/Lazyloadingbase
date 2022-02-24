import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SharedComponent } from './shared.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '', component: NavComponent,
    children: [{
      path: 'test', component: TestComponent, pathMatch: 'full'
    },
    {
      path:'employees', loadChildren: () => import('../employees/employees.module').then(m=>m.EmployeesModule)
    }
  ]
  },
  




];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
