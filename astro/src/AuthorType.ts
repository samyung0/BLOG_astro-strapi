export default interface Author {
  data: {
    id: number;
    attributes: {
      name: string;
      bio: string;
      bioImage: {
        data?: {
          id: number;
          attributes: {
            name: string;
            width: number;
            height: number;
            url: string;
          };
        };
      };
    };
  }[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}