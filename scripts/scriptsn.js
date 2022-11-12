function CalcularPA(){
    r = Number((document.getElementById('r')).value)
    a1 = Number((document.getElementById('a1')).value)
    n = Number((document.getElementById('n')).value)

    an = a1 + (n - 1) * r
    Sn = ((a1 + an)* n)/2

    sAan = document.getElementById('Aan')
    sASn = document.getElementById('ASn')

    sAan.innerHTML = `${an}`
    sASn.innerHTML = `${Sn}`
}
function CalcularPG(){
    q = Number((document.getElementById('q')).value)
    a1 = Number((document.getElementById('Ga1')).value)
    n = Number((document.getElementById('Gn')).value)

    an = a1 * (q**(n-1))
    Sn = (a1 * ((q**n) - 1))/(q - 1)
    Si = a1/(1 - q) 

    sGan = document.getElementById('Gan')
    sGSn = document.getElementById('GSn')
    sGS = document.getElementById('GS')

    sGan.innerHTML = `${an}`
    sGSn.innerHTML = `${Sn}`
    sGS.innerHTML = `${Si}`
}