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
    O método some() testa se pelo menos algum dos elementos de um array
passa no teste implementado por uma função atribuída.
    Funciona exatamente como every(), mas se pelo menos 1 elemento passa
no teste, ele já retorna true.
*/

let pedidoSOME = pedidos.some((pedido) => {
    let { alimento } = pedido;
    return alimento == "Pizza";
});

console.log(pedidoSOME);
