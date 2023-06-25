const nome = document.querySelector('#nome');
const cpf = document.querySelector('#cpf');
const placa = document.querySelector('#placa');
const data = document.querySelector('#data');
const distancia = document.querySelector('#distancia');
const valor_litro = document.querySelector('#valor_litro');
const valor_total = document.querySelector('#valor_total');
const button = document.querySelector(".btn_submit");
const success = document.querySelector(".success");
const warning = document.querySelector('.warning');
const confirm = document.querySelector('.confirm');

button.addEventListener("click", (event) => {
  event.preventDefault();   
  confirm.showModal();

  validaFormulario();

});

const validaFormulario = () => {
    if(nome.value.length > 0 && cpf.value.length > 0 && placa.value.length > 0 && data.value != null && distancia.value > 0 && valor_litro.value > 0 && valor_total.value > 0 ){
        success.classList.add('show');
        removeClass();
      } else {
        if(nome.length < 3){

        }
        warning.classList.add('show');
        removeClass();
      }
}


const removeClass = () => {
    setTimeout(() => {
        success.classList.remove('show');
        warning.classList.remove('show');
    }, 5000);
}