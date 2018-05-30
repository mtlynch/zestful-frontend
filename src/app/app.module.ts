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

// Modules
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { CurlCmdPipe } from './_pipes/curl-cmd.pipe';

// Services
import { ParserService } from './_services/parser.service';

// Components
import { MailingListComponent } from './_components/mailing-list/mailing-list.component';
import { NavComponent } from './_components/nav/nav.component';

// Public pages
import { HomePageComponent } from './public/home-page/home-page.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { CodeSnippetComponent } from './_components/code-snippet/code-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    CurlCmdPipe,
    HomePageComponent,
    MailingListComponent,
    NavComponent,
    SignUpComponent,
    CodeSnippetComponent,
  ],
  imports: [
    AppRoutingModule,
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
  providers: [CurlCmdPipe, ParserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
