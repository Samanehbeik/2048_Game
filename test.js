var $rows = $("#myTable tr");
function StartNewGame() {
  var $cells = $("#myTable td");
  $cells.text(" ");
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
function AddReplace(i, j) {
  let Color = ColorId(2 * i.text());
  let ColorR = ColorId(j.text());
  if (i.text() == j.text()) {
    i.text(2 * i.text()).css("background-color", Color);
    j.text("").css("background-color", "#CDC1B4");
    i.setAttribute("LockValue", true);
  }
  if (i.text() == "") {
    i.text(j.text()).css("background-color", ColorR);
    j.text("").css("background-color", "#CDC1B4");
  }
}
function move(Arr) {
  if ($.trim(Arr[0])) {
    let i = 1;
    while (!$.trim(Arr[i]) && i < 4) {
      i++;
    }
    AddReplace(Arr[0], Arr[i]);
  }
}
function keydown2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + 3 + "-" + j).text();
    arr[1] = $("#cell" + 2 + "-" + j).text();
    arr[2] = $("#cell" + 1 + "-" + j).text();
    arr[3] = $("#cell" + 0 + "-" + j).text();
    move(arr);
  }
}

function keyUp2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + 0 + "-" + j).text();
    arr[1] = $("#cell" + 1 + "-" + j).text();
    arr[2] = $("#cell" + 2 + "-" + j).text();
    arr[3] = $("#cell" + 3 + "-" + j).text();
    move(arr);
  }
}

function keyLeft2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + j + "-" + 3).text();
    arr[1] = $("#cell" + j + "-" + 2).text();
    arr[2] = $("#cell" + j + "-" + 1).text();
    arr[3] = $("#cell" + j + "-" + 0).text();
    move(arr);
  }
}
function keyRight2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + j + "-" + 0).text();
    arr[1] = $("#cell" + j + "-" + 1).text();
    arr[2] = $("#cell" + j + "-" + 2).text();
    arr[3] = $("#cell" + j + "-" + 3).text();
    move(arr);
  }
}
