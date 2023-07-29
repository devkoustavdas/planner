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
    console.log(p);
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
