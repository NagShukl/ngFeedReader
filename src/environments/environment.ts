// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK',
   NO_IMAGE_TITLE: 'No Image found',
   NO_IMAGE_URL: 'https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png',
   AUTHOR: 'Nagendra Shukla'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
