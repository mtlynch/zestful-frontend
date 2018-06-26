import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
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
import { CodeSnippetComponent } from './_components/code-snippet/code-snippet.component';

// Public pages
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { DemoComponent } from './public/demo/demo.component';
import { AboutComponent } from './public/about/about.component';
import { FeatureCardComponent } from './_components/feature-card/feature-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CurlCmdPipe,
    DemoComponent,
    MailingListComponent,
    NavComponent,
    SignUpComponent,
    CodeSnippetComponent,
    AboutComponent,
    FeatureCardComponent,
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
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [CurlCmdPipe, ParserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
