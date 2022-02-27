import React, { useState, useContext } from "react";

import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

import validationContext from "../../contexts/validations";

import useValidation from "../../hooks/useValidation";

function DadosPessoais({ aoEnviar }) {
  const [filds, setFilds] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    promocoes: true,
    novidades: false,
  });

  const validacoes = useContext(validationContext);

  const [erros, fildsCheck, formSubmitValidation] = useValidation(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (formSubmitValidation()) {
          aoEnviar(filds);
        }
      }}
    >
      <TextField
        value={filds.nome}
        onChange={(event) => {
          setFilds({ ...filds, nome: event.target.value });
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={filds.sobrenome}
        onChange={(event) => {
          setFilds({ ...filds, sobrenome: event.target.value });
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={filds.cpf}
        onChange={(event) => {
          setFilds({ ...filds, cpf: event.target.value });
        }}
        onBlur={fildsCheck}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        name="cpf"
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={filds.promocoes}
            onChange={(event) => {
              setFilds({ ...filds, promocoes: event.target.value });
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={filds.novidades}
            onChange={(event) => {
              setFilds({ ...filds, novidades: event.target.value });
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
