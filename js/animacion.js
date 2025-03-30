e1=document.querySelector(".lista-mostrar .lista-adentro:nth-of-type(1)");
e2=document.querySelector(".lista-mostrar .lista-adentro:nth-of-type(2)");
e3=document.querySelector(".lista-mostrar .lista-adentro:nth-of-type(3)");
e4=document.querySelector(".lista-mostrar .lista-adentro:nth-of-type(4)");
e5=document.querySelector(".lista-mostrar .lista-adentro:nth-of-type(5)");
e6=document.querySelector(".lista-mostrar .lista-adentro:nth-of-type(6)");



t1="Puerta Principal Gris Plata";
t2="Puerta Principal Aluminio Blanco";
t3="Puerta de Baño Gris Plata";
t4="Ventana Con Aluminio Blanco 50-20";
t5="Ventana Con Aluminio Blanco 50-20";
t6="Ventana Con Aluminio Gris Plata 70-38";

imag1='<img src="imagenes/puerta5.jpg" width="80%" height="450px">';
imag2='<img src="imagenes/puerta8.jpg" width="70%" height="450px">';
imag3='<img src="imagenes/puertaBaño.jpg" width="70%" height="450px">';
imag4='<img src="imagenes/ventana2.jpeg" width="70%" height="450px">';
imag5='<img src="imagenes/ventana1.jpeg" width="70%" height="450px">';
imag6='<img src="imagenes/ventana3.jpg" width="70%" height="450px">';

descr1="Puerta Gris Plata con tubos liso en aluminio diagonales.Con punta de corte de 30 grados y vidrios verde reflectivo ubicado en la parte superior e inferior";
descr2="Puerta Principal con aluminio blanco, machimbre verticales con cuadrante superior e inferior. vitral en el centro con textura diamantado, en cada lado cuadrante con machembre cuyo corte es de 45 grado";
descr3="Puerta de baño con aluminio gris laborada en aluminio sencillo especilamente para baños y multienchape en el centro";
descr4="Ventana con aluminio blanco sencillo laborado en material 50-20 de 6 cuadros de vidrios por hoja corrugado";
descr5="Ventana con aluminio blanco sencillo laborado en material 50-20 diseño emblematico con cuadros verticales y vidrios reflectivo";
descr6="Ventana de aluminio 70-38 material robusto y resistente modelo mas usado en la costa con una figura Z por cada hoja";


function cambiar(event,t,imag,descr){
    event.preventDefault();
    document.getElementById("titulo").innerHTML=t;
    document.getElementById("imagen").innerHTML=imag;
    document.getElementById("descripcion").innerHTML=descr;
 }
 
 e1.addEventListener("click",function(event){cambiar(event,t1,imag1,descr1)});
 e2.addEventListener("click",function(event){cambiar(event,t2,imag2,descr2)});
 e3.addEventListener("click",function(event){cambiar(event,t3,imag3,descr3)});
 e4.addEventListener("click",function(event){cambiar(event,t4,imag4,descr4)});
 e5.addEventListener("click",function(event){cambiar(event,t5,imag5,descr5)});
 e6.addEventListener("click",function(event){cambiar(event,t6,imag6,descr6)});
 