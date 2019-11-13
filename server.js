const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/careseekers", require("./routes/api/careseekers"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/auth2", require("./routes/api/auth2"));
app.use("/api/profile-caregiver", require("./routes/api/profileCaregiver"));
app.use("/api/profile-careseeker", require("./routes/api/profileCareseeker"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
