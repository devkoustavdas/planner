var dayIndex = 0;
function giveQuestion() {
  if (hr > 5) dayIndex = dt > 28 ? dt - 29 : dt - 1 + 3;
  else dayIndex = dt > 28 ? dt - 29 - 1 : dt - 1 + 3 - 1;
}
giveQuestion();
