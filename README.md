# Daily Attendance System

This project automates the process of recording daily attendance in a Google Sheets document. Teachers or users can submit their in-time and out-time through a web interface, and the attendance details are updated in the Google Sheets.

## Google Apps Script (JavaScript Code)

### Usage

1. **Google Sheets Setup:**
   - Create a Google Sheets document with the necessary columns (e.g., ID, In Time, Out Time).

2. **Google Apps Script:**
   - Copy and paste the contents of `DailyAttendance.gs` into the Google Apps Script editor.
   - Save the script.

3. **Deploy as Web App:**
   - In the Google Apps Script editor, go to `Publish > Deploy as web app...`
   - Choose a version and set access to "Anyone, even anonymous."
   - Click "Deploy."

4. **Get the Web App URL:**
   - After deploying, you'll get a URL for the web app. Use this URL in your MIT App Inventor project.

### MIT App Inventor Project

1. **Import the Project:**
   - Import the `AttendanceApp.aia` file into your MIT App Inventor.

2. **UI Components:**
   - Set up the necessary UI components (e.g., text boxes, buttons).

3. **Web Component:**
   - Use the `Web` component to make POST requests to the web app URL obtained from the Google Apps Script.

### Usage

- Users can input their attendance details using the MIT App Inventor app.
- The Google Apps Script updates the Google Sheets document with the provided information.

## Usage

- Users can input their attendance details using the MIT App Inventor app.
- The script updates the Google Sheets document with the provided information.

## Acknowledgments

- Inspired by the need for a simple daily attendance system.
