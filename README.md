# Daily Attendance System

This project automates the process of recording daily attendance in a Google Sheets document. Teachers or users can submit their in-time and out-time through a web interface, and the attendance details are updated in the Google Sheets.

## Google Apps Script (JavaScript Code)

### Usage

#### Google Sheets Setup:

1. Create a Google Sheets document with the necessary columns (e.g., ID, In Time, Out Time).

#### Google Apps Script:

2. Copy and paste the contents of [DailyAttendance.gs](DailyAttendance.gs) into the Google Apps Script editor.
3. Save the script.

#### Deploy as Web App:

4. In the Google Apps Script editor, go to **Publish > Deploy as web app...**
5. Choose a version and set access to "Anyone, even anonymous."
6. Click "Deploy."

#### Get the Web App URL:

7. After deploying, you'll get a URL for the web app. Use this URL in your MIT App Inventor project.

## MIT App Inventor Project

### Import the Project:

1. Import the [AttendanceApp.aia](AttendanceApp.aia) file into your MIT App Inventor.

### UI Components:

2. Set up the necessary UI components (e.g., text boxes, buttons).

### Web Component:

3. Use the Web component to make POST requests to the web app URL obtained from the Google Apps Script.

### Usage:

- Users can input their attendance details using the MIT App Inventor app.
- The Google Apps Script updates the Google Sheets document with the provided information.

## Modified Version - Teacher Attendance App

Check the modified version in this [repository link](https://github.com/Sudhanshu-Ambastha/Attendance-app-for-Teacher).

## Related Repositories

- [Send-data-to-google-sheets-creating-List-with-MIT-app-inventor](https://github.com/Sudhanshu-Ambastha/Send-data-to-google-sheets-creating-List-with-MIT-app-inventor): Visit this repository for creating a list with MIT App Inventor and sending data to Google Sheets.

### Acknowledgments

Inspired by the need for a simple daily attendance system.
