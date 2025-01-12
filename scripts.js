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
  let row1 = $("#myTable tr:nth-child("+index+") td:nth-child("+j+")");
  let row2 = $("#myTable tr:nth-child("+index+k+") td:nth-child("+j+")");
  let t = 0;
    t = row2.text() + row1.text();
    row1.text("");
    row2.text(t);
    return;
}
 
function keydown() {
  for (var j = 0; j < 4; j++) {
    let i = 0;
    while (i < 3) {
      // let $row1 = $rows.eq(i).find("td").eq(j);
      // let row1 = $rows.eq(i).children('td').eq(j);
      let row1 =$("#myTable tr:nth-child("+i+") td:nth-child("+j+")");
      let row2 = $("#myTable tr:nth-child("+i+1+") td:nth-child("+j+")");     
      let row3 = $("#myTable tr:nth-child("+i+2+") td:nth-child("+j+")"); 
      let row4 = $("#myTable tr:nth-child("+i+3+") td:nth-child("+j+")");
     
      // if (row1.text()!="") {
       
      //   // if (row2.text()== row1.text()) {
      //   //   addDown(i, 1, j);
      //   //   i++;
      //   // } else {
      //   //   if (row3.text().trim() != "" && i<2) {
      //   //     if (row2.text()== row1.text()){addDown(i, 2, j);
      //   //     i++;}
      //   //   } else {
      //   //     if (row4.text().trim() == row1.text().trim()) {
      //   //       t = row4.text() + row1.text();
      //   //       row1.text("");
      //   //       row4.text(t);
      //   //     }
      //   //     else {
      //   //       row4.text(row1.text());
      //   //     }
      //   //   }
      //   // }
      //         }
       i++;
    }
  }
}
