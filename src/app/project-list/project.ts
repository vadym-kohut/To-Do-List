export interface Project {
    title: string;
    dataBsTarget?: string;
    subprojects?: Project[];
    id: number;
}
