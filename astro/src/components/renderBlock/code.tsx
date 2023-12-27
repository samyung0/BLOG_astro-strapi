import hljs from "highlight.js";
export default ({ children }: any) => (
  <pre className="bg-gray-100 px-6 py-4 my-2">
    <code
      className="font-cascadiaCode md:leading-6 leading-4 md:text-base text-sm"
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(children[0].props.text, { language: "javascript" }).value,
      }}
    ></code>
  </pre>
);
