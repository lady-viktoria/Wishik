interface WishDb {
  id: string;
  userId: string;
  picUrl?: string;
  name?: string;
  description?: string;
  link?: string;
  wishListId: string;
  createdTs: number;
  updatedTs: number;
}
