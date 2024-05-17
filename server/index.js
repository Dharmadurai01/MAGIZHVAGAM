// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const dotenv = require("dotenv").config();
// const cors = require("cors");

// const authRoutes = require("./routes/auth.js")
// const listingRoutes = require("./routes/listing.js")
// const bookingRoutes = require("./routes/booking.js")
// const userRoutes = require("./routes/user.js")

// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));

// /* ROUTES */
// app.use("/auth", authRoutes)
// app.use("/properties", listingRoutes)
// app.use("/bookings", bookingRoutes)
// app.use("/users", userRoutes)

// /* MONGOOSE SETUP */
// const PORT = 3001;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     dbName: "Dream_Nest",
//     serverSelectionTimeoutMS: 5000,  
//     socketTimeoutMS: 45000       
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//   })
//   .catch((err) => console.log(`${err} did not connect`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

/* MONGOOSE SETUP */
const MONGO_URL = 'mongodb+srv://dharmadurairama03:86CfzVBigs49UDXv@cluster0.jjwupgj.mongodb.net/Dream_Nest?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 3001;

mongoose
  .connect(MONGO_URL, {
    dbName: "Dream_Nest",
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });
