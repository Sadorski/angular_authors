import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'new',component: NewComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: '**',component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
