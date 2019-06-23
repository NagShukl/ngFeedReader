import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HttpClientJsonpModule,
  HttpClientModule
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    FeedListComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  exports: [
    SearchHeaderComponent, FeedListComponent, FeedItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
