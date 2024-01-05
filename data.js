const namaSaya = "femas arianda";
let usiaSaya = 19;

let biodata = document.getElementById("biodata");
console.log("biodata");

function generateBiodata() {
  let golongan;

  if (usiaSaya >= 10 && usiaSaya < 18) {
    golongan = "golongan remaja";
  } else if (usiaSaya >= 18 && usiaSaya < 30) {
    golongan = "golongan dewasa";
  } else if (usiaSaya >= 30) {
    golongan = "golongan tua";
  } else if (usiaSaya >= 2 && usiaSaya < 10) {
    golongan = "golongan anak-anak";
  } else {
    golongan = "golongan bayi";
  }
  return (biodata.innerHTML = golongan);
}

generateBiodata();
