// Seletores

const nome = document.querySelector('#nome');
const cpf = document.querySelector('#cpf');
const cpf_span = document.querySelector('.cpf');
const data = document.querySelector('#data')
const placa = document.querySelector('#placa')
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

// Event Listeners

button.addEventListener('click', (event) => {
  event.preventDefault();
  if(validaCampos()){
      confirm_box.showModal(); 
  }  
});

close_btns.forEach(element => {
    element.addEventListener('click', () =>{
        if(element.classList.contains('close-error')){
            messages[0].classList.remove('show');
        }else {
            messages[0].classList.remove('show');
        }

        if(element.classList.contains('close-success')){
            messages[1].classList.remove('show');
        }else {
            messages[1].classList.remove('show');
        }
    });
});

confirm_yes.addEventListener('click', (event)=>{
    event.preventDefault();
    confirm_box.close();
    success.classList.add('show');
    removeClasse();

    resetaCampos();
});

confirm_no.addEventListener('click', ()=>{
    confirm_box.close();
});

close.addEventListener('click', ()=>{
    confirm_box.close();
});

cpf.addEventListener('keypress', () =>{
    if(cpf.value.length === 3 || cpf.value.length === 7){
        cpf.value += '.';
    } else if (cpf.value.length === 11){
        cpf.value += '-';
    }
});

cpf.addEventListener('blur', () => {
    if(Validador.Valida(cpf.value)){
        campos[2].classList.remove('error','invalido');
        campos[1].classList.remove('error', 'invalido');
        cpf_span.classList.add('show');
    } else {
        campos[2].classList.remove('error', 'show');
        campos[1].classList.add('show', 'invalido');
        cpf_span.classList.remove('show')
    }
});

distancia.addEventListener('blur',() => {
    validaValor(distancia,5);
});

valor_litro.addEventListener('blur', () => {
    validaValor(valor_litro,6);
    valor_total.value = distancia.value * valor_litro.value;
});

valor_total.addEventListener('blur', () => {
    validaValor(valor_total,7);
});


window.addEventListener('keypress', () => {
    validaCamposDinamic();
});

// Functions

const validaCampos = () => {
    let result = true;

    if(nome.value.length < 5){
        nome.classList.add('error');
        campos[0].classList.add('show');
        result = false;
    }

    if(cpf.value.length < 13){
        cpf.classList.add('error');
        campos[1].classList.add('show');
        result = false;

    }

    if(placa.value.length < 6){
        placa.classList.add('error');
        campos[3].classList.add('show');
        result = false;
    }

    if(data.value.length < 6){
        data.classList.add('error');
        campos[4].classList.add('show');
        result = false;
    }

    if(distancia.value <= 0){
        distancia.classList.add('error');
        campos[5].classList.add('show');
        result = false;
    }

    if(valor_litro.value == 0){
        valor_litro.classList.add('error');
        campos[6].classList.add('show');
        result = false;
    }

    if(valor_total.value == 0){
        valor_total.classList.add('error');
        campos[7].classList.add('show');
        result = false;
    }

    if(result == false){
        warning.classList.add('show');
        removeClasse();
    }

    return result;
};

const validaCamposDinamic = () => {
    let index;
    let len = 0;
    let element = event.target.name;
    if(element == 'nome'){
        index = 0;
        len = 4;
    }else if(element == 'cpf'){
        index = 1;
        len = 13;
    } else if(element == 'numero_placa'){
        index = 2;
        len = 6;
    } else if(element == 'data_nf'){
        index = 3;
        len = 1;
    } 

    if(inputs[index]){
        if(inputs[index].value.length < len){
            console.log(inputs[index].value.length)
            inputs[index].classList.add('error');
            if(index >= 2){
                campos[index+1].classList.add('show');
            } else {
                campos[index].classList.add('show');
            }
        } else {
            inputs[index].classList.remove('error');
            if(index >= 2){
                campos[index+1].classList.remove('show');
            } else {
                campos[index].classList.remove('show');
            }
        }
    }
};

const validaValor = (element, index) => {
    if(element.value == 0){
        element.classList.add('error');
        campos[index].classList.add('show');
    } else {
        element.classList.remove('error');
        campos[index].classList.remove('show');
    }
}

const resetaCampos = () => {
    nome.value = '';
    cpf.value = '';
    placa.value = '';
    data.value = '';
    distancia.value = '';
    valor_litro.value = '';
    valor_total.value = '';
    for(let i = 0; i < 4; i++){
        campos[i].classList.remove('show');
    }
}

const removeClasse = () => {
    setTimeout(() => {
        success.classList.remove('show');
        warning.classList.remove('show');
    }, 5000);
}