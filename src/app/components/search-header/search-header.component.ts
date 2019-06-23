import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  @Output() searchAction = new EventEmitter<string>();
  searchTag: string;
  constructor() { }

  ngOnInit() {
  }
  performSearchClick(tag) {
    console.log('searchTag => '+tag);
  //   if(this.searchTag == "") {
  //     alert("You either clicked the X or you searched for nothing.");
  // }
  // else {
  //     alert("You searched for " + this.searchTag);
  // }
    this.searchAction.emit(tag.split(' ').join(','));
  }
  // clearSearch() {
  //   if(this.searchTag == "") {
  //     alert("You either clicked the X or you searched for nothing.");
  // }
  // else {
  //     alert("You searched for " + this.searchTag);
  // }
  // }
}
