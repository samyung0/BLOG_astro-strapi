import qs from "qs";
import type Posts from "./PostType";
import type Category from "./CategoryType";
import type Author from "./AuthorType";
const query = qs.stringify({
  populate: {
    thumbnail: {
      fields: ["name", "width", "height", "url"],
    },
    categories: {
      fields: ["name", "slug"],
    },
    relatedPosts: {
      fields: ["slug"],
    },
  },
  pagination: {
    pageSize: 999999,
  },
});
const queryCategories = qs.stringify({
  populate: {
    posts: {
      fields: ["slug"],
    },
  },
  fields: ["name", "slug"],
  pagination: {
    pageSize: 999999,
  },
});
const queryAuthor = qs.stringify({
  populate: {
    bioImage: {
      fields: ["name", "width", "height", "url"],
    },
  },
  fields: ["name", "bio"],
  filters: {
    name: "Sam Yung",
  },
});
export const posts = (await fetch(import.meta.env.STRAPI_URL + "/api/posts?" + query).then(
  (response) => response.json()
)) as Posts;
export const categories = (await fetch(
  import.meta.env.STRAPI_URL + "/api/categories?" + queryCategories
).then((response) => response.json())) as Category;

export const author = (await fetch(import.meta.env.STRAPI_URL + "/api/authors?" + queryAuthor)
  .then((response) => response.json())
  .then((authors) => authors.data[0])) as Author["data"][0];
