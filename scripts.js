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
  // the rows number defined from the bottom row0 is the lat row
  for (var j = 0; j < 4; j++) {
    let row0 = $("#cell" + 3 + "-" + j).text();
    let row0color = $("#cell" + 3 + "-" + j).css("background-color");
    let row1 = $("#cell" + 2 + "-" + j).text();
    let row1color = $("#cell" + 2 + "-" + j).css("background-color");
    let row2 = $("#cell" + 1 + "-" + j).text();
    let row2color = $("#cell" + 1 + "-" + j).css("background-color");
    let row3 = $("#cell" + 0 + "-" + j).text();
    let row3color = $("#cell" + 0 + "-" + j).css("background-color");
    //if the last rows cell is not empty
    if ($.trim(row0)) {
      row1 == row0 ? addDown(3, 2, j) : "";
      row2 == row0 && !$.trim(row1) ? addDown(3, 1, j) : "";
      row3 == row0 && !$.trim(row1) && !$.trim(row2) ? addDown(3, 0, j) : "";
    } else {
      //if the last rows cell is empty
      if (!$.trim(row1)) {
        if (!$.trim(row2)) $.trim(row3) ? replace(3, 0, j) : "";
        else replace(3, 1, j);
      } else replace(3, 2, j);
    }
  }
}

//     if (!$.trim(row1)) {
//       if (!$.trim(row2)) {
//         if ($.trim(row3)) {
//           if (row0 == row3) {
//             $("#cell" + 3 + "-" + j).text(2 * row3);

//             $("#cell" + 0 + "-" + j)
//               .text("")
//               .css("background-color", "#CDC1B4");
//           }
//         }
//       } else {
//         if (row0 == row2) {
//           $("#cell" + 3 + "-" + j).text(2 * row2);

//           $("#cell" + 1 + "-" + j)
//             .text("")
//             .css("background-color", "#CDC1B4");
//         }
//       }
//     } else {
//       if (!$.trim(row0)) {
//         $("#cell" + 3 + "-" + j)
//           .text(row1)
//           .css("background-color", row1color);
//         $("#cell" + 2 + "-" + j)
//           .text("")
//           .css("background-color", "#CDC1B4");
//       } else {
//         if (row0 == row1) {
//           $("#cell" + 3 + "-" + j).text(2 * row1);

//           $("#cell" + 2 + "-" + j)
//             .text("")
//             .css("background-color", "#CDC1B4");
//         }
//       }
//     }
//   }
// }
