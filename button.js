var p = 0;
var idcode = [];
function progresscheck(codeid) {
  c = 0;
  for (let i = 0; i < idcode.length; i++) {
    if (idcode[i] === codeid) c = 1;
  }
  if (c == 0) {
    p++;
    idcode.push(codeid);
  }
  $("#example5").progress({
    percent: p * 25,
    text: {
      active: `Completed ${p} Topic out of 4 Topics! Carry On...You are doing Great!`,
      success: "All Topics Of Today Completed! Congratulations🥳",
    },
  });
  return p;
}


function phyNotDone() {
  var physicsStorage;
  if (localStorage.getItem(physicsStorage) !== null) {
    if (inputString.indexOf(dayIndex) === -1) {
      var phycontent = localStorage.getItem(physicsStorage);
      phycontent = phycontent + `, ${dayIndex}`;
    }
  }
  else {
    var phycontent = `${dayIndex}`;
  }
  localStorage.setItem("physicsStorage", phycontent);
}

function chemNotDone() {
  var chemStorage;
  if (localStorage.getItem(chemStorage) !== null) {
    if (inputString.indexOf(dayIndex) === -1) {
      var chemContent = localStorage.getItem(chemStorage);
      chemContent = chemContent + `, ${dayIndex}`;
    }
  } else {
    var chemContent = `${dayIndex}`;
  }
  localStorage.setItem("chemStorage", chemContent);
}

function botNotDone() {
  var botStorage;
  if (localStorage.getItem(botStorage) !== null) {
    if (inputString.indexOf(dayIndex) === -1) {
      var botContent = localStorage.getItem(botStorage);
      botContent = botContent + `, ${dayIndex}`;
    }
  } else {
    var botContent = `${dayIndex}`;
  }
  localStorage.setItem("botStorage", botContent);
}

function zooNotDone() {
  var zooStorage;
  if (localStorage.getItem(zooStorage) !== null) {
    if (inputString.indexOf(dayIndex) === -1) {
      var zooContent = localStorage.getItem(zooStorage);
      zooContent = zooContent + `, ${dayIndex}`;
    }
  } else {
    var zooContent = `${dayIndex}`;
  }
  localStorage.setItem("zooStorage", zooContent);
}

function weekend() {
  if (hr > 5) {
    if (day == "Saturday" || day == "Sunday") {
      dayNo.innerHTML = dayIndex + 1;

      var getPhy = localStorage.getItem(physicsStorage).split(", ");
      var getChem = localStorage.getItem(chemStorage).split(", ");
      var getBot = localStorage.getItem(botStorage).split(", ");
      var getZoo = localStorage.getItem(zooStorage).split(", ");

      var restPhyChap = "";
      var restPhyTopic = "";
      for (let j = 0; j < getPhy.length; j++) {
        restPhyChap = restPhyChap + ".." + physics[getPhy[j]]["chapter"];
        restPhyTopic = restPhyTopic + ".." + physics[getPhy[j]]["topic"];
      }
      physchap.innerHTML = restPhyChap;
      phystopic.innerHTML = restPhyTopic;

      var restChemChap = "";
      var restChemTopic = "";
      for (let j = 0; j < getChem.length; j++) {
        restChemChap = restChemChap + ".." + chemistry[getChem[j]]["chapter"];
        restChemTopic = restChemTopic + ".." + chemistry[getChem[j]]["topic"];
      }
      chemichap.innerHTML = restChemChap;
      chemitopic.innerHTML = restChemTopic;

      var restBotChap = "";
      var restBotTopic = "";
      for (let j = 0; j < getBot.length; j++) {
        restBotChap = restBotChap + ".." + physics[getBot[j]]["chapter"];
        restBotTopic = restBotTopic + ".." + physics[getBot[j]]["topic"];
      }
      botchap.innerHTML = restBotChap;
      bottopic.innerHTML = restBotTopic;

      var restZooChap = "";
      var restZooTopic = "";
      for (let j = 0; j < getZoo.length; j++) {
        restZooChap = restZooChap + ".." + physics[getZoo[j]]["chapter"];
        restZooTopic = restZooTopic + ".." + physics[getZoo[j]]["topic"];
      }
      zoochap.innerHTML = restZooChap;
      zootopic.innerHTML = restZooTopic;
    }
  }
}

weekend();
