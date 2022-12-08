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
   for(i=y.length;i>0;i++){
    document.write(
        "<div class='card'>"+
        "<img class='card-img-top' src='imgs/"+y[i].getElementsByTagName(imagem)[0].childNodes[0].nodeValue +"'width:'400px'></imgs>"+
        "<div class='card-body'>"+
        [i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</h4>"+
        "</div>"+
        "<div class='card-body'>"+
        "<p class='card-text'>"+y[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue.substr(0,400) + "..."+"</p>"+ "<a class='btn btn-primary' href='postagem.html?codigo_postagem="+i+"'>Saiba mais</a>"+
        "</div>"+
        "</div>");
   }
}

function postagem(){
    //armazena a url completa
    url = new URL (window.location.href);
    parametro = url.searchParams;
    // Armazena a id
    i = parametro.get("codigo_conteudo");
    document.write(
        "<div class='row d-flex px-2 my-4'>" +
          "<div id='title-text-color' class='d-flex col-6 col-md-12 justify-content-center h2'>" +
          xml_postagem_blog[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
          "</div>" +
        "</div>" +
  
        "<div class='container'>" +
           "<img class='img-responsive rounded' src='imgs/" + xml_postagem_blog[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "' width='100%'>" +
           "<br><br><br><br>" +
           "<a class='h4 text-decoration-none text-light'>" + xml_postagem_blog[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "</a>" +
        "</div>"
    );
}