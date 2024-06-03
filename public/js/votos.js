function enviar(){
        var pergunta = document.getElementsByName('voto');
        console.log(pergunta)
            var input;
            var escolhaPersonagem = []

            for (var A = 0; A < pergunta.length; A++) {
                if (pergunta[A].checked) { //checked é uma funcao que usamos quanto temos varios inputs
                    input = pergunta[A].value;
                    escolhaPersonagem.push(input)
                    console.log(localStorage.ID_USUARIO)
                    break;
                } // SE a input foi selecionada, enviamos o valor dele, nomeado como input para o vetor escolha personagem, depois disso, usamos a função break para interromper o looping, pois ja achamos qual input foi selecionado!

            }
            // console.log(escolhaPersonagem)
        fetch("/usuarios/finalizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // fkUsuario: sessionStorage.ID_USUARIO,
                fkUsuarioServer: localStorage.ID_USUARIO,
                escolhaServer: escolhaPersonagem[0]       
                
               
            })
                    }).then(function (resposta) {
            console.log("ESTOU NO THEN DO finalizar()!")
    
            if (resposta.ok) {
                console.log(resposta);

                Swal.fire({
                    title: 'Seu voto foi processado',
                    icon: 'success',
                    confirmButtonText: 'OK' //substitui o alert
                }).then(function() {
                    window.location.href = "./Dashboard/dashboard.html";
                });
                

                            }
                    })
                }

