let digimon1= "Agumon"
let hpdigimon1= 200
let skill1=  34
let digimon2= "Gabumon"
let hpdigimon2= 190
let skill2= 40
let digimon3= "Impmon"
let hpdigimon3= 190
let skill3= 40
let digimon4= "Patamon"
let hpdigimon4= 180
let skill4= 50
let tamer= prompt("Ingrese su nombre aqui:")
if (tamer== null) {alert("Debe elegir nombre")} else { 
    let daño1 
    let hp1
    let daño2
    let hp2
    let op = prompt ("Elige Digimon 1= Agumon 2= Gabumon 3= Impmon 4= Patamon")
    switch(op){
        case "1":
        alert("Elegiste a Agumon como tu digimon acompañante")
        break;
        case "2":
        alert("Elegiste a Gabumon como tu digimon acompañante")
        break;
        case "3":
        alert("Elegiste a Impmon como tu digimon acompañante")
        break;
        case "4":
        alert("Elegiste a Patamon como tu digimon acompañante")
        break;
        default: alert("Selecione un digimon valido")
    }
    if (op!= null){
    let sel = prompt ("Elige Enemigo Digimon 1= Agumon 2= Gabumon 3= Impmon 4= Patamon")
    switch(sel){
        case "1":
        alert("Elegiste a Agumon como enemigo")
        break;
        case "2":
        alert("Elegiste a Gabumon como enemigo")
        break;
        case "3":
        alert("Elegiste a Impmon como enemigo")
        break;
        case "4":
        alert("Elegiste a Patamon como enemigo")
        break;
        default: alert("Selecciona enemigo valido")
}
if (op== "1"){
daño1=skill1, hp1=hpdigimon1
} else if (op=="2"){
daño1=skill2, hp1=hpdigimon2
}
else if (op=="3"){
    daño1=skill3, hp1=hpdigimon3
    }
 else if (op=="4"){
 daño1=skill4, hp1=hpdigimon4
 }
 if (sel=="1"){
 daño2=skill1, hp2=hpdigimon1
}
else if (sel=="2"){
daño2=skill2, hp2=hpdigimon2
 } else if (sel=="3"){
 daño2=skill3, hp2=hpdigimon3
} else if (sel=="4"){
daño2=skill4, hp2=hpdigimon4
 }
 let round= 0
function buba (){
while (hp1 > 0 && hp2> 0){
    round +=1
    hp1-=Math.ceil(Math.random() * daño2 )
    hp2-=Math.ceil(Math.random() * daño1 )
    console.log (tamer + " este es el round "+ round)
    console.log (tamer + " tu vida restante es de "+ hp1)
    console.log (tamer + " la vida restante del rival es "+ hp2)
}
}
if (op!= null && sel!= null )
{buba ()
if (hp1<=hp2) {
alert("Tu Digimon se ha debilitado, la pelea duro " + round + " rounds")
} else alert ("Tu digimon ha ganado, la pelea duro " + round + " rounds")
}
}
}
