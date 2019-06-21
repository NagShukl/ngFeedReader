import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import {FeedProviderService} from '../../services/feed-provider.service';
import {FeedImage} from '../../services/model/feed-image.model';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  // @Input() searchTag: string;
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
        console.log('**JSR,...feedImages='+this.feedImages.length);
        console.log('**JSR,...feedImages=',this.feedImages);
      });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }
}
