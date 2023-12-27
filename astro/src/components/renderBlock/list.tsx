export default (props: any) => {
  if (props.format === "ordered") {
    return <ol className="list-decimal">{props.children}</ol>;
  } else return <ul className="list-disc">{props.children}</ul>;
};
