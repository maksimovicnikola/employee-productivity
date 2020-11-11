export interface User {
  id: number;
  name: string;
  email: string;
  rate: number;
  overtime_rate: number;
  status: string;
  regular_hours?: number;
  overtime_hours?: number;
}