const app = require("./server");
//listen to port 3000 by default

app.listen(process.env.PORT || 3000);

module.exports = app;
