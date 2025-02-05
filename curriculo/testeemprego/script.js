let produtos = [];

        function cadastrarProduto() {
            let nome = document.getElementById('nome').value;
            let descricao = document.getElementById('descricao').value;
            let valor = Number(document.getElementById('valor').value);
            let disponivel = document.getElementById('disponivel').value;

            if (nome && !isNaN(valor)) {
                produtos.push({ nome, descricao, valor, disponivel });
                produtos.sort((a, b) => a.valor - b.valor);
                atualizarLista();
                limparFormulario();
                mostrarLista();
                
            } else {
                alert('Preencha os campos corretamente!');
            }
        }

        function atualizarLista() {
            let tabela = document.getElementById('tabelaProdutos');
            tabela.innerHTML = '';
            produtos.forEach(produto => {
                let linha = `<tr><td>${produto.nome}</td><td>R$ ${produto.valor.toFixed(2)}</td></tr>`;
                tabela.innerHTML += linha;
            });
        }

        function mostrarLista() {
            document.getElementById('formulario').classList.add('tabela');
            document.getElementById('tabelaform').classList.remove('tabela');
        }

        function cadastrarnovoProduto() {
            document.getElementById('formulario').classList.remove('tabela');
            document.getElementById('tabelaform').classList.add('tabela');
        }
        function limparFormulario() {
            document.getElementById('nome').value = '';
            document.getElementById('descricao').value = '';
            document.getElementById('valor').value = '';
            document.getElementById('disponivel').value = 'sim';
        }