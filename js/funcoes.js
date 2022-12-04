//Cria uma variável para manipilar um arquivo XML
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto pra leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("corpo");
y = xmlDoc.getElementsByTagName("conteudo");

function texto1(){
    for(i=0;i<1;i++){
        document.write(
           x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue);
    }
}
function blog(){
    for(i=y.length-1;i>=0;i--){
        resto = i % 2;
	if(resto == 1){
	document.write("<div class='row' style=”border-radius: 25px;”>"+ y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div><p class='card-text mb-auto'>"+  y[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue.substr(0,100) + "' width='200' height='250'></div></div></div>");
	}
	else{
		document.write("<div class='col-md-5' style=style=”border-radius: 25px;”>"+ y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "<div class='mb-1 text-muted'>"+ y[i].getElementsByTagName("")[0].childNodes[0].nodeValue.substr(0,100) + "...</p><a href='postagem.html?codigo_conteudo=" + i +"' width='200' height='250'></div></div></div></div>");
	}
    }
}
function texto(){
    url = new URL(window.location.href)
    parametro = url.searchParams;
    i = parametro.get("codigo_conteudo"); 

   var corpo = y[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue;
   var corpopronto = corpo.replace("\n","<br>")
	document.write(corpopronto)
}


function titulo(){
    url = new URL(window.location.href)
    parametro = url.searchParams;
    i = parametro.get("codigo_conteudo"); 

	document.write(y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue)
}



function site(){
    url = new URL(window.location.href)
    parametro = url.searchParams;
    i = parametro.get("codigo_conteudo"); 

	document.write(y[i].getElementsByTagName("site")[0].childNodes[0].nodeValue)
}