function calcular(){
    let num1 = parseFloat
        (document.getElementById("num1").value)
    let num2 = parseFloat
        (document.getElementById("num2").value)

    let soma = num1 + num2
    let subtracao = num1 - num2
    let mult  = num1 * num2
    let divisao = num1/num2
    document.getElementById("soma").innerText = soma;
    document.getElementById("subtracao").innerText = subtracao;
    document.getElementById("mult").innerText = mult;
    document.getElementById("divisao").innerText = divisao;
}