let volume = 50;

function plusVolume() {
  volume += 1;
  document.getElementById("volume-slider").style.height = volume + "px";
}

function minusVolume() {
  volume -= 1;
  document.getElementById("volume-slider").style.height = volume + "px";
}

document.getElementById("plus-button").addEventListener("click", plusVolume);
document.getElementById("minus-button").addEventListener("click", minusVolume);
