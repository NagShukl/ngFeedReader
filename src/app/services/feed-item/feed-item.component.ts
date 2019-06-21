import { Component, OnInit, Input } from '@angular/core';
import {FeedImage} from '../../services/model/feed-image.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() feedImage: FeedImage;

  constructor() { }

  ngOnInit() {
  }

}
