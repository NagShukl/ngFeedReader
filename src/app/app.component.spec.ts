import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { FeedProviderService } from './services/feed-provider.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchHeaderComponent,
        FeedListComponent,
        FeedItemComponent
      ],
      imports: [FormsModule, HttpClientTestingModule ],
      providers: [
        FeedProviderService,
        HttpClientTestingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ngFeedReader'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ngFeedReader');
  // });

  // fit('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngFeedReader!');
  // });
});
