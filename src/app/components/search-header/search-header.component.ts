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
  performSearchClick() {
    this.searchAction.emit(this.searchTag.split(' ').join(','));
  }
}
