# Daily Attendance Google Apps Script

This Google Apps Script automates the process of recording daily attendance in a Google Sheets document. Users can submit their in-time and out-time through a web interface.

## Getting Started

To use this script, follow the steps below:

1. **Google Sheets Setup:**
   - Create a Google Sheets document with the required columns (e.g., ID, In Time, Out Time).

2. **Google Apps Script:**
   - Copy and paste the contents of `DailyAttendance.gs` into the Google Apps Script editor.
   - Save the script.

3. **Deploy as Web App:**
   - In the Google Apps Script editor, go to `Publish > Deploy as web app...`
   - Choose a version and set access to "Anyone, even anonymous."
   - Click "Deploy."

4. **Get the Web App URL:**
   - After deploying, you'll get a URL for the web app. Use this URL in your MIT App Inventor project.

5. **MIT App Inventor:**
   - In your MIT App Inventor project, set up the necessary UI components (text boxes, buttons).
   - Use the `Web` component to make POST requests to the web app URL.

## Usage

- Users can input their attendance details using the MIT App Inventor app.
- The script updates the Google Sheets document with the provided information.

## Acknowledgments

- Inspired by the need for a simple daily attendance system.
