function Preencher (num) {
    document.getElementById('resultado').value += num;
 }

 function contas() {
     var resultado = 0;
     resultado =  document.getElementById('resultado').value;
     document.getElementById('resultado').value = " ";
     document.getElementById('resultado').value = eval(resultado);
     /*
     Li Sobre essa função eval neste site
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
     e como não haviamos aprendido a conversao de dados em javascript, optei por usala, ja que ela calcula expressões  numa string
   */
 }