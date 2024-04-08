interface WishListDb {
  id: string;
  userId: string;
  picUrl: string | null;
  name: string | null;
  description: string | null;
  createdTs: number;
  updatedTs: number;
}
