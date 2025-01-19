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
function keydown() {
  // the rows number defined from the bottom row0 is the lat row
  for (var j = 0; j < 4; j++) {
    let aLock = [0, 0, 0, 0];
    let arr = cellValue(j);
    if ($.trim(arr[3])) {
      arr[3] == arr[2] ? addDown(3, 2, j) : "";
      aLock[3] = 1;
      arr[3] == arr[1] && !$.trim(arr[2]) && aLock[3] == 0
        ? addDown(3, 1, j)
        : "";
      aLock[3] = 1;
      arr[3] == arr[0] && !$.trim(arr[2]) && !$.trim(arr[1]) && aLock[3] == 0
        ? addDown(3, 0, j)
        : "";
      aLock[3] = 1;
    } else {
      if (!$.trim(arr[2])) {
        if (!$.trim(arr[1]) && $.trim(arr[0])) {
          replace(3, 0, j);
          aLock[3] = 1;
        } else {
          replace(3, 1, j);
          aLock[3] = 1;
          if (arr[3]==arr[0]){addDown(3, 0, j)}else{replace(2,0,j)}
        }
      } else {
        replace(3, 2, j);
        aLock[3] = 1;
      }
    }
    if ($.trim(arr[2])) {
      arr[2] == arr[1] ? addDown(2, 1, j) : "";
      aLock[2] = 1;
      arr[2] == arr[0] && !$.trim(arr[1]) ? addDown(2, 0, j) : "";
      aLock[2] = 1;
    } else {
      if (aLock[3] == 1) {
        if ($.trim(arr[1])) {
          arr[1] == arr[0] ? addDown(1, 0, j) : "";
        } else {
          if ($.trim(arr[0])) {
            replace(1, 0, j);
          }
        }
        replace(2, 1, j);
        aLock[2] = 1;
      } else {
        if (!$.trim(arr[1]) && $.trim(arr[0])) {
          if ($.trim(arr[3])) {
            arr[0] == arr[3] ? addDown(3, 0, j) : replace(2, 0, j);
          } else replace(3, 0, j);
        } else if ($.trim(arr[1])) {
          arr[1] == arr[0] ? addDown(1, 0, j) : "";
          if ($.trim(arr[3])) {
            arr[1] == arr[3] ? addDown(3, 1, j) : replace(2, 1, j);
          } else replace(3, 1, j);
        }
      }
    }
  }
  // end of for loop
} //end of function
function keyup() {
  // the rows number defined from the bottom row0 is the lat row
  for (var j = 0; j < 4; j++) {
    let row3 = $("#cell" + 3 + "-" + j).text();
    let row2 = $("#cell" + 2 + "-" + j).text();
    let row1 = $("#cell" + 1 + "-" + j).text();
    let row0 = $("#cell" + 0 + "-" + j).text();
    let rl0 = 0;
    let rl1 = 0;
    let rl2 = 0;
    let rl3 = 0;

    //if the last rows cell is not empty
    if ($.trim(row0)) {
      row1 == row0 ? addDown(0, 1, j) : "";
      rl0 = 1;
      row2 == row0 && !$.trim(row1) && rl0 == 0 ? addDown(0, 2, j) : "";
      row3 == row0 && !$.trim(row1) && !$.trim(row2) && rl0 == 0
        ? addDown(0, 3, j)
        : "";
    } //if the last rows cell is empty
    else {
      if (!$.trim(row1)) {
        if (!$.trim(row2) && $.trim(row3)) {
          replace(0, 3, j);
        } else {
          replace(0, 2, j);
        }
      } else {
        replace(0, 1, j);
      }
    }
    //if the 3rd rows cell is not empty
    if ($.trim(row1)) {
      row2 == row1 ? addDown(1, 2, j) : "";
      row3 == row1 && !$.trim(row2) ? addDown(1, 3, j) : "";
    }
    //if the 3rd rows cell is empty
    else {
      if (!$.trim(row2)) {
        if ($.trim(row3)) {
          replace(1, 3, j);
        }
      }
      // else {
      //   replace(1, 2, j);
      // }
    }
    //if the 2nd rows cell is not empty
    if ($.trim(row2)) {
      row3 == row2 ? addDown(2, 3, j) : "";
      if (!$.trim(row1)) {
        replace(1, 2, j);
      }
    }
    //if the 2nd rows cell is empty
    else {
      if ($.trim(row3)) {
        if ($.trim(row1)) {
          replace(2, 3, j);
        }
        if (!$.trim(row1)) {
          replace(1, 3, j);
        }
      }
    }
  } // end of for loop
} //end of function

function keyLeft() {
  for (var j = 0; j < 4; j++) {
    let col3 = $("#cell" + j + "-" + 3).text();
    let col2 = $("#cell" + j + "-" + 2).text();
    let col1 = $("#cell" + j + "-" + 1).text();
    let col0 = $("#cell" + j + "-" + 0).text();
    let cl0 = 0;
    let cl1 = 0;
    let cl2 = 0;
    let cl3 = 0;

    //if the first column cell is not empty
    if ($.trim(col0)) {
      col1 == col0 ? addL(0, 1, j) : "";
      cl0 = 1;
      col2 == col0 && !$.trim(col1) && cl0 == 0 ? addL(0, 2, j) : "";
      col3 == col0 && !$.trim(col1) && !$.trim(col2) && cl0 == 0
        ? addL(0, 3, j)
        : "";
    } //if the first column cell is empty
    else {
      if (!$.trim(col1)) {
        if (!$.trim(col2) && $.trim(col3)) {
          replaceL(0, 3, j);
        } else {
          replaceL(0, 2, j);
        }
      } else {
        replaceL(0, 1, j);
      }
    }
    //if the 3rd rows cell is not empty
    if ($.trim(col1)) {
      col2 == col1 ? addL(1, 2, j) : "";
      col3 == col1 && !$.trim(col2) ? addL(1, 3, j) : "";
    }
    //if the 3rd rows cell is empty
    else {
      if (!$.trim(col2)) {
        if ($.trim(col3)) {
          replaceL(1, 3, j);
        }
      } else {
        replaceL(1, 2, j);
      }
    }
    //if the 2nd rows cell is not empty
    if ($.trim(col2)) {
      col3 == col2 ? addL(2, 3, j) : "";
    }
    //if the 2nd rows cell is empty
    else {
      if ($.trim(col3)) {
        replaceL(2, 3, j);
      }
    }
  } // end of for loop
} //end of function
function keyRight() {
  // the rows number defined from the bottom row0 is the lat row
  for (var j = 0; j < 4; j++) {
    let col0 = $("#cell" + j + "-" + 3).text();
    let col1 = $("#cell" + j + "-" + 2).text();
    let col2 = $("#cell" + j + "-" + 1).text();
    let col3 = $("#cell" + j + "-" + 0).text();
    let cl0 = 0;
    let cl1 = 0;
    let cl2 = 0;
    let cl3 = 0;
    //if the last rows cell is not empty
    if ($.trim(col0)) {
      col1 == col0 ? addL(3, 2, j) : "";
      col0 = 1;
      col2 == col0 && !$.trim(col1) && col0 == 0 ? addL(3, 1, j) : "";
      col3 == col0 && !$.trim(col1) && !$.trim(col2) && col0 == 0
        ? addL(3, 0, j)
        : "";
    } //if the last rows cell is empty
    else {
      if (!$.trim(col1)) {
        if (!$.trim(col2) && $.trim(col3)) {
          replaceL(3, 0, j);
        } else {
          replaceL(3, 1, j);
        }
      } else {
        replaceL(3, 2, j);
      }
    }
    //if the 3rd rows cell is not empty
    if ($.trim(col1)) {
      col2 == col1 ? addL(2, 1, j) : "";
      col3 == col1 && !$.trim(col2) ? addL(2, 0, j) : "";
    }
    //if the 3rd rows cell is empty
    else {
      if (!$.trim(col2)) {
        if ($.trim(col3)) {
          replaceL(2, 0, j);
        }
      } else {
        replaceL(2, 1, j);
      }
    }
    //if the 2nd rows cell is not empty
    if ($.trim(col2)) {
      col3 == col2 ? addL(1, 0, j) : "";
    }
    //if the 2nd rows cell is empty
    else {
      if ($.trim(col3)) {
        replaceL(1, 0, j);
      }
    }
  } // end of for loop
} //end of function
