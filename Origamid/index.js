//mouseHandler
function handleMouseMove({clientX, clientY, target}) {
    console.log(clientX,clientY,target);
}
// document.documentElement.addEventListener("mousemove", handleMouseMove)
const timeA = 100
const timeB = 300
// const vencedor = timeA > timeB ? "grupo A ganhou" : "grupo B ganhou";
const vencedor = timeA > timeB && "grupo A ganhou"; // retorna false caso seja falso e caso seja verdadeiro retorna o valor verificado no segundo parametro
// console.log(vencedor);
// inicia com # ^='#'
// document.querySelectorAll("a[href^='#']") // pega o href de todos os links que inicie com #
// const href = event.currentTarget.getAttribute("href")//pega o atributo do elemento selecionado pelo event que poderia ser um onClick no link do MENU
// const section = document.querySelector(href); // pega o elemento no html


// window.scrollTo({ // scrole para
//     top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2, // qual o "topo" que eu devo passar, a conta foi para alinhar a posição final do scroll a posição do elemento selecionado que se encontrava na vertical esquerda.
//     behavior: smooth    // suavisa o efeito de scroll
// })

// const exponencial = 5 ** 2
// console.log(exponencial);
