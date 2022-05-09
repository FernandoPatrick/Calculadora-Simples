document.querySelector('#calcular').addEventListener('click', function calcular(valor1, valor2) {
  n1 = parseFloat(document.querySelector ('#n1').value)
  n2 = parseFloat(document.querySelector ('#n2').value)
  seletor = document.querySelector('#selector').value

  switch(seletor) {
    case '+' : calculo = (n1 + n2)
    document.querySelector('#resultado').innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
    break

    case '-' : calculo = (n1 - n2)
    document.querySelector('#resultado').innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`
    break
    
    case '*' : calculo = (n1 * n2)
    document.querySelector('#resultado').innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é = ${calculo}`
    break
    
    case '/' : calculo = (n1 / n2)
    if(Number.isNaN(calculo)) {
      document.querySelector('#resultado').innerHTML = `Insira um divisível válido!`
    }else {
      document.querySelector('#resultado').innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}`
      break
    }
  }
})