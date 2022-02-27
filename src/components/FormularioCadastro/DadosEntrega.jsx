import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [filds, setFilds] = useState({
    cep: "",
    endereco: "",
    numero: "",
    estado: "",
    cidade: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        aoEnviar(filds);
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setFilds({ ...filds, cep: e.target.value });
        }}
        value={filds.cep}
      />
      <TextField
        id="endereco"
        label="Enderço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => {
          setFilds({ ...filds, endereco: e.target.value });
        }}
        value={filds.endereco}
      />
      <TextField
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setFilds({ ...filds, numero: e.target.value });
        }}
        value={filds.numero}
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setFilds({ ...filds, estado: e.target.value });
        }}
        value={filds.estado}
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setFilds({ ...filds, cidade: e.target.value });
        }}
        value={filds.cidade}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
