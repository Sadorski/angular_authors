import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditComponent } from './edit/edit.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    PagenotfoundComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
