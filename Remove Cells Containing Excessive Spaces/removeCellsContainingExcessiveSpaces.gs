function removeCellsContainingExcessiveSpaces() {
  // Specify the sheet name where the data is located
  var sheetName = "Copy of ENGINEERING-2023";

  // Specify the starting row to begin processing (inclusive)
  var startRow = 15;

  // Get the sheet by name
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  // Define the range to process (columns B to E from startRow onwards)
  var range = sheet.getRange("B" + startRow + ":E");

  // Get the values within the range
  var values = range.getValues();

  var output = [];
  for (var i = 0; i < values.length; i++) {
    var row = [];
    for (var j = 0; j < values[i].length; j++) {
      var cellValue = values[i][j];

      // Check if the cell value is a string and contains more than two consecutive spaces
      if (typeof cellValue === "string" && cellValue.match(/\s{3,}/g)) {
        // Remove more than two consecutive spaces from the cell value
        cellValue = cellValue.replace(/\s{3,}/g, "");
      }
      // Add the modified or unmodified cell value to the row
      row.push(cellValue);
    }
    // Add the row to the output array
    output.push(row);
  }

  // Define the output range (starting from startRow in column T)
  var outputRange = sheet.getRange(startRow, 20, output.length, output[0].length);

  // Set the modified values to the output range
  outputRange.setValues(output);
}
