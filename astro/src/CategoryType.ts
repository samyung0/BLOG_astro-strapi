export default interface Category {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
      posts: {
        data: {
          id: number;
          attributes: {
            slug: string
          }
        }[]
      }
    }
  }[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}