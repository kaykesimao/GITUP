const button = document.querySelector("button");
button.addEventListener("click", () => pegarValor());


function pegarValor() {
    // Seleciona o elemento pelo ID
    var inputElement = document.getElementById('meuInput');
    
    // Acessa a propriedade .value
    var valor = inputElement.value;
    
    console.log(valor);
}