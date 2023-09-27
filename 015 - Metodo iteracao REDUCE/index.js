let pedidos = [
    {
        id: 420,
        nome: "Wesley",
        alimento: "Sandubao de Bacon",
        bebida: "Suco Limao",
        preco: 30,
    },
    {
        id: 421,
        nome: "Maria",
        alimento: "Tapioca",
        bebida: "Cafe",
        preco: 25,
    },
    {
        id: 422,
        nome: "Joao",
        alimento: "Coxinha",
        bebida: "Suco Laranja",
        preco: 16,
    },
    {
        id: 423,
        nome: "Marcos",
        alimento: "Pizza",
        bebida: "Refrigerante",
        preco: 55,
    },
];

let pedidoREDUCE = pedidos.reduce((total, pedido) => {
    let { preco } = pedido;
    return total + preco;
}, 100);

console.log(pedidoREDUCE);
