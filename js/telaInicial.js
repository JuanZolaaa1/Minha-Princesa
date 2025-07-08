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
  let anosVal = dataAtual.getFullYear() - dataConhecidos.getFullYear();
  let mesesVal = dataAtual.getMonth() - dataConhecidos.getMonth();
  let diasVal = dataAtual.getDate() - dataConhecidos.getDate();
  let horasVal = dataAtual.getHours() - dataConhecidos.getHours();
  let minutosVal = dataAtual.getMinutes() - dataConhecidos.getMinutes();
  let segundosVal = dataAtual.getSeconds() - dataConhecidos.getSeconds();

  mesesVal += 1;

  if (segundosVal < 0) {
    segundosVal += 60;
    minutosVal--;
  }
  if (minutosVal < 0) {
    minutosVal += 60;
    horasVal--;
  }
  if (horasVal < 0) {
    horasVal += 24;
    diasVal--;
  }
  if (diasVal < 0) {
    const ultimoDiaMesAnterior = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      0
    ).getDate();
    diasVal += ultimoDiaMesAnterior;
    mesesVal--;
  }
  if (mesesVal < 0) {
    mesesVal += 12;
    anosVal--;
  }

  anos.innerHTML = anosVal;
  meses.innerHTML = mesesVal;
  dias.innerHTML = diasVal;
  horas.innerHTML = horasVal;
  minutos.innerHTML = minutosVal;
  segundos.innerHTML = segundosVal;
};

setInterval(atualizarTimer, 100);

function CarocelImag() {
  i++;
  imagem.classList.add("troca");
  setTimeout(() => {
    if (i > 15) {
      i = 1;
    }
    imagem.src = `./img/foto${i}.jpeg`;
    imagem.classList.remove("troca");
  }, 700);
}

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
