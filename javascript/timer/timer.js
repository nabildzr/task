const detikText = document.querySelector("#detik");
const menitText = document.querySelector("#menit");
const jamText = document.querySelector("#jam");

const mulaiBtn = document.querySelector("#mulai");
const berhentiBtn = document.querySelector("#berhenti");
const ulangiBtn = document.querySelector("#ulangi");

// initalize
let timerInterval;
// function start() {}
let detik = menit = jam = 0;


const start = (() => {
  detik++;
  detikText.innerHTML = detik;
  detikText.innerHTML = detik.toString().padStart(2, '0')

  if (detik == 60) {
    detik = 0;
    menit++
    menitText.innerHTML = menit
    menitText.innerHTML = menit.toString().padStart(2, '0')
  }

  if (menit == 60) {
    menit = 0
    jam++
    jamText.innerHTML = jam.toString().padStart(2, '0')
  }


  if (jam == 24) {
    jam = 0
    menit = 0
    detik = 0
    jamText.innerHTML = jam.toString().padStart(2, '0')
    menitText.innerHTML = menit.toString().padStart(2, '0')
    detikText.innerHTML = detik.toString().padStart(2, '0')

    clearInterval(timerInterval)
    mulaiBtn.disabled = false
  }

})

const mulai = (() => {
  console.log('mulai')
  timerInterval = setInterval(start, 1000)
  mulaiBtn.disabled = true
})
const berhenti = (() => {
  console.log('berhenti')
  clearInterval(timerInterval)
  mulaiBtn.disabled = false
})
const ulangi = (() => {
  console.log('ulangi')
  clearInterval(timerInterval)
  detik = menit = jam = 0
  detikText.innerHTML = detik.toString().padStart(2, '0')
  menitText.innerHTML = detik.toString().padStart(2, '0')
  jamText.innerHTML = detik.toString().padStart(2, '0')

})

// // fungsi untuk mengulang ngulan perintah ( perintah banyak )
// setInterval(start, 500);


mulaiBtn.addEventListener('click', mulai);
berhentiBtn.addEventListener('click', berhenti);
ulangiBtn.addEventListener('click', ulangi);