var noticias = [];

function adicionarNoticiais() {
  var inNoticia = document.getElementById("inNoticia");
  var outNum = document.getElementById("outNum");

  var noticia = inNoticia.value;

  if (noticia == "") {
    alert("Informe a notícia");
    inNoticia.focus();
    return;
  }

  noticias.push(noticia);

  outNum.textContent = noticias.length;

  inNoticia.value = "";
  inNoticia.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticiais);

function listarUltimas() {
  var quantidade = Number(prompt("Digite o número de notícias que deseja visualizar"));
  var total = noticias.length;

  if (quantidade == 0 || isNaN(quantidade) || quantidade > total) {
    alert("Digite um número válido");
    return;
  }

  var ultimas = quantidade + " Últimas Notícias\n--------------------------------------------------\n";

  for (i = total - 1; i >= total - quantidade; i--) {
    ultimas += (i + 1) + "º) " + noticias[i] +"\n";
  }

  document.getElementById("outLista").textContent = ultimas;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarUltimas);