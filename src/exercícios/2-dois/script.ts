// 2- Dado o array:
interface Pessoa {
	id: number;
	name: string;
	bio: string;
}

const lista: Array<Pessoa> = [
	{
		id: 1,
		name: "Ada Lovelace",
		bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
	},
	{
		id: 2,
		name: "Alan Turing",
		bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
	},
	{
		id: 3,
		name: "Nikola Tesla",
		bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
	},
	{
		id: 4,
		name: "Nicolau Copérnico",
		bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
	},
];

// ************************************************************ //

// a) Crie uma função que retorne a bio do id passado.
// a1) Paradigma Funcional
function retornarBioPeloIdFuncional(id: number): string | undefined {
	const pessoa: Pessoa | undefined = lista.find((pessoa) => pessoa.id === id);
	return pessoa ? pessoa.bio : undefined;
}

console.log(`Retorno da Bio via Paradigma Funcional:
	${retornarBioPeloIdFuncional(3)}`);

// a2) Paradigma Imperativo
function retornarBioPeloIdImperativo(id: number): string | undefined {
	for (const pessoa of lista) {
		if (pessoa.id === id) {
			return pessoa.bio;
		}
	}
	return undefined;
}

console.log(`Retorno da Bio via Paradigma Imperativo:
	${retornarBioPeloIdImperativo(3)}`);

// ************************************************************ //

// b) Crie uma função que retorne o name do id passado.
// b1) Paradigma Funcional
function retornarNomePeloIdFuncional(id: number): string | undefined {
	const pessoa: Pessoa | undefined = lista.find((pessoa) => pessoa.id === id);
	return pessoa ? pessoa.name : undefined;
}

console.log(`Retorno do Nome via Paradigma Funcional:
	${retornarNomePeloIdFuncional(3)}`);

// b2) Paradigma Imperativo
function retornarNomePeloIdImperativo(id: number): string | undefined {
	for (const pessoa of lista) {
		if (pessoa.id === id) {
			return pessoa.name;
		}
	}
	return undefined;
}

console.log(`Retorno do Nome via Paradigma Imperativo:
	${retornarNomePeloIdImperativo(3)}`);

// ************************************************************ //

// c) Crie uma função que apague um item da lista a partir de um id passado.
// c1) Paradigma Funcional
function apagarPessoaPeloIdFuncional(id: number): void {
	const pessoa: Pessoa | undefined = lista.find((pessoa) => pessoa.id === id);
	if (pessoa) {
		const tamanhoDoArrayAntes = lista.length;
		lista.splice(lista.indexOf(pessoa), 1);
		const tamanhoDoArrayDepois = lista.length;

		if (tamanhoDoArrayAntes > tamanhoDoArrayDepois) {
			console.log(
				`(Paradigma Funcional) Pessoa com ID ${id} foi deletada do array:`,
				lista
			);
		} else {
			console.log(
				`(Paradigma Funcional) Pessoa com ID ${id} não foi encontrada no array:`,
				lista
			);
		}
	}
}

apagarPessoaPeloIdFuncional(2);

// c2) Paradigma Imperativo
function apagarPessoaPeloIdImperativo(id: number): void {
	let encontrado: boolean = false;
	for (const pessoa of lista) {
		if (pessoa.id === id) {
			for (let i = 0; i < lista.length; i++) {
				if (lista[i].id === id) {
					lista.splice(i, 1);
					console.log(
						`(Paradigma Imperativo) Pessoa com ID ${id} foi deletada do array:`,
						lista
					);
					encontrado = true;
				}
			}
		}
	}

	if (!encontrado) {
		console.log(
			`(Paradigma Imperativo) Pessoa com ID ${id} não foi encontrada no array:`,
			lista
		);
	}
}

apagarPessoaPeloIdImperativo(4);

// ************************************************************ //

// d) Crie uma função que altere a bio ou o name a partir de um id passado.
// d1) Paradigma Funcional
function alterarBioOuNomeAPartirDoIdFuncional(
	id: number,
	novaBio: string | undefined,
	novoNome: string | undefined
): { bio: string; name: string } | undefined {
	const pessoa: Pessoa | undefined = lista.find((pessoa) => pessoa.id === id);

	if (pessoa) {
		if (novaBio !== undefined) {
			pessoa.bio = novaBio;
		}

		if (novoNome !== undefined) {
			pessoa.name = novoNome;
		}
	}
	return { bio: pessoa?.bio || "", name: pessoa?.name || "" };
}

const alteraçãoFuncional = alterarBioOuNomeAPartirDoIdFuncional(
	1,
	"Alteração do Nome via Paradigma Funcional",
	"Alteração da Bio via Paradigma Funcional"
);
console.log(
	"Retorno da Alteração via Paradigma Funcional:",
	alteraçãoFuncional,
	lista
);

// d2) Paradigma Imperativo
function alterarBioOuNomeAPartirDoIdImperativo(
	id: number,
	novaBio: string | undefined,
	novoNome: string | undefined
): { bio: string; name: string } | undefined {
	let pessoa: Pessoa | undefined;
	for (let i = 0; i < lista.length; i++) {
		if (lista[i].id === id) {
			pessoa = lista[i];
			if (novaBio !== undefined) {
				pessoa.bio = novaBio;
			}

			if (novoNome !== undefined) {
				pessoa.name = novoNome;
			}
		}
	}
	return { bio: pessoa?.bio || "", name: pessoa?.name || "" };
}

const alteraçãoImperativo = alterarBioOuNomeAPartirDoIdImperativo(
	3,
	"Alteração do Nome via Paradigma Imperativo",
	"Alteração da Bio via Paradigma Imperativo"
);
console.log(
	"Retorno da Alteração via Paradigma Imperativo:",
	alteraçãoImperativo,
	lista
);

// ************************************************************ //

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo.
/*
 * ^^ Demonstrado nas questões anteriores ^^
 * (Funcional e Imperativo, respectivamente:
 * a1/a2, b1/b2, c1/c2, d1/d2)
 */
