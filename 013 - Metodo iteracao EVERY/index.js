let pedidos = [
    {
        id: 420,
        nome: "Wesley",
        alimento: "Sandubao de Bacon",
        bebida: "Suco Limao",
    },
    { id: 421, nome: "Maria", alimento: "Tapioca", bebida: "Cafe" },
    { id: 422, nome: "Joao", alimento: "Coxinha", bebida: "Suco Laranja" },
    { id: 423, nome: "Marcos", alimento: "Pizza", bebida: "Refrigerante" },
];

/*
    O método every() testa se todos os elementos do array passam
por um teste implementado por uma função fornecida. Ele retorna
true ou false baseado na condição especificada.
Funciona mais ou menos como filter(), mas, ao invés de retornar
um valor ou objeto, retorna um boolean.
*/
let every = pedidos.every((pedido) => {
    let { bebida } = pedido;
    return bebida == "Suco Limao";
});

console.log(every);
