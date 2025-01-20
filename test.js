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
    i.attr("LockValue", "true");
  }
  if (!$.trim(i.text())) {
    i.text(j.text()).css("background-color", ColorR);
    j.text("").css("background-color", "#CDC1B4");
  }
}
function move(Arr) {
  if ($.trim(Arr[1].text())) {
    AddReplace(Arr[0], Arr[1]);
  }
  if ($.trim(Arr[2].text())) {
    if (Arr[0].attr("LockValue") == false && !$.trim(Arr[1].text())) {
      Arr[0] == Arr[2]
        ? AddReplace(Arr[0], Arr[2])
        : AddReplace(Arr[1], Arr[2]);
    } else {
      AddReplace(Arr[1], Arr[2]);
    }
  }
  if ($.trim(Arr[3].text())) {
    if (!$.trim(Arr[2].text())) {
      if (!$.trim(Arr[1].text())) {
        if (Arr[0].attr("LockValue") == false) {
          if (Arr[0] == Arr[3] || !$.trim(Arr[0].text())) {
            AddReplace(Arr[0], Arr[3]);
          } else {
            AddReplace(Arr[1], Arr[3]);
          }
        }
      } else {
        if (Arr[1].attr("LockValue") == false) {
          Arr[1] == Arr[3]
            ? AddReplace(Arr[1], Arr[3])
            : AddReplace(Arr[2], Arr[3]);
        }
      }
    } else {
      AddReplace(Arr[2], Arr[3]);
      if (!$.trim(Arr[0].text()) && !$.trim(Arr[1].text())) {
        AddReplace(Arr[0], Arr[2]);
      }
      if ($.trim(Arr[0].text()) && !$.trim(Arr[1].text())) {
        AddReplace(Arr[1], Arr[2]);
      }
    }
  }
}

function keydown2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + 3 + "-" + j);
    arr[1] = $("#cell" + 2 + "-" + j);
    arr[2] = $("#cell" + 1 + "-" + j);
    arr[3] = $("#cell" + 0 + "-" + j);
    move(arr);
  }
}

function keyUp2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + 0 + "-" + j);
    arr[1] = $("#cell" + 1 + "-" + j);
    arr[2] = $("#cell" + 2 + "-" + j);
    arr[3] = $("#cell" + 3 + "-" + j);
    move(arr);
  }
}

function keyRight2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + j + "-" + 3);
    arr[1] = $("#cell" + j + "-" + 2);
    arr[2] = $("#cell" + j + "-" + 1);
    arr[3] = $("#cell" + j + "-" + 0);
    move(arr);
  }
}
function keyLeft2() {
  for (j = 0; j < 4; j++) {
    let arr = [];
    arr[0] = $("#cell" + j + "-" + 0);
    arr[1] = $("#cell" + j + "-" + 1);
    arr[2] = $("#cell" + j + "-" + 2);
    arr[3] = $("#cell" + j + "-" + 3);
    move(arr);
  }
}
