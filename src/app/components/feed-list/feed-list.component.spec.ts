import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FeedItemComponent } from '../feed-item/feed-item.component';
import { FeedListComponent } from './feed-list.component';
import { FeedProviderService } from '../../services/feed-provider.service';
import { FeedImage } from '../../services/model/feed-image.model';
import { Observable, of } from 'rxjs';
// import from 'rxjs/add/observable/of';

const FeedImageMock = {
  title: '',
    link: '',
    date_taken: new Date(),
    published: new Date(),
    author: '',
    tags: '',
}
const feedImages: FeedImage[] = [
  {
    title: 'first image',
      link: 'link1',
      date_taken: new Date(),
      published: new Date(),
      author: 'nagendra shukla',
      tags: 'jai shri ram',
  },
  {
    title: 'second image',
      link: 'link2',
      date_taken: new Date(),
      published: new Date(),
      author: 'nagendra shukla',
      tags: 'jai shri ram',
  }
];
 
class MockFeedProviderService {
  constructor(){} 
  public getPublicPhotosData(): Observable<FeedImage[]> {
    console.log('Jai shri ram');
    return of( feedImages );
  }
}

describe('FeedListComponent', () => {
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedListComponent,
        FeedItemComponent ],
        imports: [HttpClientTestingModule ],
        providers: [
          HttpClientTestingModule,
          {provide: FeedProviderService, useValue: new MockFeedProviderService()}
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
});
