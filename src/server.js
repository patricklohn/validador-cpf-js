const cpf = document.querySelector("#cpf");
const cpfVerficar = document.querySelector("#VerificarCpf");


// function formatarCpf(input) {
//     let cpf = input.value.replace(/\D+/g, '');
//     let cpfFormat = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

//     input.value = cpfFormat;
// }

// Verificar o CPF
function verificaCpf(date){

    if(date.length === 14 ){
        let newCpf = date.replace(/\D+/g, '')
        console.log(newCpf)
        const arrayCpfString = newCpf.split('');
        const arrayCpfNumber = arrayCpfString.map(Number);
        console.log(arrayCpfNumber);

    }else{
        console.log(`Seu ${date} esta mal informado.`)
    }
}

cpf.addEventListener('keypress', () => {
    let cpfValue = cpf.value;
    if(cpf.value.length === 3){
        cpf.value = cpfValue +  ".";
    }else if(cpf.value.length === 7){
        cpf.value = cpfValue +  ".";
    }else if(cpf.value.length === 11){
        cpf.value = cpfValue +  "-";
    }
})

cpfVerficar.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(cpf.value);
    verificaCpf(cpf.value);
})


