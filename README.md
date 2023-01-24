<h1>Checkit</h1>
This is a Google Chrome extension that checks if the currently visisted webpage has been posted to reddit.  This extension works best with news articles.
<br>
<h2>Installation</h2>
<ol type="1">
  <li>Clone the repository by running git clone https://github.com/ivanday/checkit.git in your terminal.</li>
  <li>Navigate to the reposity, then run "npm install" then "npm run build"</li>
  <li>In the cloned repository, navigate to the build folder.</li>
  <li>Open the Google Chrome browser and navigate to the Developer Dashboard</li>
  <li>Enable the developer mode by clicking the toggle switch in the top right corner of the page.</li>
  <li>Click on the "Load Unpacked" button and select the "build" folder from the cloned repository.</li>
  <li>Once the extension is installed, you will see a new icon appear in the top right corner of your browser.</li>
</ol>
<h2>Usage</h2>
<ol type="1">
  <li>Browse to any webpage.</li>
  <li>Click on the extension icon in the top right corner of your browser.</li>
  <li>The extension will check your currently visited URL and query reddit for any posts using that link</li>
  <li>Click on the title of the post to be redirected to reddit, or click "show comments" to see the top parent-level comments</li>
</ol>

<h2>Note</h2>
<ul>
  <li>If you want to disable this extension just right click on the icon and select "Remove from chrome".</li>
  <li>Before using the extension, you must run the server using node server/server.js in your terminal from the cloned repository.</li>
</ul>

<h2>Feedback</h2>
If you have any feedback or encounter any issues, please let us know by creating an issue on our GitHub repository

Thank you for using Reddit Link Checker!
