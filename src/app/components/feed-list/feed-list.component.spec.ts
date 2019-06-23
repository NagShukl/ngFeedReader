import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedItemComponent } from '../feed-item/feed-item.component';
import { FeedListComponent } from './feed-list.component';
import { FeedProviderService } from '../../services/feed-provider.service';
import { FeedImage } from '../../services/model/feed-image.model';
import { Observable, of } from 'rxjs';

const FeedImageMock = {
  title: '',
  link: '',
  date_taken: new Date(),
  published: new Date(),
  author: '',
  tags: '',
};
const feedImages: FeedImage[] = [
  {
    title: 'first image',
    link: 'https://live.staticflickr.com/7513/16193962491_b6b6f16eb1_m.jpg',
    date_taken: new Date(),
    published: new Date(),
    author: 'nagendra shukla',
    tags: 'jai shri ram',
  },
  {
    title: 'second image',
    link: 'https://live.staticflickr.com/1050/993988137_5c5f155eaf_m.jpg',
    date_taken: new Date(),
    published: new Date(),
    author: 'nagendra shukla',
    tags: 'jai shri ram',
  }
];

class MockFeedProviderService {
  constructor() { }
  public getPublicPhotosData(): Observable<FeedImage[]> {
    return of(feedImages);
  }
}

describe('FeedListComponent', () => {
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedListComponent,
        FeedItemComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HttpClientTestingModule,
        { provide: FeedProviderService, useValue: new MockFeedProviderService() }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedListComponent);
    component = fixture.componentInstance;
    component.events = of('abc');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should handle noImage found`, () => {
    fixture = TestBed.createComponent(FeedListComponent);
    const app = fixture.debugElement.componentInstance;
    const tag = 'jaishriram';
    app.feedImages = [];
    app.handleNoImageFound(tag);
    expect(app.feedImages.length).toBe(1);
    expect(app.feedImages[0].title).toBe('No Image found');
  });
});
