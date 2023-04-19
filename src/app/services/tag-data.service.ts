import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tag} from "../interfaces/tag";

@Injectable({
  providedIn: 'root'
})
export class TagDataService {

  private tagList$ = new BehaviorSubject<Tag[]>(
    [
      {tagName: 'Gdańsk', tagId: 1},
      {tagName: 'Work', tagId: 1},
      {tagName: 'Urgent', tagId: 1},
      {tagName: 'This month', tagId: 1},
      {tagName: 'This week', tagId: 1},
      {tagName: 'Can wait', tagId: 1},
      {tagName: 'Home', tagId: 1}
    ]
  )

  private selectedTagList$ = new BehaviorSubject<Tag[]>([]);

  constructor() {
  }

  // TAG LIST
  getTagList$(): Observable<Tag[]> {
    return this.tagList$.asObservable();
  }

  addTag(tag: Tag): void {
    this.tagList$.next([...this.tagList$.getValue(), tag]);
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

  clearSelectedTagList(): void {
    this.selectedTagList$.next([]);
  }

  isTagIncludedInSelectedTagList(tag: Tag): boolean {
    return this.selectedTagList$.getValue().includes(tag);
  }
}
