
const cpf = document.querySelector('#cpf');
const cpf_span = document.querySelector('.cpf');
const distancia = document.querySelector('#distancia');
const valor_litro = document.querySelector('#valor_litro');
const valor_total = document.querySelector('#valor_total');
const button = document.querySelector(".btn_submit");
const success = document.querySelector(".success");
const warning = document.querySelector('.warning');
const confirm_box = document.querySelector('.confirm-box');
const confirm_yes = document.querySelector('.yes');
const confirm_no = document.querySelector('.no');
const close = document.querySelector('.close');
const campos = document.querySelectorAll('.validation');
const inputs = document.querySelectorAll('.inputs');
const messages = document.querySelectorAll('.message');
const close_btns = document.querySelectorAll('.close-message');

close_btns.forEach(element => {
    element.addEventListener('click', (e) =>{
        if(element.classList.contains('close-error')){
            messages[0].classList.remove('show');
        }else {
            messages[0].classList.remove('show');
        }
    });
});

button.addEventListener("click", (event) => {
  event.preventDefault();   
  confirm_box.showModal(); 
});

confirm_yes.addEventListener('click', (event)=>{
    validaFormulario();
    confirm_box.close();
});

confirm_no.addEventListener('click', (event)=>{
    confirm_box.close();
});

close.addEventListener('click', (event)=>{
    confirm_box.close();
});

cpf.addEventListener('keypress', (event) =>{
    if(cpf.value.length === 3 || cpf.value.length === 7){
        cpf.value += '.';
    } else if (cpf.value.length === 11){
        cpf.value += '-';
    }
});

cpf.addEventListener('blur', () => {
    if(Validador.Valida(cpf.value)){
        cpf.classList.add('valido');
        campos[2].classList.remove('error');
        campos[2].classList.add('valido');
        cpf_span.classList.add('show');
    } else {
        cpf.classList.remove('valido');
        campos[2].classList.add('error');
        campos[2].classList.remove('valido');
        cpf_span.classList.add('show');
        campos[2].classList.add('show');
    }
});

distancia.addEventListener('blur',() => {
    if(distancia.value == 0){
        distancia.classList.add('error');
        campos[4].classList.add('show');
    } else {
        distancia.classList.remove('error');
        campos[4].classList.remove('show');
    }
});

valor_litro.addEventListener('blur', (event) => {
    if(valor_litro.value == 0){
        valor_litro.classList.add('error');
        campos[5].classList.add('show');
    } else {
        valor_litro.classList.remove('error');
        campos[5].classList.remove('show');
    }

    valor_total.value = distancia.value * valor_litro.value;
});

valor_total.addEventListener('blur', (event) => {
    if(valor_total.value == 0){
        valor_total.classList.add('error');
        campos[6].classList.add('show');
    } else {
        valor_total.classList.remove('error');
        campos[6].classList.remove('show');
    }
});


window.addEventListener('keypress', (event) => {
    let index;
    let len = 0;
    let element = event.target.name;
    if(element == 'nome'){
        index = 0;
        len = 4
    } else if(element == 'cpf'){
        index = 1;
        len = 13;
    } else if(element == 'numero_placa'){
        index = 2;
        len = 7;
    } else if(element == 'data_nf'){
        index = 3;
        len = 1;
    }

    if(inputs[index]){
        if(inputs[index].value.length < len){
            inputs[index].classList.add('error');
            campos[index].classList.add('show');
        } else {
            inputs[index].classList.remove('error');
            campos[index].classList.remove('show');
        }
    }
});

const validaFormulario = () => {

    if(nome.value.length > 5 && cpf.value.length == 14  && placa.value.length == 7 && data.value != null && distancia.value > 0 && valor_litro.value > 0 && valor_total.value > 0 ){
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