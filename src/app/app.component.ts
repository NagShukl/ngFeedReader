import { Component } from '@angular/core';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'ngFeedReader';
  // searchTag: string;
  private eventsSubject: Subject<string> = new Subject<string>();
  performSearchAction(s: string) {
alert('**JSR,..'+s);
// this.searchTag = s;
this.eventsSubject.next(s);
  }
  // emitEventToChild() {
  //   this.eventsSubject.next()
  // }
}
