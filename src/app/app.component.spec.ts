import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ParserService } from './_services/parser.service';
import { CurlCmdPipe } from './_pipes/curl-cmd.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurlCmdPipe,
        HomePageComponent,
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        ParserService,
        CurlCmdPipe,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
