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

pedidos.forEach((pedido, index) => {
    let { id, nome, alimento, bebida } = pedido;
    console.log(`${index} - ${id} - ${nome} - ${alimento} - ${bebida}`);
});
