function addBordersToRangeWithInputs() {
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetName = activeSheet.getName();
  var selectedRow = activeSheet.getActiveRange().getRow();

  // Show an alert to ask the user whether to add borders to the selected row
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert(
    "Do you want to add borders to Row " + selectedRow + " in " + sheetName + "?",
    ui.ButtonSet.YES_NO
  );

  var endRow;
  if (response === ui.Button.NO) {
    do {
      var userInput = ui.prompt(
        "Enter the end row for the " + sheetName + ":",
        ui.ButtonSet.OK_CANCEL
      );

      if (userInput.getSelectedButton() === ui.Button.CANCEL) {
        return; // User clicked cancel, exit the function
      }

      endRow = parseInt(userInput.getResponseText());
    } while (isNaN(endRow) || endRow < 1);
  } else {
    endRow = selectedRow;
  }

  var startRow = 11;
  var columnStart = 2; // Column B
  var columnEnd = 5; // Column E

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  for (var row = startRow; row <= endRow; row++) {
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
