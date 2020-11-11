import { User, Shift, Pagination } from '.';

export interface DashboardState {
  users: User[],
  shifts: Shift[],
  selectedUsers: number[],
  query: string,
  pagination: Pagination
}