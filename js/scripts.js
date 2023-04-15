//Documentación de donde aprendí a utilizar sweetAlert2
//https://sweetalert2.github.io

//Validar los campos del textarea
//El texto se borra cuando se tiene el foco.
//document.getElementById("inputTexto").value = "";

//Dejo la documentacion donde encontre la tabla ASCII para hacer la validacion
//https://elcodigoascii.com.ar

function validarTexto(){
    if(document.getElementById("inputTexto").value == "Ingrese el texto aquí"){
        document.getElementById("inputTexto").value = "";
    }
}

//Cuando la caja de texto esta vacia y pierde el foco, agrega un texto.
function agregarTexto() {
    var miTextArea = document.getElementById("inputTexto");
    if (miTextArea.value == "") {
      miTextArea.value = "Ingrese el texto aquí";
    }
  }
  

function copiar(){
    var contenido = document.querySelector("#areaTexto");
    contenido.select(); //Seleccionamos el texto en el textarea.
    //Esto ejecuta el comando de copiar de nuestro ordenador.
    document.execCommand("copy");
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado!',
        showConfirmButton: false,
        timer: 500,
      })
}

function encriptar(){
    var miTextArea = document.getElementById("inputTexto");
    var texto = miTextArea.value; // Obtener el texto del textarea
    var expReg = /^[a-z0-9\s]+$/; // Expresión regular para validar caracteres especiales
  
    if (!expReg.test(texto)) {
      // Si el texto contiene caracteres especiales, mostrar una alerta
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se permiten letras mayúsculas, caracteres especiales ni tildes!'
      })
    }else{
        let texto = document.getElementById("inputTexto").value.toLowerCase();
        //i en el codigo es para que afecte tanto a mayusculas como minusculas en el campo de texto.
        //g, en el codigo es para que afecte toda la linea u oracion .
        //m, es para que afecte a multiples lineas o parrafos.
        var cifrado = texto.replace(/e/igm,"enter");
        var cifrado = cifrado.replace(/o/igm,"ober");
        var cifrado = cifrado.replace(/i/igm,"imes");
        var cifrado = cifrado.replace(/a/igm,"ai");
        var cifrado = cifrado.replace(/u/igm,"ufat");
    
        document.getElementById("muneco").style.display = "none";
        document.getElementById("textoEncontrado").style.display = "none";
        document.getElementById("areaTexto").innerHTML = cifrado;
        document.getElementById("copiar").style.display = "show";//Mostramos el boton de copiar.
        document.getElementById("copiar").style.display = "inherit"; //Inherit toma el valor calculado de la propiedad de su elemento padre.
    
        //Codigo para utilizar el sweetalert2
        let timerInterval
        Swal.fire({
        title: 'Encriptando!',
        html: 'Cargando <b></b>',
        timer: 500,
        timerProgressBar: true,
        imageUrl: "../img/catpro.gif",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    }    
}

function desencriptar(){
    var miTextArea = document.getElementById("inputTexto");
    var texto = miTextArea.value; // Obtener el texto del textarea
    var expReg = /^[a-z0-9\s]+$/; // Expresión regular para validar caracteres especiales
  
    if (!expReg.test(texto)) {
      // Si el texto contiene caracteres especiales, mostrar una alerta
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se permiten letras mayúsculas, caracteres especiales ni tildes!'
      })
    }else{
        let texto = document.getElementById("inputTexto").value.toLowerCase();
        var cifrado = texto.replace(/enter/igm,"e");
        var cifrado = cifrado.replace(/ober/igm,"o");
        var cifrado = cifrado.replace(/imes/igm,"i");
        var cifrado = cifrado.replace(/ai/igm,"a");
        var cifrado = cifrado.replace(/ufat/igm,"u");
    
        document.getElementById("muneco").style.display = "none";
        document.getElementById("textoEncontrado").style.display = "none";
        document.getElementById("areaTexto").innerHTML = cifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    
            //Codigo para utilizar el sweetalert
            let timerInterval
            Swal.fire({
            title: 'Casi listo!',
            html: 'Cargando <b></b>',
            timer: 1000,
            timerProgressBar: true,
            imageUrl: "../img/uncode.gif",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
        /*     backdrop: `
                    rgba(0,0,123,0.4)
                    url("../img/code.gif")
                    left top
                    no-repeat
                `, */
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
            })
    }
}

