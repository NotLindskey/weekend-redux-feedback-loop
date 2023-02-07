const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// how are you feeling //
const feelingsPage = require('./router/feelingsPage.router');
app.use('/feelingsPage', feelingsPage);

// how well are you understanding the content //
// app.use("/understanding");
const understandingPage = require('./router/feelingsPage.router');
app.use('/feelingsPage', feelingsPage);

// how well are you being supported //
// app.use("/supported");
const SupportedPage = require('./router/feelingsPage.router');
app.use('/feelingsPage', feelingsPage);

// any comments you want to leave //
// app.use("/comments");
const CommentsPage = require('./router/feelingsPage.router');
app.use('/feelingsPage', feelingsPage);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
	console.log('Listening on port: ', PORT);
});

// feeling
// understanding
// supported
// comments
