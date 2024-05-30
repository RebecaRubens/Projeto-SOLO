var listaTeste = []

function obterDadosGrafico() {
    fetch(`/usuarios/votos`)
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    console.log("Dados recebidos: ", JSON.stringify(dados));
                    dados.reverse();
                    for(var i = 0; i<dados.length; i++) {
                        listaTeste.push(dados)
                    }
                    console.log(dados)
                  plotarGrafico_1(dados);
                });
            } else {
                console.error('Nenhum dado encontrado da pergunta1 ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

function plotarGrafico_1(dados) {
    console.log("Dados recebidos no plotar: ", JSON.stringify(dados));
    console.log('Iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels e data
    let labels = ['']; // Pegando os valores das respostas
    let option1 = dados.map(item => item.Option1); // Pegando os valores das quantidades
    let option2 = dados.map(item => item.Option2); // Pegando os valores das quantidades
    let option3 = dados.map(item => item.Option3); // Pegando os valores das quantidades
    let option4 = dados.map(item => item.Option4); // Pegando os valores das quantidades
    let option5 = dados.map(item => item.Option5);
    let option6 = dados.map(item => item.Option6);
    let option7 = dados.map(item => item.Option7);

    let chartData = {
        labels: labels,
        datasets: [{
            label: 'blogueira',
            data: listaTeste[0],
            borderColor: '#B0CDDA',
            borderWidth: 2
        },
        {
            label: 'narrador',
            data: listaTeste[1],
            borderColor: '#EE675C',
            borderWidth: 2
        },
        {
            label: 'Lari Apaixonada',
            data: [option3],
            borderColor: '#A2D5AB',
            borderWidth: 2
        },
        {
            label: 'robo assasino',
            data: [option4],
            borderColor: '#B488C9',
            borderWidth: 2
        },
        {
            label: 'morita',
            data: [option5],
            borderColor: '#EE675C',
            borderWidth: 2
        },
        {
            label: 'vovozinha',
            data: [option6],
            borderColor: '#EE675C',
            borderWidth: 2
        },
        {
            label: 'faxineira',
            data: [option7],
            borderColor: '#EE675C',
            borderWidth: 2
        },
    
    ]
    };

    console.log('----------------------------------------------');
    console.log('Estes dados foram recebidos pela função "obterDadosGrafico" e passados para "plotarGrafico":');
    console.log(dados);

    console.log('----------------------------------------------');
    console.log('O gráfico será plotado com os respectivos valores:');
    console.log('Labels:');
    console.log(labels);
    console.log('Dados:');
    console.log(option1, option2, option3, option4,option5, option6, option7 );
    console.log('----------------------------------------------');

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}}