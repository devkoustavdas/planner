var dayNo = document.getElementById("dayNo");
localStorage.setItem("dateToday", "19");
var dayIndex = 20;

function dayIncrease() {
  if (dt != parseInt(localStorage.getItem("dateToday"))) {
      localStorage.setItem("dateToday", dt);
      dayIndex++;
      dayNo.innerHTML = dayIndex;
  }
}
dayIncrease();
