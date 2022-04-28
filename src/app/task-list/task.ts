import { Priority } from "../task-add-form/priority";

export interface Task {
    id: number;
    title: string;
    description: string;
    tags?: string[];
    priority?: Priority;
}
