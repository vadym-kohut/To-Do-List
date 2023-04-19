import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagStoreService {

  private tags$ = new BehaviorSubject<string[]>(
    [
      'Gdańsk',
      'Work',
      'Urgent',
      'This month',
      'This week',
      'Can wait',
      'Home'
    ]
  )

  private chosenTags$ = new BehaviorSubject<string[]>([]);

  constructor() { }

  getTags$(): Observable<string[]> {
    return this.tags$.asObservable();
  }

  getChosenTags$(): Observable<string[]> {
    return this.chosenTags$.asObservable();
  }

  addTag(tag: string): void {
    this.tags$.next([...this.tags$.getValue(), tag]);
  }

  addChosenTag(chosenTag: string): void {
    this.chosenTags$.next([...this.chosenTags$.getValue(), chosenTag]);
  }

  clearChosenTag(chosenTag: string): void {
    this.chosenTags$.next(
      this.chosenTags$.getValue().filter(tag => tag !== chosenTag)
    );
  }

  clearChosenTags(): void {
    this.chosenTags$.next([]);
  }

  checkIfChosen(tag: string): boolean {
    return this.chosenTags$.getValue().includes(tag);
  }

}
