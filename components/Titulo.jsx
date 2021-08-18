export default function Titulo(props) {
  //console.log(props)
  
  //Operador Ternário
  return props.pequeno ? (
    <>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </>
  ) : (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </>
  )

  /*
  if( props.pequeno ) {
    return (
      <>
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </>
    )
  } else {
    return (
      <>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </>
    )
  }
  */
}