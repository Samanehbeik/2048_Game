var $rows = $("#myTable tr");
function ColorId(value) {
  var colorMap = {
    2: "#FFEFD5",
    4: "#FFDAB9",
    8: "#FF7F50",
    16: "#FF5722",
    32: "#F4511E",
    64: "#DD2C00",
    128: "#FF3D00",
    256: "#FFCA28",
    512: "#FFB300",
    1024: "#FFA000",
    2043: "#FF9100",
  };
  return colorMap[value] || "Invalid input";
}
function StartNewGame() {
  var $cells = $("#myTable td");
  $cells.text(" ");
  $cells.attr("LockValue", "false");
  $cells.css("background-color", "rgb(205 193 180");
  var shuffledCells = $cells
    .sort(function () {
      return 0.5 - Math.random();
    })

    .slice(0, 2);
  shuffledCells.each(function () {
    var randomValue = Math.random() < 0.5 ? 2 : 4;
    $(this).text(randomValue);
    var color = randomValue == 2 ? "#FFEFD5" : "#FFDAB9";
    $(this).css("background-color", color);
  });
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m:${remainingSeconds}s`;
}
function timer() {
  var sec = 0;
  var timer = setInterval(function () {
    document.getElementById("safeTimerDisplay").innerHTML = formatTime(sec);
    sec++;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function addValueByKeys() {
  var $cells = $("#myTable td");
  var emptyCells = $cells.filter(function () {
    return $(this).text().trim() === "";
  });
  if (emptyCells.length > 0) {
    var randomEmptyCell = Math.floor(Math.random() * emptyCells.length);
    emptyCells.eq(randomEmptyCell).text(2).css("background-color", "#FFEFD5");
  } else {
    alert("You Lose the Game!");
  }
}

function move(row1, row2) {
  // console.log(row1.attr("LockValue"));
  let Color = ColorId(2 * row1.text());
  let ColorR = ColorId(row2.text());
  if (row1.attr("LockValue") == "true" || row2.attr("LockValue") == "true") {
    return;
  }
  if (!$.trim(row2.text())) {
    return;
  }

  if (row1.text() == row2.text()) {
    row1.text(2 * row1.text()).css("background-color", Color);
    row2.text("").css("background-color", "#CDC1B4");
    row1.attr("LockValue", "true");
  }
  if (!$.trim(row1.text())) {
    row1.text(row2.text()).css("background-color", ColorR);
    row2.text("").css("background-color", "#CDC1B4");
  }
}
function Play(arr) {
  $("#myTable td").attr("LockValue", "false");
  move(arr[0], arr[1]);
  move(arr[1], arr[2]);
  move(arr[0], arr[1]);
  move(arr[2], arr[3]);
  move(arr[1], arr[2]);
  move(arr[0], arr[1]);
}
function keydown2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + 3 + "-" + j);
    arr[1] = $("#cell" + 2 + "-" + j);
    arr[2] = $("#cell" + 1 + "-" + j);
    arr[3] = $("#cell" + 0 + "-" + j);
    Play(arr);
    
  }
}

function keyUp2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + 0 + "-" + j);
    arr[1] = $("#cell" + 1 + "-" + j);
    arr[2] = $("#cell" + 2 + "-" + j);
    arr[3] = $("#cell" + 3 + "-" + j);
    Play(arr);
    
  }
}

function keyRight2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + j + "-" + 3);
    arr[1] = $("#cell" + j + "-" + 2);
    arr[2] = $("#cell" + j + "-" + 1);
    arr[3] = $("#cell" + j + "-" + 0);
    Play(arr);
   
  }
}
function keyLeft2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + j + "-" + 0);
    arr[1] = $("#cell" + j + "-" + 1);
    arr[2] = $("#cell" + j + "-" + 2);
    arr[3] = $("#cell" + j + "-" + 3);
    Play(arr);
  
  }
}
