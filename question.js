dayIndex = 0;
function giveQuestion() {
  if (hr > 5) dayIndex = dt > 28 ? dt - 29 : dt - 1 + 3;
  else dayIndex = dt > 28 ? dt - 29 - 1 : dt - 1 + 3 - 1;
  if (day != "Saturday" || day != "Sunday") {
    dayNo.innerHTML = dayIndex + 1;
    phystopic.innerHTML = physics[dayIndex]["topic"];
    physchap.innerHTML = physics[dayIndex]["chapter"];
    chemitopic.innerHTML = chemistry[dayIndex]["topic"];
    chemichap.innerHTML = chemistry[dayIndex]["chapter"];
    bottopic.innerHTML = botany[dayIndex]["topic"];
    botchap.innerHTML = botany[dayIndex]["chapter"];
    zootopic.innerHTML = zoology[dayIndex]["topic"];
    zoochap.innerHTML = zoology[dayIndex]["chapter"];
  }
}
giveQuestion();
