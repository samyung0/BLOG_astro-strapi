import hljs from "highlight.js";
export default ({ children }: any) => (
  <code
    className="font-cascadiaCode md:leading-6 leading-4 bg-gray-100 px-6 py-4 md:text-base text-sm"
    dangerouslySetInnerHTML={{
      __html: hljs.highlight(children.props.children, { language: "javascript" }).value,
    }}
  >
  </code>
);
