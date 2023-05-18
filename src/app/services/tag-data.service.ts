import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tag} from "../shared/tag";

@Injectable({
  providedIn: 'root'
})
export class TagDataService {

  private tagList$ = new BehaviorSubject<Tag[]>(
    [
      {tagName: 'Gdańsk', tagId: 1},
      {tagName: 'Work', tagId: 2},
      {tagName: 'Urgent', tagId: 3},
      {tagName: 'This month', tagId: 4},
      {tagName: 'This week', tagId: 5},
      {tagName: 'Can wait', tagId: 6},
      {tagName: 'Home', tagId: 7}
    ]
  )

  private selectedTagList$ = new BehaviorSubject<Tag[]>([]);

  constructor() {
  }

  // TAG LIST
  getTagList$(): Observable<Tag[]> {
    return this.tagList$.asObservable();
  }

  addTag(newTagName: string): void {
    if (newTagName) {
      const newTag: Tag = {
        tagName: newTagName,
        tagId: this.tagList$.getValue().length + 1
      };
      this.tagList$.next([...this.tagList$.getValue(), newTag]);
    }
  }

  removeTag(tagToRemove: Tag) {
    this.tagList$.getValue().filter(tag => tag !== tagToRemove);
  }

  // SELECTED TAG LIST
  getSelectedTagList$(): Observable<Tag[]> {
    return this.selectedTagList$.asObservable();
  }

  addSelectedTag(selectedTag: Tag) {
    this.selectedTagList$.next([...this.selectedTagList$.getValue(), selectedTag]);
  }

  removeSelectedTag(selectedTag: Tag) {
    this.selectedTagList$.next(
      this.selectedTagList$.getValue().filter(tag => tag !== selectedTag)
    );
  }

  clearSelectedTagList() {
    this.selectedTagList$.next([]);
  }

  isTagIncludedInSelectedTagList(tag: Tag): boolean {
    return this.selectedTagList$.getValue().includes(tag);
  }
}
