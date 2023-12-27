import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default interface Posts {
  data: {
    id: number;
    attributes: {
      title: string;
      slug: string;
      createdAt: Date;
      updatedAt: Date;
      readingTime: number;
      content: BlocksContent;
      thumbnail: {
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
      author: {
        data?: {
          id: number;
          attributes: {
            name: string;
            bio: string;
          };
        };
      };
      categories: {
        data: {
          id: number;
          attributes: {
            name: string;
            slug: string;
          };
        }[];
      };
      relatedPosts: {
        data: {
          id: number;
          attributes: {
            slug: string;
          };
        }[];
      };
    };
  }[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}
