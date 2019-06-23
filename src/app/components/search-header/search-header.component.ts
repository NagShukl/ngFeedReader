import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {

  @Output() searchAction = new EventEmitter<string>();
  profileImgURL = environment.AUTHOR_POFILE_IMG;
  gitProjectURL = environment.GIT_PROJECT_URL;
  unitTestLink = '';

  performSearchClick(tag) {
    this.searchAction.emit(tag.split(' ').join(','));
    this.unitTestLink = 'performSearchClick called with: ' + tag;
  }
}
