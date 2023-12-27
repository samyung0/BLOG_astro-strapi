export default (props: any) => {
  switch(props.level) {
    case 1:
      return <h1 className="text-4xl font-bold mt-4 leading-[4rem]">{props.children}</h1>
    case 2:
      return <h2 className="text-3xl font-bold mt-4 leading-[3.5rem]">{props.children}</h2>
    case 3:
      return <h3 className="text-2xl font-bold mt-4 leading-[3rem]">{props.children}</h3>
    case 4:
      return <h4 className="text-xl font-bold mt-4 leading-10">{props.children}</h4>
    case 5:
      return <h5 className="text-lg font-bold mt-4 leading-8">{props.children}</h5>
    case 6:
      return <h6 className="text-base font-bold mt-4 leading-8">{props.children}</h6>
    default:
      return <h1 className="text-4xl font-bold mt-4 leading-8">{props.children}</h1>
  }
}