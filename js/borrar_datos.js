var x;
x=$(document);
x.ready(fBoton1);

function fBoton1()
{
  var x=$("#boton1");
  x.click(borrarTabla);
}

function borrarTabla()
{
  var x=$("#tabla1 td.p");
  x.text("***********");
}