import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {TagDataService} from '../services/tag-data.service';
import {Tag} from "../shared/tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  tagList$: Observable<Tag[]> = this.tagData.getTagList$();
  selectedTagList$: Observable<Tag[]> = this.tagData.getSelectedTagList$();

  constructor(private tagData: TagDataService) {
  }

  checkIfTagSelected(tag: Tag): boolean {
    return this.tagData.isTagIncludedInSelectedTagList(tag);
  }

  toggleSelectedTag(selectedTag: Tag): void {
    if (!this.checkIfTagSelected(selectedTag)) {
      this.tagData.addSelectedTag(selectedTag);
    } else {
      this.tagData.removeSelectedTag(selectedTag);
    }
  }

  clearSelectedTagList() {
    this.tagData.clearSelectedTagList();
  }

  addTag(newTagName: string) {
    this.tagData.addTag(newTagName)
  }
}
