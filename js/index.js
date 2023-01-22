document.oncontextmenu = function(){return false}


function cambiarElemento(){
    document.getElementById("Adal").style.display = "none";
    }



function mostrarAdal(){
        document.getElementById("Irwin").style.display = "none";
        document.getElementById("Ramses").style.display = "none";
        document.getElementById("Adal").style.display = "block";
        }

function mostrarIrwin(){
            document.getElementById("Adal").style.display = "none";
            document.getElementById("Ramses").style.display = "none";
            document.getElementById("Irwin").style.display = "block";
        }
    function mostrarRamses(){
            document.getElementById("Adal").style.display = "none";
            document.getElementById("Ramses").style.display = "block";
            document.getElementById("Irwin").style.display = "none";
        }