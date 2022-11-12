function Calcular(){
    a = Number((document.getElementById('a')).value)
    if(a == 0){
        window.alert('Desculpe o valor de a que você digitou é inválido')
    }
    else{
        b = Number((document.getElementById('b')).value)
        c = Number((document.getElementById('c')).value)
        x = Number((document.getElementById('x')).value)
        y = (a * (x**2)) + (b * x) + c
        delta = (b**2) -4 * a * c
        if(delta > 0){
            r1 = ((-b+Math.sqrt(delta))/(2 * a)).toFixed(2)
            r2 = ((-b-Math.sqrt(delta))/(2 * a)).toFixed(2)
        }
        else if(delta == 0){
            r1 = ((-b+Math.sqrt(delta))/(2 * a)).toFixed(2)
            r2= r1
        }
        else{
            r1 = 'Não existe raíz real para essa função'
        }
        if(a > 0){
            concavidade = 'para cima'
        }
        else{
            concavidade = 'para baixo'
        }
        interseccao = `Corta o eixo y no ponto ${c}`
        vx = ((-b)/(2*a)).toFixed(2)
        vy = (-delta)/(4*a).toFixed(2)
        v = `(${vx},${vy})`
     
        sy = document.getElementById('y')
        szero1 = document.getElementById('zero1')
        szero2 = document.getElementById('zero2')
        sconcavidade = document.getElementById('concavidade')
        sinterseccao = document.getElementById('interseccao')
        svertice = document.getElementById('vertice')

        sy.innerHTML = `${y}`
        if(delta > 0){
            szero1.innerHTML = `${r1},`
            szero2.innerHTML = `${r2}`
        }
        else if(delta == 0){
            szero1.innerHTML = `${r1}(raíz dupla)`
            szero2.innerHTML = ''
        }
        else{
            szero1.innerHTML = `${r1}`
            szero2 = ''         
        }
        sconcavidade.innerHTML = `${concavidade}`
        sinterseccao.innerHTML = `${interseccao}`
        svertice.innerHTML = `${v}` 
    }
}