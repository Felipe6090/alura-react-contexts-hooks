import React, { useContext, useState } from "react";

import { TextField, Button } from "@material-ui/core";

import validationContext from "../../contexts/validations";
import useValidation from "../../hooks/useValidation";

function DadosUsuario({ aoEnviar }) {
  const [filds, setFilds] = useState({
    email: "",
    password: "",
  });

  const validacoes = useContext(validationContext);

  const [erros, fildsCheck, formSubmitValidation] = useValidation(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (formSubmitValidation()) {
          aoEnviar(filds);
        }
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        onChange={(e) => {
          setFilds({
            ...filds,
            email: e.target.value,
          });
        }}
        vlaue={filds.email}
      />
      <TextField
        id="senha"
        label="senha"
        name="senha"
        type="password"
        variant="outlined"
        margin="normal"
        onBlur={fildsCheck}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        required
        fullWidth
        onChange={(e) => {
          setFilds({
            ...filds,
            password: e.target.value,
          });
        }}
        vlaue={filds.password}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
