/*

let atual = "div";
let clicar = document.getElementById("troca");
let clicar2 = document.getElementById("troca2");
let nume = document.getElementById("numerozinho");
let contador = 0;
let yx;
let conta = 0;
let conta2 = 0;
let clicando1 = clicar.click;
let clicando2 = clicar2.click;

function trocar(){
    if (contador < 8){
        atual += 1;
        atual = atual.replace(/.$/, contador);
        contador += 1;
        yx = document.getElementById(`${atual}`);
        yx.classList.add("apagada");
        atual = atual.replace(/.$/, contador);
        contador;
        yx = document.getElementById(`${atual}`);
        yx.classList.remove("apagada");
        console.log(atual);
        atual = "div";
        nume.innerHTML = contador;

        switch(clicando1, clicando2){
            case clicando1:
                conta += 1;
                console.log(conta, conta2);
                break;
                
            case clicando2:
                conta2 += 1;
                console.log(conta, conta2);
                break;
    
        }
    }
    else{
     document.location.reload();  
    }
}




clicar.addEventListener("click", trocar, true);
clicar2.addEventListener("click", trocar, true);

*/

