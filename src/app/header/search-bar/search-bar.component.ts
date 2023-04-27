import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs';
import {SearchQueryDataService} from 'src/app/services/search-query-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  taskSearch = new FormControl();

  constructor(private searchQueryData: SearchQueryDataService) {
  }

  ngOnInit(): void {
    this.taskSearch.valueChanges.pipe(debounceTime(500))
      .subscribe(searchQuery => this.searchQueryData.setSearchQuery(searchQuery));
  }
}
