const coin = {
    state: 0,

    flip: function () {
        // Use "this.state" para acessar a propriedade "state".
        // Configure de forma randômica a propriedade “state” do
        // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
        this.state = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    },

    toString: function () {
        // Se o valor de "state" for 0, retorne "Heads"
        // Se o valor de "state" for 1, retorne "Tails"
        return this.state === 0 ? "Heads" : "Tails";
    },

    toHTML: function () {
        const image = document.createElement("img");

        if (this.state === 0) {
            image.src = "./images/cara.png";
            image.alt = "Heads";

        } else {
            image.src = "./images/coroa.png";
            image.alt = "Tails";
        }
        // Colocar uma imagem correspondente a essa valor.
        // image.src = "./CAMINHO/IMAGEM.JPEG"
        // image.alt = "Heads/Tails"
        return image;
    },
};

function display20Flips() {
    const results = [];
    const body = document.querySelector('body');
    const h3 = document.createElement('h3');
    h3.innerHTML = "Os resultados das jogadas são:"
    body.appendChild(h3)
    for (let i = 1; i <= 20; i++) {
        coin.flip();
        results.push(coin.toString())
        const p = document.createElement('p');
        p.innerText = `${i}- ${coin.toString()}`;
        body.appendChild(p)
    }

    const h4 = document.createElement('h4');
    h4.innerText = `A lista de lances é: ${results}.`;
    body.appendChild(h4);

    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}
display20Flips()

function display20Images() {
    const results = [];
    const body = document.querySelector('body');
    const h3 = document.createElement('h3');
    h3.innerHTML = "Os resultados das jogadas em imagens são:"
    body.appendChild(h3)
    for (let i = 1; i <= 20; i++) {
        coin.flip();
        results.push(coin.toHTML())
        body.innerHTML += `${i}:`;
        body.appendChild(coin.toHTML())
    }

    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}
display20Images()
