import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "./task-list/task";

export interface TaskStore {

    getAllTasks$(): any;
    getTasksBySearch$(task: Observable<Task[]>): Observable<Task[]>;
    addTask(task: Task): void;
    deleteTask(task: Task): void;
    getTaskCount$(): Observable<number>;
    getAllTaskCount$(): Observable<number>;
    getTaskCountByPriority$(): Observable<{ High: number, Medium: number, Low: number }>;

}
