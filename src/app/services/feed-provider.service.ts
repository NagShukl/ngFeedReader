import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedImage } from './model/feed-image.model';
import { AppConstants } from '../components/utils/appConstants';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  

  constructor(private http: HttpClient) {
  }

  getPublicPhotosData(tags?: string): Observable<FeedImage[]> {
    return this.http.jsonp(
      _.isEmpty(tags)
        ? AppConstants.API_URL
        : `${AppConstants.API_URL}&tags=${tags}`,
      'JSONP_CALLBACK'
    ).pipe(
      map((response: any) => {
        return response.items.map(item => {
          return {
            title: item.title,
            link: item.media.m,
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
