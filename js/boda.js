document.oncontextmenu = function(){return false}

const fernandoPaloma = document.querySelector("#fernandoPalomaSelect");
const gustavoFernanda = document.querySelector('#gustavoFernandaSelect');
const inicio = document.querySelector('#inicio');

fernandoPaloma.addEventListener('click',mostrarFernandoPaloma);
gustavoFernanda.addEventListener('click',mostrarGustavoFernanda);


function mostrarFernandoPaloma(){
console.log('Hola');
  document.getElementById('gustavoFernanda').style.display= 'none';
  document.getElementById('inicio').style.display= 'none';
  document.getElementById('fernandoPaloma').style.display= 'block';
  
}

function mostrarGustavoFernanda(){
    console.log('Hola');
      document.getElementById('gustavoFernanda').style.display= 'block';
      document.getElementById('inicio').style.display= 'none';
      document.getElementById('fernandoPaloma').style.display= 'none';
      
    }
