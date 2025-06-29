let i = 1;
const anos = document.querySelector("#anos");
const meses = document.querySelector("#meses");
const dias = document.querySelector("#dias");
const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const dataConhecidos = new Date("2022-08-20T22:00:00");
const volta = document.querySelector("#volta");
const avanco = document.querySelector("#avanco");
const imagem = document.querySelector("#foto img");

const atualizarTimer = () => {
  const dataAtual = new Date();
  const diffTime = dataAtual - dataConhecidos;
  const ano = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const mes = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30)) % 12;
  const dia = Math.floor(diffTime / (1000 * 60 * 60 * 24)) % 30;
  const hora = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minuto = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const segundo = Math.floor((diffTime % (1000 * 60)) / 1000);

  anos.innerHTML = ano;
  meses.innerHTML = mes;
  dias.innerHTML = dia;
  horas.innerHTML = hora;
  minutos.innerHTML = minuto;
  segundos.innerHTML = segundo;
};

setInterval(atualizarTimer, 100);

function CarocelImag() {
  i++;
  imagem.classList.add("troca");
  setTimeout(() => {
     if (i > 15) {
       i = 1;
     }
    imagem.src = `img/foto${i}.jpeg`;
    imagem.classList.remove("troca");
  }, 700);
};

setInterval(CarocelImag, 3000);

// avanco.addEventListener("click", () => {
//   i++;
//   imagem.classList.add("troca");
//   setTimeout(() => {
//      if (i > 15) {
//        i = 1;
//      }
//     imagem.src = `/img/foto${i}.jpeg`;
//     imagem.classList.remove("troca");
//   }, 300);
// });

// volta.addEventListener("click", () => {
//      i--;
//   imagem.classList.add("troca");
//   setTimeout(() => {
//     if (i < 1) {
//       i = 15;
//     }
//     imagem.src = `/img/foto${i}.jpeg`;
//     imagem.classList.remove("troca");
//   }, 300);
// });
