# Google Sheets Border Adder for Annual Investment Program

## Description
Google Sheets Border Adder is a simple Google Apps Script that allows you to add borders to a specific range of cells in a Google Sheets spreadsheet. The script provides an interactive way to select the range and customize the borders.

## Features
- Automatically adds borders to a range of cells in Google Sheets.
- Allows customization of the starting and ending rows.
- Supports both automatic bordering of selected row or manual entry of the end row.
- Easy-to-use user interface using Google Apps Script UI.

## How to Use
1. Open your Google Sheets spreadsheet.
2. Go to "Extensions" > "Apps Script" to open the Google Apps Script editor.
3. Copy and paste the code from [`Code.js`](Code.js) into the script editor.
4. Save the script, and give it a name (e.g., "BorderAdder").
5. Close the script editor.
6. Refresh the spreadsheet.

## Usage
To use the script, follow these steps:

1. Select the row where you want to start applying borders.
2. Go to "Add-ons" > "BorderAdder" > "Add Borders to Selected Row" from the Google Sheets menu.
3. The script will prompt you to add borders to the selected row. If you click "Yes," the borders will be added to the selected row. If you click "No," it will prompt you to input the ending row number to apply the borders.

## Example
Assume you want to add borders to rows 11 to 20 for columns B to E (B11:E20) in the sheet named "DataSheet." You can do this by following these steps:

1. Open the "DataSheet" in your Google Sheets.
2. Select any cell in row 11.
3. Go to "Add-ons" > "BorderAdder" > "Add Borders to Selected Row" from the Google Sheets menu.
4. The script will ask if you want to add borders to Row 11 in "DataSheet." Click "No."
5. An input box will appear asking you to enter the ending row number. Enter "20" and click "OK."
6. The script will add borders to the range B11:E20.

## Note
- This script works for the currently active sheet in your Google Sheets.
- The starting row is fixed at 11, but you can customize this value in the script if needed.

## Author
- [Julian Lugod](https://github.com/akiraaisha)

## License
This project is licensed under the [MIT License](LICENSE).

