export interface IAllBoards {
  boards: {
    name: string;
    columns: IColumns[];
  }[];
}

export interface IColumns {
  name: string;
  tasks: ITasks[];
}

export interface ITasks {
  title: string;
  description: string;
  status: string;
  subtasks: ISubtasks[];
}

export interface ISubtasks {
  title: string;
  isCompleted: boolean;
  id: string;
}
