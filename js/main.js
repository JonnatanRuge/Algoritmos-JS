// Saludar


function saludar(){
    alert("Hola Usuario")
}

function OpBasicas(){
    // Declaro la variables necesarias para la ejecución
    let A,B,S,R,M,D = 0;
    // Notifico al usuario que realiza este algoritmo
    alert("Este algoritmo realiza una suma, resta, multiplicación y divición entre dos valores ingresados")

    // Capturo los datos de entrada o input
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));

    // Realizar el proceso
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;
    
    // Resultado 
    alert("El resultado de la suma es: " + S);
    alert("El resultado de la resta es: " + R);
    alert("El resultado de la multiplicación es: " + M);
    alert("El resultado de la divición es: " + D);

}

function AreaTriangular(){
    let B,H,A = 0;

    alert("Este algoritmo calcula el área de un triangulo a partir de su base y su altura");

    B = parseInt(prompt("Ingrese el valor de Base"));
    H = parseInt(prompt("Ingrese el valor de Altura"));

    A = (B*H)/2;

    alert("El área del triangulo es: " + A);
}

function ConversionUnidades() {

    let metros,pulgadas,centimetros,kilometros = 0;

    alert("Este algoritmo convierte en centimetros, pulgadas y kilometros en un valor dado en metros");

    metros = parseInt(prompt("Ingrese el valor en metros a convertir"));

    pulgadas = metros*39.37;

    centimetros = metros*100;
    
    kilometros = metros/1000;

    alert(metros + "metros en pulgadas son: " + pulgadas);
    alert(metros + "metros en centimetros son: " + centimetros);
    alert(metros + "metros en kilometros son: " + kilometros);

}

// algoritmos condicionales 

function ServicioMilitar() {

    let edad = 0;
    let genero = "";
    let hijounico = "";

    alert("Algoritmo que determina si eres apto para prestar el servicio militar obligatorio");
    
    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor ingrese su genero: F- femenino o M- masculino");
    hijounico = prompt("Por favor ingrese Si o No, de ser hijo unico");

    if (edad>=18 && edad<=26) {

        if ( genero === "M") {

            if (hijounico === "No") {

                alert("Eres apto para prestar el servicio militar");

            }else{
                alert("No eres apto para prestar el servicio militar");
            }    
        }else{
            alert("No eres apto para prestar el servicio militar");
        }

    }else{
        alert("No es apto para su edad");
    }

}

function MayorDosN() {

    let N1,N2 = 0;

    alert("Valida el mayor de dos numeros")

    N1 = parseInt(prompt("Ingresar el primer valor"));
    N2 = parseInt(prompt("Ingresar el segundo valor"));
    
    if(N1 === N2) {
        alert("No hay ningun número mayor. Ambos son iguales");
    }else if(N1>N2){
        alert(N1 + " Es mayor que " + N2);
    }else{
        alert(N2 + " Es mayor que " + N1);
    }

}

function ParImpar() {

    let X = 0;

    alert("Determinar si un número es par o impar");

    X = parseInt(prompt("Ingresar el numero a vereficar"));

    if (X % 2 === 0){
        alert(X + " Es un número par ");
    }else{
        alert(X + " Es un número impar ");
    }

}

function RangoNumeros() {

    alert("Imprimir en consola los números existentes entre un valor inicial y un valor final");

    let inicio = parseInt(prompt("Ingrese el valor de punto de partida"));
    let fin = parseInt(prompt("Ingrese el valor de punto final"));

    let contador = inicio;

    while (contador <= fin) {

        console.log(contador);

        contador ++;
    }

    alert("En consola mostraremos los números que hay entre " + inicio + " y " + fin);

}

function SumaRango() {

    alert("Súma los valores entre un rango ingresado");

    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto final"));

    let suma = 0;

    contador = inicio;

    while (contador <= fin) {
        suma += contador;

        contador ++;
        
    }
    
    alert("La súma de los números del " + inicio + " al " + fin + " es: " + suma);
}

function EsPrimo() {
    
    alert("Determina si un número es primo");

    let numero = parseInt(prompt("Ingrese el número"));

    if (numero<=1) {

        alert(numero + " No es número primo ");
    }

    for (let i = 2; i <= numero/2; i++) {

        if (numero % i === 0) {
            alert(" No es un número primo");
            return;
        }
    }
          
    alert(numero + " Si es número primo");

}

function ConversionMoneda() {

    // Objeto como dato de partida
    let TasaCambio = {
        USD : 0.00028,
        EUR : 0.00024
    }

    alert("Realiza la conversión de dinero en pesos Colombianos a dolares y euros");

    let CantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"));
    let Tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2 "));
    let Conversion;

    switch (Tasa) {
        case 1:
            Conversion = CantidadPesos * TasaCambio.USD;
            alert(CantidadPesos + " Pesos Colombianos son " + Conversion + " Dolares ");
            break;
        case 2:
            Conversion = CantidadPesos * TasaCambio.EUR;
            alert(CantidadPesos + " Pesos Colombianos son " + Conversion + " Euros ");
            break;
    
        default:
            alert("Tasa de cambio no permitida");

            break;
    }
    
}

function ProCalificaciones() {
    alert("Este algoritmo determina el promedio de calificaciones ingresadas por el usuario");

    let Calificaciones = [];

    let CantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"));

    for (let i = 1; i <= CantidadNotas; i++) {
        Calificaciones.push(parseFloat(prompt("Ingrese la calificación # " + i + " :")));
        
    }

    let SumaCalificaciones = 0;
    for(let calificacion of Calificaciones){
        SumaCalificaciones += calificacion;
    }

    let promedio = SumaCalificaciones/Calificaciones.length;

    alert("El promedio de calificaciones es: " + promedio);
}

function ConsultarPeli() {

    alert("Muestra la información de una pelicula elegida")

    let Peliculas = [
        {
            Titulo : "El Padrino",
            Director : "Nombre del Director",
            Anio : "1972",
            Genero : "Drama"
        },
        {
            Titulo : "Interestelar",
            Director : "Nombre del Director",
            Anio : "2014",
            Genero : "Ficción" 
        },
        {
            Titulo : "Harry Potter",
            Director : "Nombre del Director",
            Anio : "2008",
            Genero : "Ficción"
        }
    ];

    let NombrePelicula = prompt("Por favor ingrese el nombre de la pelicula");

    let InfoPeliculas = "";

    for(let pelicula of Peliculas){

        if(pelicula.Titulo === NombrePelicula){
            InfoPeliculas = "Titulo: " + pelicula.Titulo + "\n" +
                            "Director: " + pelicula.Director + "\n" +
                            "Anio: " + pelicula.Anio + "\n" +
                            "Genero: " + pelicula.Genero; 
            break;
        }

    }

    if (InfoPeliculas !== "") {

        alert("La pelicula consultada tiene la siguiente información. " + "\n" + InfoPeliculas);
    }
    else{
        alert("La pelicula no se encuentra en nuestro sistema");
    }
    
}