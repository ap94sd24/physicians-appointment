const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect cloud database
connectDB();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running...");
});

//Define routes here
app.use("/api/physicians", require("./routes/api/physicians"));
app.use("/api/appointments", require("./routes/api/appointments"));
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
