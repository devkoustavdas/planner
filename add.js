var phystopic = document.getElementById("phytopic");
var physchap = document.getElementById("phychap");
var chemitopic = document.getElementById("chemtopic");
var chemichap = document.getElementById("chemchap");
var bottopic = document.getElementById("botanytopic");
var botchap = document.getElementById("botanychap");
var zootopic = document.getElementById("zoologytopic");
var zoochap = document.getElementById("zoologychap");
var phystopic_Input = document.getElementById("phytopic_Input");
var physchap_Input = document.getElementById("phychap_Input");
var chemitopic_Input = document.getElementById("chemtopic_Input");
var chemichap_Input = document.getElementById("chemchap_Input");
var bottopic_Input = document.getElementById("botanytopic_Input");
var botchap_Input = document.getElementById("botanychap_Input");
var zootopic_Input = document.getElementById("zoologytopic_Input");
var zoochap_Input = document.getElementById("zoologychap_Input");
var savedsubject = [1, 2, 3, 4];
var subjectList = ["Physics", "Chemistry", "Zoology", "Botany"];
function autosave() {
    phystopic.innerHTML = localStorage.getItem("phytopic");
    physchap.innerHTML = localStorage.getItem("phychap");
    chemitopic.innerHTML = localStorage.getItem("chemtopic");
    chemichap.innerHTML = localStorage.getItem("chemchap");
    zootopic.innerHTML = localStorage.getItem("zootopic");
    zoochap.innerHTML = localStorage.getItem("zoochap");
    bottopic.innerHTML = localStorage.getItem("bottopic");
    botchap.innerHTML = localStorage.getItem("botchap");
}
autosave();
function savePhy() {
    delete savedsubject[0];
    notsavedsubjectsdisplay();
    var topicname = phystopic_Input.value;
    if (topicname != "") {
        phystopic.innerHTML = topicname;
        localStorage.setItem("phytopic", topicname);
    }
    var chaptername = physchap_Input.value;
    if (chaptername != "") {
      physchap.innerHTML = chaptername;
      localStorage.setItem("phychap", chaptername);
    }
}
function saveChem() {
  delete savedsubject[1];
  notsavedsubjectsdisplay();
  var topicname = chemitopic_Input.value;
  if (topicname != "") {
    chemitopic.innerHTML = topicname;
    localStorage.setItem("chemtopic", topicname);
  }
  var chaptername = chemichap_Input.value;
  if (chaptername != "") {
    chemichap.innerHTML = chaptername;
    localStorage.setItem("chemchap", chaptername);
  }
}
function saveZoo() {
  delete savedsubject[2];
  notsavedsubjectsdisplay();
  var topicname = zootopic_Input.value;
  if (topicname != "") {
    zootopic.innerHTML = topicname;
    localStorage.setItem("zootopic", topicname);
  }
  var chaptername = zoochap_Input.value;
  if (chaptername != "") {
    zoochap.innerHTML = chaptername;
    localStorage.setItem("zoochap", chaptername);
  }
}
function saveBot() {
  delete savedsubject[3];
  notsavedsubjectsdisplay();
  var topicname = bottopic_Input.value;
  if (topicname != "") {
    bottopic.innerHTML = topicname;
    localStorage.setItem("bottopic", topicname);
  }
  var chaptername = botchap_Input.value;
  if (chaptername != "") {
    botchap.innerHTML = chaptername;
    localStorage.setItem("botchap", chaptername);
  }
}
function closeNotification() {
  var notificationBox = document.getElementById("notcompletedsub");
  notificationBox.style.transform = "scale(0)";
}
function notsavedsubjectsdisplay() {
  var subjects = "";
  for (let i = 0; i<savedsubject.length; i++) {
    if (savedsubject[i]) {
subjects = subjects + subjectList[savedsubject[i]-1] + ", ";
    }
  }
  if(subjects == "") {
    closeNotification();
  }
  else {
document.getElementById("not-saved-subjects").innerHTML = subjects;
  }
}
