import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsDetailComponent } from './accounts-detail/accounts-detail.component';
import { AccountsCreateComponent } from './accounts-create/accounts-create.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";


@NgModule({
  declarations: [
    AppComponent,
    AccountsDetailComponent,
    AccountsCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
