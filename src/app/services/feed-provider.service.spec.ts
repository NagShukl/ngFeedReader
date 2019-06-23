import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FeedImage } from './model/feed-image.model';
import { HttpClient } from '@angular/common/http';

import { FeedProviderService } from './feed-provider.service';

describe('FeedProviderService', () => {
    let httpMock: HttpTestingController;
    let service: FeedProviderService;
    const mockResponse = {
        items: [
            {
                title: 'jsr image one',
                media: {
                    m: 'https://live.staticflickr.com/7513/16193962491_b6b6f16eb1_m.jpg',
                    extraProp: 'unwanted'
                },
                link: 'extra field 2',
                date_taken: new Date(),
                published: new Date(),
                author: 'nagendra shukla',
                tags: 'jai shri ram',
            },
            {
                title: 'jsr image two',
                media: {
                    m: 'https://live.staticflickr.com/1050/993988137_5c5f155eaf_m.jpg',
                    extraProp: 'unwanted'
                },
                link: 'extra field 2',
                date_taken: new Date(),
                published: new Date(),
                author: 'nagendra shukla',
                tags: 'jai shri ram',
            }
        ]
    };
    const mockMappedResponse: FeedImage[] = [{
        title: 'jsr image one',
        link: 'https://live.staticflickr.com/7513/16193962491_b6b6f16eb1_m.jpg',
        date_taken: new Date(),
        published: new Date(),
        author: 'nagendra shukla',
        tags: 'jai shri ram',
    },
    {
        title: 'jsr image two',
        link: 'https://live.staticflickr.com/1050/993988137_5c5f155eaf_m.jpg',
        date_taken: new Date(),
        published: new Date(),
        author: 'nagendra shukla',
        tags: 'jai shri ram',
    }];
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                FeedProviderService
            ],
        });
        httpMock = TestBed.get(HttpTestingController);
        service = new FeedProviderService(TestBed.get(HttpClient));

    });

    it('should be created', () => {

        expect(service).toBeTruthy();
    });

    describe('shopuld fetch images using getPublicPhotosData', () => {
        it('should fetch feed and map the response', () => {
            service.getPublicPhotosData()
                .subscribe((items: FeedImage[]) => {
                    expect(items.length).toBe(mockMappedResponse.length);
                    expect(items[0].link).toBe(mockMappedResponse[0].link);
                    expect(items[1].link).toBe(mockMappedResponse[1].link);
                    expect(items[0].title).toBe(mockMappedResponse[0].title);
                });

            httpMock
                .expectOne(
                    `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK&JSONP_CALLBACK=JSONP_CALLBACK`
                )
                .flush(mockResponse);
        });
    });
    describe('shopuld fetch images using getPublicPhotosData', () => {
        it('should fetch feed and map the response', () => {
            service.getPublicPhotosData('jaishriram')
                .subscribe((items: FeedImage[]) => {
                    expect(items.length).toBe(mockMappedResponse.length);
                    expect(items[0].link).toBe(mockMappedResponse[0].link);
                    expect(items[1].link).toBe(mockMappedResponse[1].link);
                    expect(items[0].title).toBe(mockMappedResponse[0].title);
                });

            httpMock
                .expectOne(
                    `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK&tags=jaishriram&JSONP_CALLBACK=JSONP_CALLBACK`
                )
                .flush(mockResponse);
        });
    });
});
