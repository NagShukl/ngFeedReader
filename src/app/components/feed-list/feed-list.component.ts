import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { FeedProviderService } from '../../services/feed-provider.service';
import { FeedImage } from '../../services/model/feed-image.model';
import { AppConstants } from '../utils/appConstants'

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  feedImages: FeedImage[];
  private eventsSubscription: any

  @Input() events: Observable<string>;


  constructor(private feedProviderService: FeedProviderService) { }

  ngOnInit() {
    this.fetchFeed();
    this.eventsSubscription = this.events.subscribe((searchTag) => this.fetchFeed(searchTag))
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
        title: AppConstants.NO_IMAGE_TITLE,
        link: AppConstants.NO_IMAGE_URL,
        date_taken: new Date(),
        published: new Date(),
        author: AppConstants.AUTHOR,
        tags: searchTag
      });
    }
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }
}
