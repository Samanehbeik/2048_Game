 // row2 =$("#"+i+1+"-"+j+"").text();
          // row3 =$("#"+i+2+"-"+j+"").text();
          // row4 =$("#"+i+3+"-"+j+"").text();
        
      // let row1 = $rows.eq(i).children('td').eq(j);
      // let row1 = $("#myTable tr:nth-child("+i+") td:nth-child("+j+")");
      // let row2 = $("#myTable tr:nth-child("+i+1+") td:nth-child("+j+")");     
      // let row3 = $("#myTable tr:nth-child("+i+2+") td:nth-child("+j+")"); 
      // let row4 = $("#myTable tr:nth-child("+i+3+") td:nth-child("+j+")");
          //  if (row1.text()!=" ") {
           
      //     if (row2.text() == row1.text()) {
      //     // 
          
      //     i++;
      //   } else {
      //     if (row3.text().trim() != "" && i<2) {
      //       if (row2.text()== row1.text()){addDown(i, 2, j);
      //       i++;}
      //     } else {
      //       if (row4.text().trim() == row1.text().trim()) {
      //         t = row4.text() + row1.text();
      //         row1.text("");
      //         row4.text(t);
      //       }
      //       else {
      //         row4.text(row1.text());
      //       }//
      //     }
      //   }
      //         }

      // function move(Arr) {
//   if ($.trim(Arr[1].text())) {
//     AddReplace(Arr[0], Arr[1]);
//   }
//   if ($.trim(Arr[2].text())) {
//     if (Arr[0].attr("LockValue") == false && !$.trim(Arr[1].text())) {
//       Arr[0] == Arr[2]
//         ? AddReplace(Arr[0], Arr[2])
//         : AddReplace(Arr[1], Arr[2]);
//     } else {
//       AddReplace(Arr[1], Arr[2]);
//     }
//   }
//   if ($.trim(Arr[3].text())) {
//     if (!$.trim(Arr[2].text())) {
//       if (!$.trim(Arr[1].text())) {
//         if (Arr[0].attr("LockValue") == false) {
//           if (Arr[0] == Arr[3] || !$.trim(Arr[0].text())) {
//             AddReplace(Arr[0], Arr[3]);
//           } else {
//             AddReplace(Arr[1], Arr[3]);
//           }
//         }
//       } else {
//         if (Arr[1].attr("LockValue") == false) {
//           Arr[1] == Arr[3]
//             ? AddReplace(Arr[1], Arr[3])
//             : AddReplace(Arr[2], Arr[3]);
//         }
//       }
//     } else {
//       AddReplace(Arr[2], Arr[3]);
//       if (!$.trim(Arr[0].text()) && !$.trim(Arr[1].text())) {
//         AddReplace(Arr[0], Arr[2]);
//       }
//       if ($.trim(Arr[0].text()) && !$.trim(Arr[1].text())) {
//         AddReplace(Arr[1], Arr[2]);
//       }
//     }
//   }
// }
// function AddReplace(i, j) {
//   let Color = ColorId(2 * i.text());
//   let ColorR = ColorId(j.text());
//   if (i.text() == j.text()) {
//     i.text(2 * i.text()).css("background-color", Color);
//     j.text("").css("background-color", "#CDC1B4");
//     i.attr("LockValue", "true");
//   }
//   if (!$.trim(i.text())) {
//     i.text(j.text()).css("background-color", ColorR);
//     j.text("").css("background-color", "#CDC1B4");
//   }
// }
// function cellValue(index) {
    //   const arr = [];
    //   for (j = 0; j < 4; j++) {
    //         arr[j] = $("#cell" + j + "-" + index).text();
          
    //   }
    //   return arr;
    // }
    
    // function addDown(i, k, j) {
    //   let row = $("#cell" + i + "-" + j).text();
    //   $("#cell" + k + "-" + j)
    //     .text("")
    //     .css("background-color", "#CDC1B4");
    //   let Color = ColorId(2 * row);
    //   return $("#cell" + i + "-" + j)
    //     .text(2 * row)
    //     .css("background-color", Color);
    
    // }
    
    // function replace(i, k, j) {
    //   let row = $("#cell" + k + "-" + j).text();
    //   let rowColor = $("#cell" + k + "-" + j).css("background-color");
    //   $("#cell" + i + "-" + j)
    //     .text(row)
    //     .css("background-color", rowColor);
    //   $("#cell" + k + "-" + j)
    //     .text(" ")
    //     .css("background-color", "#CDC1B4");
    // }
    // function addL(i, k, j) {
    //   let row = $("#cell" + j + "-" + i).text();
    //   $("#cell" + j + "-" + k)
    //     .text("")
    //     .css("background-color", "#CDC1B4");
    //   let Color = ColorId(2 * row);
    //   return $("#cell" + j + "-" + i)
    //     .text(2 * row)
    //     .css("background-color", Color);
    // }
    
    // function replaceL(i, k, j) {
    //   let row = $("#cell" + j + "-" + k).text();
    //   let rowColor = $("#cell" + j + "-" + k).css("background-color");
    //   $("#cell" + j + "-" + i)
    //     .text(row)
    //     .css("background-color", rowColor);
    //   $("#cell" + j + "-" + k)
    //     .text("")
    //     .css("background-color", "#CDC1B4");
    // }
    