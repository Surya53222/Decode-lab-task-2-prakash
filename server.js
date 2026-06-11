const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// GET Endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend API is running successfully"
    });
});

// POST Endpoint
app.post("/compute", (req, res) => {
    const { num1, num2 } = req.body;

    // Validation
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({
            success: false,
            message: "num1 and num2 are required"
        });
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return res.status(400).json({
            success: false,
            message: "num1 and num2 must be numbers"
        });
    }

    const result = num1 + num2;

    res.status(200).json({
        success: true,
        num1,
        num2,
        result
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});