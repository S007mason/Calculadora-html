Re=""
o=0
e=""
function uno(){
    un="1"

    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()



}
function dos(){
    un="2"
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()



}
function tres(){
    un="3"

    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()


}
function cuatro(){
    un="4"
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()



}
function cinco(){
    un="5"
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()



}
function seis(){
    un="6"
  
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()



}
function siete(){
    un="7"
    
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()


}
function ocho(){
    un="8"
    
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()



}
function nueve(){
    un="9"
    
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()


}
function cero(){
    un="0"
    
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()


}
function punto(){
    un="."
    
    if (o==0){
            
        Re+=un

    }
    else if (v==6){
        Re+=un

    }
    else{
        e+=un
    }
    olla()


}

function igual(){
    un="="
    let num=Number(Re)
    let num2=Number(e)
    if (v==1){
        u=(num+num2)
    }
    else if (v==2){
        u=(num-num2)
    }
    else if (v==3){
        u=(num*num2)
    }
    else if (v==4){
        u=(num/num2)
    }
    else if (v==5){
        u=(num**num2)
    }
    else if (v==6){
        u=(num**(1/2))
    }


    Re=""
    e=""
    o=0
    olla()
}
function borrar(){
    Re=""
    e=""
    o=0
    v=0
    olla()
}

function mas(){
    o=1
    yo="+"
    olla()
    v=1


}
function menos(){
    o=2
    yo="-"
    olla()
    v=2

}
function por(){
    o=3
    yo="x"
    olla()
    v=3


}
function entre(){
    o=4
    yo="/"
    olla()
    v=4

}

function potencia(){
    o=5
    yo="^"
    olla()
    v=5
}

function raiz(){
    o=6
    yo="√"
    olla()
    v=6
}

function olla(){
    if (o==0){
        if (un!="="){
            pepe=Re
        }
        else if (Re=="" && e=="" && o==0 && v==0){
            pepe=""
        }
        else{
            pepe+=un+u
            
        }
    }
    else if (o==1 || o==2 || o==3 || o==4 || o==5 || o==6){
        pepe=Re+yo
        o=7
    }
    else if (pepe!=""){
            (un=="=")
            pepe+=un
        }

    else{}
    
    document.getElementById("milabel").textContent=pepe;
}
