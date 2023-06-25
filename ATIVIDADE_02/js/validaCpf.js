
class Validador {
    static Valida(cpf) {
      const _cpf = cpf.replace(/[ .-]/g, '');
      console.log(cpf);
      const primeiro_digito = this.Calcula_Primeiro_Digito(_cpf);
      const segundo_digito = this.Calcula_Segundo_Digito(_cpf, primeiro_digito);
  
      if (parseInt(_cpf[9]) === primeiro_digito && parseInt(_cpf[10]) === segundo_digito) {
        console.log('CPF Válido!');
        return true;
      } else {
        console.log('CPF Inválido!');
        return false;
      }
    }
  
    static Calcula_Primeiro_Digito(cpf) {
      let total = 0;
  
      for (let i = 0; i < 9; i++) {
        const aux = parseInt(cpf[i]);
        total += aux * (10 - i);
      }
  
      if (total % 11 === 0 || total % 11 === 1) {
        return 0;
      }
  
      return 11 - (total % 11);
    }
  
    static Calcula_Segundo_Digito(cpf, digito) {
      let total = 0;
  
      for (let i = 0; i < 10; i++) {
        let aux = 0;
        if (i === 0) {
          continue;
        }
        if (i === 9) {
          aux = digito;
        } else {
          aux = parseInt(cpf[i]);
        }
        total += aux * (10 - i + 1);
      }
  
      if (total % 11 === 0 || total % 11 === 1) {
        return 0;
      }
      return 11 - (total % 11);
    }
  }
