import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchHeaderComponent } from './search-header.component';
import { FeedItemComponent } from '../feed-item/feed-item.component';
import { environment } from '../../../environments/environment';

describe('SearchHeaderComponent', () => {
  let component: SearchHeaderComponent;
  let fixture: ComponentFixture<SearchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHeaderComponent,
        FeedItemComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render git profile image', () => {
    const fixture = TestBed.createComponent(SearchHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').href).toContain(environment.GIT_PROJECT_URL);
    expect(compiled.querySelector('.navbar-brand > img').getAttribute('src')).toContain(environment.AUTHOR_POFILE_IMG);
    expect(compiled.querySelector('.search-control > input')).toBeTruthy();
    expect(compiled.querySelector('.search-control > button')).toBeTruthy();
  });
  it('should render Search input text and button', () => {
    const fixture = TestBed.createComponent(SearchHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.search-control > input')).toBeTruthy();
    expect(compiled.querySelector('.search-control > button')).toBeTruthy();
  });
  it(`should execute performSearchClick`, () => {
    const fixture = TestBed.createComponent(SearchHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    const tag = 'jaishriram';
    app.performSearchClick(tag);
    expect(app.unitTestLink).toContain('performSearchClick called with: ' + tag);
  });

});
