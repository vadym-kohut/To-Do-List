import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { SearchQueryDataService } from 'src/app/services/search-query-data.service';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent implements OnInit {

  taskSearch = new FormControl();

  constructor(private queryService: SearchQueryDataService) { }

  ngOnInit(): void {
    this.taskSearch.valueChanges.pipe(debounceTime(500))
      .subscribe(query => this.queryService.setQuery(query));
  }
}
