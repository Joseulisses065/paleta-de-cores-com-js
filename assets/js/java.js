var gerarbtn = document.querySelector(".gerar");
var quadro = document.querySelector(".paletas");

function mostrar(a) {
    alert(a)
}

gerarbtn.addEventListener("click",gerar => {
    var quadros ="";
    for (var i = 0; i < 5; i++) {
        var cor = String(`#${(parseInt(Math.random()* 0xFFFFFF)).toString(16).padStart(8,'0')}`)
       quadros += (`<div class="cor" onclick='mostrar("${cor}")'>
        <div class="cor-container" style="background-color: ${cor}">
            
        </div>
        <button >
            ${cor}
        </button>
    
    </div>`)
    }
    quadro.innerHTML =quadros;


})