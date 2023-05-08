import { Priority } from "./priority";

export interface Task {
    id: number;
    title: string;
    description: string;
    tags: string[];
    project?: number,
    priority?: Priority;
}
