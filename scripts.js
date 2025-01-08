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
    console.log("No empty cells available.");
  }
}

function keydown() {
  for (var i = 0; i < $rows.length - 1; i += 2) {
    var $row1 = $rows.eq(i).find("td");
    var $row2 = $rows.eq(i + 1).find("td");
    $row1.each(function (index) {
      var cellValue1 = $(this).text().trim();
      var cellValue2 = $row2.eq(index).text().trim();
      if (cellValue1 === cellValue2) {
        console.log(
          "Row " +
            i +
            " and Row " +
            (i + 1) +
            " - Cell " +
            index +
            " is equal: " +
            cellValue1
        );
      } else {
        console.log(
          "Row " +
            i +
            " and Row " +
            (i + 1) +
            " - Cell " +
            index +
            " is not equal: " +
            cellValue1 +
            " vs " +
            cellValue2
        );
      }
    });
  }
}
