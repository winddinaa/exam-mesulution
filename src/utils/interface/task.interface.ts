export interface ITask {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: string; // Use WritableDraft for comments
  createdAt: Date;
  updatedAt?: Date;
}
