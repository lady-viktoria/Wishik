interface WishDb {
  id: string;
  userId: string;
  picUrl: string | null;
  name: string | null;
  description: string | null;
  link: string | null;
  wishListId: string | null;
  createdTs: number;
  updatedTs: number;
}
