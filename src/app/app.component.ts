import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public eventsSubject: Subject<string> = new Subject<string>();

  performSearchAction(tag: string) {
    this.eventsSubject.next(tag);
  }
}
