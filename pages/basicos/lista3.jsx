export default function lista() {
  function gerarLista(final) {
    const lista = []
    for(let i=1; i <= final; i++) {
      lista.push(<span>{i},</span>)
    }
    return lista
  }
  return (
    <div>
      <div className="lista_20">
        {gerarLista(20)}
      </div>
      <div className="lista_5">
        {gerarLista(5)}
      </div>
    </div>
    
  )
}