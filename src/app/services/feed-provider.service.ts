import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FeedImage} from './model/feed-image.model';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  private static readonly API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK';

  constructor(private http: HttpClient) {
  }

  getPublicPhotosData(tags?: string): Observable<FeedImage[]> {
    return this.http.jsonp(
      _.isEmpty(tags)
        ? FeedProviderService.API_URL
        : `${FeedProviderService.API_URL}&tags=${tags}`,
      'JSONP_CALLBACK'
    ).pipe(
      map((response: any) => {
        return response.items.map(item => {
          return {
            title: item.title,
            link: item.link,
            date_taken: item.date_taken,
            published: item.published,
            author: item.author,
            tags: item.tags
          };
        });
      })
    );
  }
}
