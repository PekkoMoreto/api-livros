import ErroBase from "./erroBase.js";

class NaoEcontrado extends ErroBase{
  constructor(mensagem = "Página não encontrada."){
    super(mensagem, 404);
  }
}

export default NaoEcontrado;