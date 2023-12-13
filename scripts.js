// Definindo as variáveis globais
const urlListaProdutos = "http://127.0.0.1:5000/lista_produtos";
const urlAddProduto = "http://127.0.0.1:5000/produto";
const urlDeleteProduto = "http://127.0.0.1:5000/produto";
let idProduto = "";

// Função para obter a lista de produtos
async function getListaProdutos() {
    try {
        const response = await fetch(urlListaProdutos, { method: 'get' });
        const data = await response.json();

        //Verifica se a data.Lista de produtos é um array
        if (Array.isArray(data["Lista de produtos"])) {
            // Exibindo a lista de produtos na tabela
            const table = document.getElementById("myTable");

            data["Lista de produtos"].forEach((item) => {

                const row = table.insertRow();

                const nome = row.insertCell();
                nome.textContent = item.nome;

                const quantidade = row.insertCell();
                quantidade.textContent = item.quantidade;

                const validade = row.insertCell();
                validade.textContent = item.validade;

                const excluir = row.insertCell();
                excluir.innerHTML = '<img src="ícones/excluir.png" alt="Excluir" width="15px" height="15px">';

                // Adicionando um evento de clique ao botão excluir
                excluir.addEventListener("click", (e) => {
                    // Obtendo o ID do produto
                    idProduto = item.id;

                    // Exibindo uma mensagem de confirmação
                    alert("Deseja realmente excluir o produto?");

                    // Executando a função de exclusão
                    deleteProduto();
                });
            });
        } else {
            console.error("Os dados retornados não contém um array de produtos:", data);
        }
    } catch (error) {
        console.error(error);
    }
}

// Lista de valores permitidos para o dropdown
const produtosPermitidos = [
    "Presunto Cozido Sadia",
    "Presunto Cozido Seara",
    "Queijo Prato",
    "Requeijão",
    "Requeijão Light",
    "Salame Italiano",
    "Mortadela Ouro",
    "Margarina Cremosa",
    "Manteiga com Sal",
    "Patê de Presunto",
    "Patê de Peito de Peru",
    "Cream Cheese"
];

// Função para preencher o dropdown com os valores da lista de produtos
function populateDropdown() {
    const dropdown = document.getElementById('dropdownNome');

    produtosPermitidos.forEach((produto) => {
        const option = document.createElement('option');
        option.value = produto;
        option.text = produto;
        dropdown.add(option);
    });
}


// Função para adicionar um novo produto
async function addProduto() {
    // Obtendo os dados do novo produto
    const nomeDropdown = document.getElementById("dropdownNome")
    const nome = nomeDropdown.value.toString();
    const quantidade = parseInt(document.getElementById("newQuantity").value, 10);
    const validade = document.getElementById("newExpiration").value.toString();

    // Validando os dados
    if (isNaN(quantidade) || quantidade < 0) {
        alert("O campo 'Quantidade' deve ser preenchido com um nº inteiro e positivo.");
        return;
    }

    if (validade === "") {
        alert("O campo 'Validade' deve ser preenchido.");
        return;
    }

    try {
        await postItem(nome, quantidade, validade);
        alert("Produto adicionado com sucesso!");
        nomeDropdown.value = "";
        quantidade.value = "";
        validade.value = "";
        await location.reload();
    } catch (error) {
        console.error('Erro ao adicionar o produto:', error);
        alert('Erro ao adicionar o produto. Verifique o console para mais detalhes.');
    }
}

/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (newInput, newQuantity, newExpiration) => {
    const formData = new FormData();
    formData.append('nome', newInput);
    formData.append('quantidade', newQuantity);
    formData.append('validade', newExpiration);

    try {
        const response = await fetch(urlAddProduto, {
            method: 'post',
            body: formData
        })

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Erro ao realizar a requisição POST: ', error)
        throw error;
    }
}

// Função assíncrona para excluir um produto
async function deleteProduto() {
    try {
        // Executando a requisição DELETE
        const response = await fetch(urlDeleteProduto + "?id=" + idProduto, {
            method: "DELETE",
        });

        const data = await response.json();

        // Exibindo uma mensagem de confirmação
        alert("Produto excluído com sucesso!");

        location.reload();
    } catch (error) {
        console.error(error);
    }
}

// Executando a função de inicialização
window.onload = async () => {
    populateDropdown();
    getListaProdutos();
}

