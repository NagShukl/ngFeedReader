import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedImage } from '../../services/model/feed-image.model';
import { FeedItemComponent } from './feed-item.component';

const FeedImageMock = {
  title: '',
  link: '',
  date_taken: new Date(),
  published: new Date(),
  author: '',
  tags: '',
}
describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedItemComponent],
      imports: [],
      providers: [
        // {provide: FeedImage, useClass: FeedImageMock}
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.feedImage = FeedImageMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
