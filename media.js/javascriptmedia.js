function media(){
    let nota1 = Number(window.prompt(`Digite a sua primeira nota`))
    let nota2 = Number(window.prompt(`Digite a sua primeira nota`))
    mediaAlunos = (nota1 + nota2) / 2

    let resultado = document.getElementById('resposta') 
    //aspas simples
    //aspas
    resultado.innerHTML += `<p> as notas obtidas foram: <mark>${nota1} e ${nota2}</mark>. </p>`
    resultado.innerHTML += `${mediaAlunos}`

}
