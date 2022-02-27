import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";

import { validarCPF, passwordCheck } from "./models/cadastro";

import validationContext from "./contexts/validations";

import { Container, Typography } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <validationContext.Provider
          value={{ cpf: validarCPF, senha: passwordCheck }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </validationContext.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;

//
