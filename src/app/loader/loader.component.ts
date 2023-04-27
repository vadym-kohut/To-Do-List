import {Component, OnInit} from '@angular/core';
import {LoaderDataService} from '../services/loader-data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  isLoaderShown$ = this.loaderData.getIsLoaderShown$();

  constructor(private loaderData: LoaderDataService) {
  }

  hideLoader() {
    this.loaderData.hideLoader();
  }

}
