const mongoose = require('mongoose')
mongoose
  .connect("mongodb://localhost:27017/Dynamic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfful");
  })
  .catch((e) => {
    console.log(e);
  });