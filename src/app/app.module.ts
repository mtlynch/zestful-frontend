import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Services
import { ParserService } from './_services/parser.service';

// Public pages
import { HomePageComponent } from './public/home-page/home-page.component';
import { MailingListComponent } from './_components/mailing-list/mailing-list.component';
import { NavComponent } from './_components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MailingListComponent,
    NavComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  providers: [ParserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
