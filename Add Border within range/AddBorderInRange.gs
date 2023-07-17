function addBordersToRange() {
  // Define the name of the sheet where the borders will be applied
  var sheetName = "52. ENGINEERING";

  // Define the start and end rows within the sheet to apply borders
  var startRow = 11;
  var endRow = 74;

  // Define the start and end columns (in A1 notation) within the sheet to apply borders
  var columnStart = 2; // Column B
  var columnEnd = 5; // Column E

  // Get the sheet by name
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  // Loop through each row within the specified range and add borders
  for (var row = startRow; row <= endRow; row++) {
    // Set the range for the current row, starting from the specified column and spanning the number of columns to apply borders
    sheet.getRange(row, columnStart, 1, columnEnd - columnStart + 1)
      .setBorder(
        true,    // Top border
        true,    // Left border
        true,    // Bottom border
        true,    // Right border
        null,    // Vertical border
        null,    // Horizontal border
        "black", // Border color
        SpreadsheetApp.BorderStyle.SOLID // Border style
      );
  }
}
