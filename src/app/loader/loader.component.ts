import { Component, OnInit } from '@angular/core';
import { LoaderDataService } from '../services/loader-data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loaderShown$ = this.loaderService.getIsLoaderShown$();

  constructor(private loaderService: LoaderDataService) { }

  hideLoader() {
    this.loaderService.hideLoader();
  }

  ngOnInit(): void {
  }

}
