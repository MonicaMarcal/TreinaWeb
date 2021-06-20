//validando se o usuario digitou os 8 numeros

export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8;
  },
};
