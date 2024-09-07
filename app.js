function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Transforma em minúsculas
    console.log(campoPesquisa);

    let resultados = "";

    for (let dado of dados) {
        // Verifica se o título ou a descrição inclui o que foi digitado
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
            `;
        }
    }

    // Se não houver resultados, pode adicionar uma mensagem
    if (resultados === "") {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }

    section.innerHTML = resultados;
}