const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const products = require("./routes/api/products");
const bookings = require("./routes/api/bookings");
const faqs = require("./routes/api/faqs");
const drinks = require("./routes/api/drinks");
const aboutus = require("./routes/api/aboutus");
const packages = require("./routes/api/packages")
require('./config/passport')(passport);
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile } = require('./s3')

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/bookings", bookings);
app.use("/api/faqs", faqs);
app.use("/api/drinks", drinks);
app.use("/api/aboutus", aboutus);
app.use("/api/packages", packages);

app.post('/images', upload.single('image'), async (req,res) => {
  const file = req.file
  console.log(file)
  const result = await uploadFile(file)
  console.log(result)
  const desc = req.body.description
  console.log(desc)
  res.send('goody goody')
})

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

