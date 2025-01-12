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
  }
}

function addDown(index, k, j) {
  let $row1 = $rows.eq(index).find("td").eq(j);
  let $row2 = $rows
    .eq(index + k)
    .find("td")
    .eq(j);
  let t = 0;
  if ($row2.text().trim() == $row1.text().trim()) {
    t = $row2.text() + $row1.text();
    return [$row1.text(""), $row2.text(t)];
  }
}

function keydown() {
  for (var j = 0; j < 4; j++) {
    let i = 0;
    while (i < 3) {
      let $row1 = $rows.eq(i).find("td").eq(j);
      let $row2 = $rows.eq(i + 1).find("td").eq(j);
      let $row3 = $rows.eq(i + 2).find("td").eq(j);
        if ($row1.text().trim() !== " ") {
        if ($row2.text().trim() !== " ") {
          addDown(i, 1, j);
          i++;
        } else {
          if ($row3.text().trim() !== "") {
            addDown(i, 2, j);
            i++;
          } else {
            let $row4 = $rows.eq(3).find("td").eq(j);
            $row4.text($row1.text());
          }
        }
      }
      i++;
    }
  }
}
