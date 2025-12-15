const express = require('express');
const app = express();
let port = 21000;
app.get({
    success: true,
    message: "Server is running successfully",
});
app.listen(port, async () => {
    console.log(Server is running on port ${port});
});