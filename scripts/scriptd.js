function CalcularFr(){
    m = Number((document.getElementById('m')).value)
    a = Number((document.getElementById('a')).value)
    Fr = m * a
    document.getElementById('Fr').innerHTML = `${Fr}N`
}
function CalcularComponentes(){
    f = Number((document.getElementById('F')).value)
    ang = Number((document.getElementById('ang')).value)
    rad_ang = ang * Math.PI /180
    sen_ang = Math.sin(rad_ang)
    cos_ang = Math.cos(rad_ang)
    Fx = Math.round(f * cos_ang)
    Fy = Math.round(f * sen_ang)
    document.getElementById('Fx').innerHTML = `${Fx}N`
    document.getElementById('Fy').innerHTML = `${Fy}N`
}