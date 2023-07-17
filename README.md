# GoogleAppScript
Codes for Google Appscript for data analysis
## Excel Data Cleaner - Google Apps Script

This Google Apps Script provides a solution to remove cells containing excessive spaces from an Excel sheet. It is particularly useful when dealing with data that has multiple consecutive spaces in certain cells, causing inconsistency and formatting issues.

### Functionality

The script performs the following tasks:

- Removes cells with more than two consecutive spaces in columns B to E.
- Outputs the modified data to column T.
- Supports customization of the sheet name and starting row.

### Usage

1. Open the Google Sheets document containing the data.
2. Click on "Extensions" in the menu bar.
3. Select "Apps Script" to open the script editor.
4. Replace the existing code with the provided script.
5. Customize the `sheetName` variable to match the name of your sheet.
6. Modify the `startRow` variable to specify the starting row for processing.
7. Save the script.
8. Run the `removeCellsContainingExcessiveSpaces` function by clicking the play button or selecting it from the "Select function" dropdown and clicking "Run."
9. The script will process the specified range and remove cells with excessive spaces, outputting the modified data to column T.

### Parameters

The script allows customization through the following parameters:

- `sheetName`: Specify the name of the sheet containing the data.
- `startRow`: Specify the starting row (inclusive) for processing the data.

Ensure that you have the necessary permissions to access and modify the Google Sheets document.

### Notes

- The script assumes that the input range has the same number of rows as the output range. Adjust the output range if necessary.
- The script uses regular expressions to detect and remove excessive spaces (more than two consecutive spaces) in cell values.
- Cells that do not meet the criteria (non-string values or less than three consecutive spaces) remain unmodified.
- The script provides comments within the code for better understanding and customization.

Feel free to utilize this Google Apps Script to clean up your Excel data by removing cells with excessive spaces, ensuring consistency and improved data quality.

For any issues or suggestions, please feel free to open an issue or submit a pull request.

