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

// function addDown(index, k, j) {
//   let row1 = $("#myTable tr:nth-child(" + index + ") td:nth-child(" + j + ")");
//   let row2 = $(
//     "#myTable tr:nth-child(" + index + k + ") td:nth-child(" + j + ")"
//   );
//   let t = row2.text() + row1.text();
//   row1.empty();
//   row2.text("newValue");
// }

function keydown() {
  for (var j = 0; j < 1; j++) {
    for (var i = 3; i >= 0; i--) {
      let row0 = $("#cell" + 3 + "-" + j + "").text();
      let row1 = $("#cell" + 2 + "-" + j + "").text();
      let row2 = $("#cell" + 1 + "-" + j + "").text();
      let row3 = $("#cell" + 0 + "-" + j + "").text();
      console.log("0 is " + row0);
      console.log("1 is " + row1);
      console.log("2 is " + row2);
      console.log("3 is " + row3);

      if (!$.trim(row0)) {
        if (!$.trim(row1)) {
          if (!$.trim(row2)) {
            if ($.trim(row3)) {
              $("#cell" + i + "-" + j + "").text(row3);
              $("#cell" + i - 3 + "-" + j + "").text("");
            }
          } else {
            $("#cell" + i + "-" + j + "").text(row2);
            $("#cell" + i - 2 + "-" + j + "").text("");
          }
        } else {
          $("#cell" + i + "-" + j + "").text(row1);
          $("#cell" + i - 1 + "-" + j + "").text("");
        }
      }
    }
  }
}

function keydown2() {
  for (var j = 0; j < 1; j++) {
    let row0 = $("#cell" + 3 + "-" + j + "").text();
    let row1 = $("#cell" + 2 + "-" + j + "").text();
    let row2 = $("#cell" + 1 + "-" + j + "").text();
    let row3 = $("#cell" + 0 + "-" + j + "").text();

  }
}