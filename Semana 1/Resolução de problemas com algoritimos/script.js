const g = 10;

function contas(){
    let v0 = document.getElementById("v0").value;
    let hmax = (v0*v0/(2*g));
    let ts = (v0/g);
    let Time = document.getElementById("Time")
    let Alt = document.getElementById("Alt")
    Time.innerHTML=`O Tempo de subida é = à ${ts} segundos`
    Alt.innerHTML=`A altura máxima é = à ${hmax} metros`
}