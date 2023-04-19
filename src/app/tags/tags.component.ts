import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TagStoreService } from '../services/tag-store.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags$ = new Observable<string[]>();
  chosenTags$ = new Observable<string[]>();

  constructor(private tagStore: TagStoreService) { }

  ngOnInit(): void {
    this.tags$ = this.tagStore.getTags$();
    this.chosenTags$ = this.tagStore.getChosenTags$();
  }

  checkIfChosen(tag: string): boolean {
    return this.tagStore.checkIfChosen(tag);
  }

  toggleChosenTag(chosenTag: string): void {
    if (!this.checkIfChosen(chosenTag)) {
      this.tagStore.addChosenTag(chosenTag);
    } else {
      this.tagStore.clearChosenTag(chosenTag);
    }
  }

  clearChosenTags() {
    this.tagStore.clearChosenTags();
  }

}
