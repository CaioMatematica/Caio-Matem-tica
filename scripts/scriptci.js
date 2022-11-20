function CalcularVeloMU(){
     Ds = Number((document.getElementById('eDS')).value)
     Dt = Number((document.getElementById('e1Dt')).value)
     v = Ds/ Dt
     sV = document.getElementById('s1V')
     sV.innerHTML = `${v.toFixed(2)}m/s`
}
function CalcularEspMU(){
     s0 = Number((document.getElementById('e1S0')).value)
     v = Number((document.getElementById('e1V')).value)
     t = Number((document.getElementById('e1t')).value)
     s = s0 + (v*t)
     sS = document.getElementById('s1Espaco')
     sS.innerHTML = `${s}m`
}
function Calcular_ace(){
     Dv = Number((document.getElementById('eDv')).value)
     Dt = Number((document.getElementById('e2Dt')).value)
     a = Dv / Dt
     sa = document.getElementById('sa')
     sa.innerHTML = `${a}m/s²`
}
function CalcularEspMUV(){
     s0 = Number((document.getElementById('e2S0')).value)
     v0 = Number((document.getElementById('e1v0')).value)
     a = Number((document.getElementById('e1a')).value)
     t = Number((document.getElementById('e2t')).value)
     s = s0 + (v0 * t) + ((a * (t**2))/2)
     Ss = document.getElementById('s2S')
     Ss.innerHTML = `${s}m`
}
function CalcularVeloMUV(){
     v0 = Number((document.getElementById('e2v0')).value)
     a = Number((document.getElementById('e2a')).value)
     t = Number((document.getElementById('e3t')).value)
     v = v0 + (a * t)
     sv = document.getElementById('s2V')
     sv.innerHTML = `${v}m/s`
}