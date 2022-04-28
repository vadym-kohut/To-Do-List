import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loaderShown$ = this.loaderService.getLoaderShown();

  constructor(private loaderService: LoaderService) { }

  hideLoader() {
    this.loaderService.hideLoader();
  }

  ngOnInit(): void {
  }

}
