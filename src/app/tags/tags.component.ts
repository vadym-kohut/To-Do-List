import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TagDataService } from '../services/tag-data.service';
import {Tag} from "../shared/tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags$ = new Observable<Tag[]>();
  selectedTagList = new Observable<Tag[]>();

  constructor(private tagStore: TagDataService) { }

  ngOnInit(): void {
    this.tags$ = this.tagStore.getTagList$();
    this.selectedTagList = this.tagStore.getSelectedTagList$();
  }

  checkIfSelected(tag: Tag): boolean {
    return this.tagStore.isTagIncludedInSelectedTagList(tag);
  }

  toggleChosenTag(selectedTag: Tag): void {
    if (!this.checkIfSelected(selectedTag)) {
      this.tagStore.addSelectedTag(selectedTag);
    } else {
      this.tagStore.removeSelectedTag(selectedTag);
    }
  }

  clearChosenTags() {
    this.tagStore.clearSelectedTagList();
  }

}
