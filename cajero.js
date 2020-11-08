var imagenes = [];
imagenes["100"] = "billetes_imagenes/billete_100.jpg";
imagenes["50"] = "billetes_imagenes/billete_50.jpg";
imagenes["20"] = "billetes_imagenes/billete_20.jpg";
imagenes["10"] = "billetes_imagenes/billete_10.jpg";
imagenes["5"] = "billetes_imagenes/billete_5.jpg";
imagenes["1"] = "billetes_imagenes/billete_1.jpg";

class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor]; 
    }
}

/*         EXTRAER EL DINERO               */
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    var g_dinero = dinero;  //  Hacer copia de dinero extraido  //
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }

    }
    
    if(dinero > 0)
    {
        resultado.innerHTML = "<br><p style=color:#ff8000;><font size="+"8"+ "> Disculpe las molestias, no tengo el suficiente dinero.</font></p>";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br>" + "<img src=" + e.imagen.src + " width = "+"350"+" height= "+"150"+" />" + "<br/>";
            }
        }
    }
    actualizarCaja(g_dinero);
}

function actualizarCaja(g_dinero)
{
    var total =0;
    for(t of caja)
    {
        total += t.valor*t.cantidad;
    }
    queda = total - parseInt(g_dinero);
    mostrar_caja.innerHTML = "Dinero disponible en el cajero: $ "+ queda;
    console.log("Queda en caja: "+ queda)
}
/*                                                 */


/*           DINERO DISPONIBLE EN CAJA             */
var caja = [];
var entregado = [];
caja.push( new Billete(100, 5));
caja.push( new Billete(50, 4));
caja.push( new Billete(20, 5));
caja.push( new Billete(10, 6));
caja.push( new Billete(5, 2));
caja.push( new Billete(1, 10));
/*                                                 */


/*   MUESTRA EL DINERO TOTAL QUE HAY EN LA CAJA    */
var mostrar_caja = document.getElementById("mostrar_caja");
function cajaActual()
{
    var total =0;
    for(t of caja)
    {
        total += t.valor*t.cantidad;
    }
    mostrar_caja.innerHTML = "Dinero disponible en el cajero: $ "+ total;  
}
cajaActual()
/*                                                 */


/*           BORRAR BILLETES ENTREGADOS            */
var l = document.getElementById("limpiar");
l.addEventListener("click", limpiar);

function limpiar()
{
    resultado.innerHTML = "";
}
/*                                                 */