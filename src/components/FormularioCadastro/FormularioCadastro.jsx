import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar }) {
  let [phaseState, setPhaseState] = useState(0);

  let [data, setData] = useState({});

  useEffect(() => {
    phaseState === formPhase && aoEnviar(data);
  });

  const formPhase = [
    <DadosUsuario aoEnviar={handleData} />,
    <DadosPessoais aoEnviar={handleData} />,
    <DadosEntrega aoEnviar={handleData} />,
  ];

  function handleData(newData) {
    setData({
      ...data,
      ...newData,
    });
    console.log(data, phaseState);
    phaseHandler();
  }

  function phaseHandler() {
    setPhaseState(phaseState + 1);
  }

  return <>{formPhase[phaseState]}</>;
}

export default FormularioCadastro;

//
