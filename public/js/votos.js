function enviar(){
        var pergunta = document.getElementsByName('voto');
        console.log(pergunta)
            var input;
            var escolhaPersonagem = []

            for (var A = 0; A < pergunta.length; A++) {
                if (pergunta[A].checked) {
                    input = pergunta[A].value;
                    escolhaPersonagem.push(input)
                    console.log(localStorage.ID_USUARIO)
                    break;
                } 

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
                alert('Seu voto foi processado')
                
                            }
                    })
                }

// if(input == ''){
//     alert('Selecione um personagem!')
// }
// else{
//     fetch("/usuarios/finalizar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({

//             inputServer: input
           
//         })
//     }).then(function (resposta) {
//         console.log("ESTOU NO THEN DO finalizar()!")

//         if (resposta.ok) {
//             console.log(resposta);

//             resposta.json().then(json => {
//                 console.log(json);
//                 console.log(JSON.stringify(json));
              
//                 alert('Seu voto foi processado')
//                 setTimeout(function () {
//                     window.location = "./index.html";
//                 }, 1000); // apenas para exibir o loading

//             });

//         } else {

//             console.log("Houve um erro ao tentar realizar o login!");

//             resposta.text().then(texto => {
//                 console.error(texto);
//                 finalizarAguardar(texto);
//             });
//         }

//     }).catch(function (erro) {
//         console.log(erro);
//     })

//     return false;
// }
// }