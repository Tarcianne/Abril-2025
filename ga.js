document.addEventListener("DOMContentLoaded", function () {
    // Parágrafos e inputs existentes
    const paragrafo1 = document.getElementById("paragrafo1");
    const input1 = document.getElementById("input1");
    const botaoParagrafo1 = document.getElementById("botaoParagrafo1");

    const paragrafo2 = document.getElementById("paragrafo2");
    const input2 = document.getElementById("input2");
    const botaoParagrafo2 = document.getElementById("botaoParagrafo2");

    const paragrafo3 = document.getElementById("paragrafo3");
    const input3 = document.getElementById("input3");
    const botaoParagrafo3 = document.getElementById("botaoParagrafo3");

    const botaoTodos = document.getElementById("botaoTodos");

    // Função para alterar o texto do primeiro parágrafo
    botaoParagrafo1.addEventListener("click", function () {
        const textoDigitado = input1.value.trim();
        if (textoDigitado.toLowerCase() === "joão") {
            paragrafo1.textContent = `Bem-vindo, ${textoDigitado}!`; // Saudação especial
        } else if (textoDigitado !== "") {
            paragrafo1.textContent = textoDigitado; // Atualiza com o texto digitado
        } else {
            paragrafo1.textContent = "Digite algo para alterar este texto."; // Mensagem padrão
        }
    });

    // Função para alterar o texto do segundo parágrafo
    botaoParagrafo2.addEventListener("click", function () {
        const textoDigitado = input2.value.trim();
        if (textoDigitado.toLowerCase() === "joão") {
            paragrafo2.textContent = `Bem-vindo, ${textoDigitado}!`; // Saudação especial
        } else if (textoDigitado !== "") {
            paragrafo2.textContent = textoDigitado;
        } else {
            paragrafo2.textContent = "Digite algo para alterar este texto.";
        }
    });

    // Função para alterar o texto do terceiro parágrafo
    botaoParagrafo3.addEventListener("click", function () {
        const textoDigitado = input3.value.trim();
        if (textoDigitado.toLowerCase() === "joão") {
            paragrafo3.textContent = `Bem-vindo, ${textoDigitado}!`; // Saudação especial
        } else if (textoDigitado !== "") {
            paragrafo3.textContent = textoDigitado;
        } else {
            paragrafo3.textContent = "Digite algo para alterar este texto.";
        }
    });

    // Função para alterar a cor de todos os parágrafos
    botaoTodos.addEventListener("click", function () {
        const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
        paragrafo1.style.color = corAleatoria;
        paragrafo2.style.color = corAleatoria;
        paragrafo3.style.color = corAleatoria;
    });

    // Imagem e botão para mudar a imagem
    const imagem = document.getElementById("imagem");
    const botaoImagem = document.getElementById("botaoImagem");

    const imagens = [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Fh_QcPpOLCqdtkvO5PVjtQHaEK%26pid%3DApi&f=1&ipt=aa549df988991ca72351cbf73233b8a89138adac4591c794657da23c00ff8dfe&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HP5-oyDCp7tYcoptdL9y8AHaDw%26pid%3DApi&f=1&ipt=ea37f5aee277298e1b47a2d9b77bd0ab3558b9069bf3c151f8b230b8b398aea1&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KExuD_mtbx4soD6LmJ663wHaEK%26pid%3DApi&f=1&ipt=ebd3490b065f56759f00963d96c3cf9707e64336a995aaa4eab779fd34e90d79&ipo=images"
    ];
    let indiceImagem = 0;

    botaoImagem.addEventListener("click", function () {
        indiceImagem = (indiceImagem + 1) % imagens.length;
        imagem.src = imagens[indiceImagem];
    });

    // Função para inverter texto
    const inputInvertido = document.getElementById("inputInvertido");
    const botaoInvertido = document.getElementById("botaoInvertido");
    const paragrafoInvertido = document.getElementById("paragrafoInvertido");

    botaoInvertido.addEventListener("click", function () {
        const textoDigitado = inputInvertido.value.trim();
        if (textoDigitado !== "") {
            const textoInvertido = textoDigitado.split("").reverse().join("");
            paragrafoInvertido.textContent = textoInvertido;
        }
    });

    // Função para somar números
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const botaoSomar = document.getElementById("botaoSomar");
    const resultadoSoma = document.getElementById("resultadoSoma");

    botaoSomar.addEventListener("click", function () {
        const valor1 = parseFloat(numero1.value);
        const valor2 = parseFloat(numero2.value);

        if (!isNaN(valor1) && !isNaN(valor2)) {
            const soma = valor1 + valor2;
            resultadoSoma.textContent = `A soma é: ${soma}`;
        } else {
            resultadoSoma.textContent = "Por favor, insira números válidos!";
        }
    });
});

