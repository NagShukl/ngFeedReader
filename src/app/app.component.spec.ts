import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { FeedProviderService } from './services/feed-provider.service';
import { environment } from '../environments/environment';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchHeaderComponent,
        FeedListComponent,
        FeedItemComponent
      ],
      imports: [FormsModule, HttpClientTestingModule],
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



  it('should render git profile image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').href).toContain(environment.GIT_PROJECT_URL);
    expect(compiled.querySelector('.navbar-brand > img').getAttribute('src')).toContain(environment.AUTHOR_POFILE_IMG);
    expect(compiled.querySelector('.search-control > input')).toBeTruthy();
    expect(compiled.querySelector('.search-control > button')).toBeTruthy();
  });
  it('should render Search input text and button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.search-control > input')).toBeTruthy();
    expect(compiled.querySelector('.search-control > button')).toBeTruthy();
  });

  it(`should execute performSearchAction`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const tag = 'jaishriram';
    app.performSearchAction(tag);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.listContainer')).toBeTruthy();
    });
  });
});
