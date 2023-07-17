# Excel Data Border App - Google Apps Script

This Google Apps Script provides a solution to add borders to a specific range in an Excel sheet. It allows you to easily apply top, left, bottom, and right borders to each row within the specified range.

## Functionality

The script performs the following tasks:

- Adds top, left, bottom, and right borders to each row within the specified range.
- Supports customization of the sheet name, start row, end row, column start, and column end.

## Usage

1. Open your Google Sheets document.
2. Click on "Extensions" in the menu bar.
3. Select "Apps Script" to open the script editor.
4. Replace the existing code with the provided script.
5. Customize the `sheetName`, `startRow`, `endRow`, `columnStart`, and `columnEnd` variables as per your desired range.
6. Save the script.
7. Run the `addBordersToRange` function by clicking on the play button or by selecting "addBordersToRange" from the "Select function" dropdown and clicking "Run."
8. The script will add borders to each row within the specified range.

Please note that the range should be entered in A1 notation. For example, to add borders to the range "B11:E74", set `columnStart = 2`, `columnEnd = 5`, `startRow = 11`, and `endRow = 74`.

## Parameters

The script allows customization through the following parameters:

- `sheetName`: Specify the name of the sheet where the borders will be applied.
- `startRow`: Specify the starting row (inclusive) within the sheet to apply borders.
- `endRow`: Specify the ending row (inclusive) within the sheet to apply borders.
- `columnStart`: Specify the starting column (in A1 notation) within the sheet to apply borders.
- `columnEnd`: Specify the ending column (in A1 notation) within the sheet to apply borders.

Ensure that you have the necessary permissions to access and modify the Google Sheets document.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to utilize this Google Apps Script to easily add borders to a specific range in your Excel data, improving the visual presentation and organization of your sheets.

For any issues or suggestions, please feel free to open an issue or submit a pull request.

