function Calcular(){
    a = Number((document.getElementById('a')).value)
    if(a == 0){
        window.alert('Desculpe o valor de a que você insetiu é inválido')
    }
    else{
    b = Number((document.getElementById('b')).value)
    x = Number((document.getElementById('x')).value)

    y = (a * x) + b
    zero = (b * -1)/a
    if(a > 0){
        modo_reta = 'crescente'
    }
    else{
        modo_reta = 'decrescente'
    }
    intersec = `${b}`

    sy = document.getElementById('y')
    szero = document.getElementById('zero')
    sreta = document.getElementById('reta')
    sinterseccao = document.getElementById('interseccao')

    sy.innerHTML = `${y}`
    szero.innerHTML = `${zero}`
    sreta.innerHTML = `${modo_reta}`
    sinterseccao.innerHTML = `${intersec}`

    }
}