const faqs = [
    { question: 'O que é teatro?', answer: 'O teatro é uma forma de arte performativa que envolve a representação de histórias, emoções e ideias através de atuação, diálogo, movimento e gestos em um espaço destinado a apresentações. Pode incluir elementos como cenário, iluminação, som e figurino.' },
    { question: 'Como funciona a estrutura de uma peça de teatro?', answer: 'Uma peça de teatro geralmente é estruturada em atos e cenas. O ato é uma grande divisão da peça, enquanto as cenas são subdivisões menores dentro dos atos. A estrutura básica inclui uma introdução (exposição), desenvolvimento do conflito (clímax) e resolução (desfecho).' },
    { question: 'Como os atores decoram suas falas?', answer: 'Os atores decoram suas falas através de repetição e prática. Eles leem e relêem o texto, ensaiam com outros atores, e utilizam técnicas de memorização como dividir o texto em partes menores, associar falas a ações e explorar o significado emocional das palavras.' },
    { question: 'Quais são os principais elementos de uma produção teatral?', answer: ' Os principais elementos de uma produção teatral incluem o texto (roteiro), direção, atuação, cenário, figurino, iluminação, som e música.' },
    { question: 'Como posso me envolver com teatro se não quero ser ator?', answer: 'Existem muitas maneiras de se envolver com teatro além de atuar. Você pode trabalhar nos bastidores como cenógrafo, figurinista, iluminador, operador de som, diretor, produtor, assistente de palco ou trabalhar em marketing e promoção de produções teatrais.' },
    { question: 'Qual é a importância do teatro na sociedade?', answer: 'O teatro tem uma importância significativa na sociedade, pois oferece uma plataforma para a expressão artística e cultural, promove a reflexão sobre questões sociais, políticas e humanas, educa e entretém o público, e fomenta o senso de comunidade e empatia através da experiência compartilhada da performance ao vivo.' },
];

const faqsDiv = document.getElementById('faqs'); //Seleciona o elemento HTML com o id faqs onde as FAQs serão inseridas.


faqs.forEach(faq => {
    const faqDiv = document.createElement('div'); // Cria um novo elemento HTML <div>.
    faqDiv.className = 'faq'; //Define a classe CSS deste <div> como faq, pode ser usada para estilizar o elemento com CSS.

    const questionDiv = document.createElement('div'); //Cria um novo elemento HTML <div> para a pergunta
    questionDiv.className = 'question'; //Define a classe CSS deste <div> como question.
    questionDiv.textContent = faq.question; //Define o texto deste <div> como a pergunta atual da FAQ.
    faqDiv.appendChild(questionDiv); //faz com que a div da pergunta vire filho do div principal, faqDiv

    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    answerDiv.textContent = faq.answer;
    faqDiv.appendChild(answerDiv);

    questionDiv.addEventListener('click', () => { //Isso significa que toda vez que questionDiv for clicado, a função dentro do addEventListener será executada.
        const isVisible = answerDiv.style.display === 'block';
        document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none'); //esconder todas as respostas
        document.querySelectorAll('.question').forEach(q => q.classList.remove('active')); //repete sobre cada elemento selecionado e remove a classe active de cada um deles.
        if (!isVisible) { //Verifica se a resposta não estava visível antes do clique 
            answerDiv.style.display = 'block'; //Define a propriedade display do answerDiv para 'block', tornando a resposta visível.
            questionDiv.classList.add('active'); // Adiciona a classe active ao questionDiv para aplicar um estilo 
        }
    });

    faqsDiv.appendChild(faqDiv);
});
