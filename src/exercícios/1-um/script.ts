/*
 *
 * 1- Criar uma função que retorne a quantidade de vogais da palavra passada.
 *
 * a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
 * b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
 *
 */

// Exercício 1 - a)

// let palavraEscolhida: string = "testeComOutraPalavraBarraFrase";
const palavraEscolhida: string = "antedeguemon";

function quantidadeEListaDeVogais(palavra: string): {
	quantidade: number;
	vogais: string;
} {
	let quantidade: number = 0;
	let vogais: string = "";

	for (let i = 0; i < palavra.length; i++) {
		if (
			palavra[i] === "a" ||
			palavra[i] === "e" ||
			palavra[i] === "i" ||
			palavra[i] === "o" ||
			palavra[i] === "u"
		) {
			vogais += palavra[i];
			quantidade++;
		}
	}
	return { quantidade, vogais };
}

const resultado = quantidadeEListaDeVogais(palavraEscolhida);
console.log(
	`A palavra "${palavraEscolhida}" tem ${resultado.quantidade} vogais. Sendo elas, respectivamente: "${resultado.vogais}".`
);

// Exercício 1 - b)

const input = document.getElementById("ex1__input") as HTMLInputElement;
const button = document.getElementById("ex1__button") as HTMLButtonElement;
const readonly = document.getElementById(
	"ex1__textarea"
) as HTMLTextAreaElement;

button.addEventListener("click", () => {
	const palavraDigitada = input.value;
	const resultado = quantidadeEListaDeVogais(palavraDigitada);

	let resultadoFormatado: string = `A palavra "${palavraDigitada}" tem ${resultado.quantidade} vogais. Sendo elas, respectivamente: "${resultado.vogais}".`;
	console.log(resultadoFormatado);
	readonly.value = resultadoFormatado;
});
