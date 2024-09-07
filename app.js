function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e o converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Verifica se o usuário digitou algum termo de pesquisa
    if (!campoPesquisa) {
        // Se não digitou, exibe uma mensagem informando que não há resultados
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um clube ou cidade!</p>";
        // Interrompe a função, pois não há mais o que fazer
        return;
    }

    let titulo = "";
    let descricao = "";
    let ano = "";
    let sede = "";
    let tags = "";

    // Itera sobre cada item nos dados (assumindo que 'dados' é um array de objetos)
    for (let contador of dados) {
        // Converte as propriedades do item para minúsculas para facilitar a comparação
        titulo = contador.titulo.toLowerCase();
        descricao = contador.descricao.toLowerCase();
        ano = contador.ano.toString();
        sede = contador.sede.toLowerCase();
        tags = contador.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            sede.includes(campoPesquisa) ||
            ano.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)) {
            // Se encontrar uma correspondência, adiciona um elemento HTML com os resultados à string 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2><a href="#" target="_blank">${contador.titulo}</a></h2>
                    <p class="descricao-meta">${contador.descricao}</p>
                    <p class="descricao-meta"><strong>Sede em:</strong> ${contador.sede}</p>
                    <p class="descricao-meta"><strong>Ano de fundação:</strong> ${contador.ano}</p>
                    <a href=${contador.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }
    // Se nenhum resultado foi encontrado até o momento, define uma mensagem padrão
    if (!resultados) {
        resultados = `<p>Não encontramos nada com a expressão: "<strong>${campoPesquisa}</strong>"!</p>`;
    }

    // Atualiza o conteúdo da seção HTML com os resultados da pesquisa
    section.innerHTML = resultados;
}