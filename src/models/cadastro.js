function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function passwordCheck(pass) {
  if (pass.length < 4 || pass.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 e 72 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, passwordCheck };
