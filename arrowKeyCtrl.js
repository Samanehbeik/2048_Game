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

function cellValue(index) {
  const arr = [];
  for (j = 0; j < 4; j++) {
        arr[j] = $("#cell" + j + "-" + index).text();
      
  }
  return arr;
}

function addDown(i, k, j) {
  let row = $("#cell" + i + "-" + j).text();
  $("#cell" + k + "-" + j)
    .text("")
    .css("background-color", "#CDC1B4");
  let Color = ColorId(2 * row);
  return $("#cell" + i + "-" + j)
    .text(2 * row)
    .css("background-color", Color);

}

function replace(i, k, j) {
  let row = $("#cell" + k + "-" + j).text();
  let rowColor = $("#cell" + k + "-" + j).css("background-color");
  $("#cell" + i + "-" + j)
    .text(row)
    .css("background-color", rowColor);
  $("#cell" + k + "-" + j)
    .text(" ")
    .css("background-color", "#CDC1B4");
}
function addL(i, k, j) {
  let row = $("#cell" + j + "-" + i).text();
  $("#cell" + j + "-" + k)
    .text("")
    .css("background-color", "#CDC1B4");
  let Color = ColorId(2 * row);
  return $("#cell" + j + "-" + i)
    .text(2 * row)
    .css("background-color", Color);
}

function replaceL(i, k, j) {
  let row = $("#cell" + j + "-" + k).text();
  let rowColor = $("#cell" + j + "-" + k).css("background-color");
  $("#cell" + j + "-" + i)
    .text(row)
    .css("background-color", rowColor);
  $("#cell" + j + "-" + k)
    .text("")
    .css("background-color", "#CDC1B4");
}
