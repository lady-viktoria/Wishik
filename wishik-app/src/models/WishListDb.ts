interface WishListDb {
  id: string;
  userId: string;
  picUrl?: string;
  name?: string;
  description?: string;
  createdTs: number;
  updatedTs: number;
}
