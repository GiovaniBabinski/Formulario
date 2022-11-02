const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span");
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Não enviado!");
    validarNome();
    validarEmail();
    validarSenha();
    confirmarSenha();

})


function setError(index) {
    campos[index].style.border = "3px solid red";
    span[index].style.display = "inline-block"

}

function removeError(index) {
    campos[index].style.border = "3px solid blue";
    span[index].style.display = "none";
}

function validarNome() {
    if ((campos[0].value.length < 3)) {
        console.log("O nome deve ter mais de três caracteres!");
        setError(0)
    } else {
        console.log("Validado com sucesso!")
        removeError(0);
    }
}

function validarEmail() {
    if ((!emailRegex.test(campos[1].value))) {
        console.log("Email ainda não validado!");
        setError(1);

    } else {
        console.log("Email validado com sucesso!")
        removeError(1);

    }
}

function validarSenha() {
    if ((campos[2].value.length) < 8) {
        setError(2);
    } else {
        removeError(2);
    }
}

function confirmarSenha() {
    if (campos[2].value == campos[3].value && campos[2].value.length == campos[3].value.length && campos[3].value !== "") {
        removeError(3);
    } else {
        setError(3);
    }

}



