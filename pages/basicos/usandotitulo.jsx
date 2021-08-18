import Titulo from "../../components/Titulo";

export default function usandoTitulo () {
  return (
    <div>
      <Titulo
      title = "Meu Título"
      subtitle = "Meu subtítulo"
      />
      <Titulo
      title = "Meu Título"
      subtitle = "Meu subtítulo"
      pequeno = {true}
      />
      <Titulo
      title = "Meu Título"
      subtitle = "Meu subtítulo"
      pequeno
      />
    </div>
  )
}