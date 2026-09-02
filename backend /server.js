const express = require("express");
const careersRouter = require("./routes/careers");
const internshipsRouter = require("./routes/internships");
const applicationsRouter = require("./routes/applications");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use("/api/careers", careersRouter);
app.use("/api/applications", applicationsRouter);
app.use("/api/internships", internshipsRouter);

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "CareerForge API is running"
    });
});

app.listen(PORT, () => {
    console.log(`CareerForge API running on http://localhost:${PORT}`);
});

