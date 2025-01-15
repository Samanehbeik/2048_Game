function addDown(i, k, j) {
  let row = $("#cell" + i + "-" + j).text();
  $("#cell" + k + "-" + j)
    .text("")
    .css("background-color", "#CDC1B4");
  return $("#cell" + i + "-" + j).text(2 * row);
}

function replace(i,k,j){
    let row = $("#cell" + k + "-" + j).text();
    let rowColor = $("#cell" + k + "-" + j).css("background-color");
    $("#cell" + i + "-" + j)
            .text(row)
            .css("background-color", rowColor);
          $("#cell" + 1 + "-" + j)
            .text("")
            .css("background-color", "#CDC1B4");
}
