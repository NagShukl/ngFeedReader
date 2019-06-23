import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {

  @Output() searchAction = new EventEmitter<string>();
  
  performSearchClick(tag) {
    this.searchAction.emit(tag.split(' ').join(','));
  }
}
