import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedProviderService } from '../../services/feed-provider.service';
import { FeedImage } from '../../services/model/feed-image.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit, OnDestroy {
  feedImages: FeedImage[];
  private eventsSubscription: any;

  @Input() events: Observable<string>;

  constructor(private feedProviderService: FeedProviderService) { }

  ngOnInit() {
    this.fetchFeed();
    this.eventsSubscription = this.events.subscribe((searchTag) => this.fetchFeed(searchTag));
  }
  private fetchFeed(searchTag?: string): void {
    this.feedProviderService.getPublicPhotosData(searchTag)
      .subscribe((feedImages: FeedImage[]): void => {
        this.feedImages = feedImages;
        this.handleNoImageFound(searchTag);
      });
  }
  handleNoImageFound(searchTag: string) {
    if (this.feedImages.length === 0) {
      this.feedImages.push({
        title: environment.NO_IMAGE_TITLE,
        link: environment.NO_IMAGE_URL,
        date_taken: new Date(),
        published: new Date(),
        author: environment.AUTHOR,
        tags: searchTag
      });
    }
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
