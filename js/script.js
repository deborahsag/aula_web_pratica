const campoNome = document.querySelector("#nome");
const botao = document.querySelector("#saudar");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function () {
    const nome = campoNome.value.trim();

    if (nome === "") {
        resultado.textContent = "Digite seu nome.";
        resultado.classList.add("erro");
        return;
    }

    resultado.textContent = `Olá, ${nome}! Bem-vindo ao JavaScript.`;
    resultado.classList.remove("erro");
});
