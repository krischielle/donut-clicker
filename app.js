var donutCount = 0;
var autoClicker = 0;
var clickerCost = 100;
var clicked = document.getElementById("donutClick");
var buy = document.getElementById("buyClick");
var resetNow = document.getElementById("reset");
clicked.onclick = clickedDonut;
buy.onclick = buyClicker;
resetNow.onclick = resetGame;
buy.style.backgroundColor = "Gray";

function clickedDonut() {
  donutCount += 1;
  console.log(donutCount);
  document.getElementById("donut").innerHTML = donutCount + " Donuts";
  if (donutCount >= clickerCost) {
    buy.style.backgroundColor = "LightBlue";
  } else {
    buy.style.backgroundColor = "Gray";
  }
}

function buyClicker() {
  if (donutCount >= clickerCost) {
    autoClicker += 1;
    donutCount = donutCount - clickerCost;
    clickerCost = Math.round(clickerCost + (clickerCost * 0.1));
    document.getElementById("donut").innerHTML = donutCount + " Donuts";
    document.getElementById("autoClicker").innerHTML = autoClicker + " Auto Clicker";
    document.getElementById("clickerCost").innerHTML = "Auto Clicker Cost " +clickerCost + " Donut";
    setInterval(autoClick, 1000);
    buy.style.backgroundColor = "LightBlue";
  } else {
    buy.style.backgroundColor = "Gray";
  }
}

function autoClick() {
  donutCount = donutCount + autoClicker;
  console.log(donutCount);
  document.getElementById("donut").innerHTML = donutCount + " Donuts";
  if (donutCount >= clickerCost) {
    buy.style.backgroundColor = "LightBlue";
  } else {
    buy.style.backgroundColor = "Gray";
  }
}
