zoology = [
  {
    chapter: "Structural Organisation in Animals-1",
    topic:
      "Tissue Introduction, Simple Epithelium, Brush bordered Epithelium and Ciliated Epithelium, Glandular Epithelium, Types of Glands",
  },
  {
    chapter: "Structural Organisation in Animals-1",
    topic:
      "Types of Compound Epithelium, Cell Junctions, Types of Connective Tissues",
  },
  {
    chapter: "Structural Organisation in Animals-1",
    topic: "Areolar connective tissue, Adipose Connective Tissue",
  },
  {
    chapter: "Structural Organisation in Animals-1",
    topic: "Dense Connective Tissue and Cartilage, Bone and Blood",
  },
  {
    chapter: "Structural Organisation in Animals-1",
    topic: "Muscle Tissue, Neural Tissue, Frog",
  },
  {
    chapter: "Structural Organisation in Animals-1",
    topic: "Previous Year Ouestions Problem Practise",
  },
  {
    chapter: "Breathing and Exchange of Gases",
    topic:
      "Introduction and Respiratory organs in Animals, Human respiratory system: Nostrils, Nasal chamber, Pharynx, Larynx, Trachea",
  },
];

physics = [
  {
    chapter: "Motion in Plane",
    topic:
      "Application of Calculas in motion in a plane, Ground to ground projectile motion",
  },
  {
    chapter: "Motion in Plane",
    topic:
      "Relative motion in 2-D motion (Rain Man And Rever Man Problems), Projectile motion, horizontal projection and radius of curvature",
  },
  {
    chapter: "Motion in Plane",
    topic: "Projectile motion from height",
  },
  {
    chapter: "Motion in Plane",
    topic:
      "Kinematics of circular motion, Uniform & Non uniform circular motion",
  },
  {
    chapter: "Newton law of Motion",
    topic: "Forces & Laws of motion, Newton's first law of motion",
  },
  {
    chapter: "Newton law of Motion",
    topic: "Newton's Second law of motion, Newton's Third law & importance",
  },
  {
    chapter: "Motion in Plane",
    topic: "Previous Year Ouestions Problem Practise",
  },
];

botany = [
  {
    chapter: "Cell: The Unit of Life",
    topic: "What is a Cell? Overview of the Cell Theory, Prokaryotic cells-1",
  },
  {
    chapter: "Cell: The Unit of Life",
    topic: "Prokaryotic cells-2",
  },
  {
    chapter: "Cell: The Unit of Life",
    topic: "Eukaryotic cells-1",
  },
  {
    chapter: "Cell: The Unit of Life",
    topic: "Eukaryotic cells-2",
  },
  {
    chapter: "Cell: The Unit of Life",
    topic: "Previous Year Ouestions Problem Practise",
  },
  {
    chapter: "Cell Cycle and Cell Division",
    topic:
      "Amitosis, Cell Cycle and Cell Division Phases of the cell cycle, M Phase-1",
  },
  {
    chapter: "Cell Cycle and Cell Division",
    topic: "M Phase-2, Meiosis",
  },
];

chemistry = [
  {
    chapter: "States of Matter",
    topic: "Introduction of States of Matter, Gas Parametres, The Gaseous Laws",
  },
  {
    chapter: "States of Matter",
    topic: "Diffusion & Effusion, Kinetic theory of gases-1",
  },
  {
    chapter: "States of Matter",
    topic: "Kinetic theory of gases-2, Maxwell’s velocity Distribution",
  },
  {
    chapter: "States of Matter",
    topic: "Real Gases, States of Matter Problem Practise",
  },
  {
    chapter: "States of Matter",
    topic:
      "Liquefaction of gases & critical constants, States of Matter Problem Practise",
  },
  {
    chapter: "Solutions",
    topic: "Solution, Binary Solution and Concentration Terms-1",
  },
  {
    chapter: "States of Matter",
    topic: "Previous Year Ouestions Problem Practise",
  },
];

phystopic = document.getElementById("phytopic");
physchap = document.getElementById("phychap");
chemitopic = document.getElementById("chemtopic");
chemichap = document.getElementById("chemchap");
bottopic = document.getElementById("botanytopic");
botchap = document.getElementById("botanychap");
zootopic = document.getElementById("zoologytopic");
zoochap = document.getElementById("zoologychap");
dayNo = document.getElementById("dayNo");

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
