dayNo = document.getElementById("dayNo");
localStorage.setItem("dateToday", 20);
var dayIndex = 20;

function dayIncrease() {
  if (dt != localStorage.getItem("dateToday")) {
    if (hr > 5) {
      localStorage.setItem("dateToday", dt);
      dayIndex++;
      dayNo.innerHTML = dayIndex;
    }
  }
}
dayIncrease();
