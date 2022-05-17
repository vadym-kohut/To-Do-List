import { Priority } from "../task-add-form/priority";

export interface Task {
    _id?: string;
    id: number;
    title: string;
    description: string;
    tags: string[];
    project?: number,
    priority?: Priority;
}
