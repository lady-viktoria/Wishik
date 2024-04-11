interface UserDb {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  createdTs: number;
  updatedTs: number;
}
