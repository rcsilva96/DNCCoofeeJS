botao1 = document.getElementById('prod1')
botao2 = document.getElementById('prod2')
botao3 = document.getElementById('prod3')
botao4 = document.getElementById('prod4')

var modal = document.getElementById("modalInfo");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

/*-----------------------------------------------------------------------------------------------*/
btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

/*--------------------------------------------------------------------------------------*/  
function mostraBotao1(){
    botao1.style.display = 'block'
}

function mostraBotao2(){
    botao2.style.display = 'block'
}

function mostraBotao3(){
    botao3.style.display = 'block'
}

function mostraBotao4(){
    botao4.style.display = 'block'
}

function escondeBotao1(){
    botao1.style.display = 'none'
}

function escondeBotao2(){
    botao2.style.display = 'none'
}

function escondeBotao3(){
    botao3.style.display = 'none'
}

function escondeBotao4(){
    botao4.style.display = 'none'
}