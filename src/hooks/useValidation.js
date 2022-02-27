import { useState } from "react";

export default function useValidation(validacoes) {
  const initialState = initialStateHandler(validacoes);

  const [erros, setErros] = useState(initialState);

  function fildsCheck(e) {
    const { name, value } = e.target;

    const errorHandler = { ...erros };

    errorHandler[name] = validacoes[name](value);

    setErros(errorHandler);
  }

  function formSubmitValidation() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }

    return true;
  }

  return [erros, fildsCheck, formSubmitValidation];
}

function initialStateHandler(validacoes) {
  const initialState = {};

  for (let filds in validacoes) {
    initialState[filds] = { valido: true, texto: "" };
  }

  return initialState;
}
