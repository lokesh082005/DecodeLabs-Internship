const express = require("express");

const router = express.Router();

const applications = [];

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: applications.length,
        data: applications
    });
});

// GET application by ID
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const application = applications.find(app => app.id === id);

    if (!application) {
        return res.status(404).json({
            success: false,
            message: "Application not found"
        });
    }

    res.status(200).json({
        success: true,
        data: application
    });
});

router.post("/", (req, res) => {

    const {
        studentName,
        email,
        internshipId,
        resume
    } = req.body;

    if (!studentName || !email || !internshipId) {
        return res.status(400).json({
            success: false,
            message: "Student name, email and internship ID are required"
        });
    }

    const newApplication = {
        id: applications.length + 1,
        studentName: studentName,
        email: email,
        internshipId: Number(internshipId),
        resume: resume || "Not provided",
        status: "Applied"
    };

    applications.push(newApplication);

    res.status(201).json({
        success: true,
        message: "Application submitted successfully",
        data: newApplication
    });

});

// UPDATE application
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const application = applications.find(app => app.id === id);

    if (!application) {
        return res.status(404).json({
            success: false,
            message: "Application not found"
        });
    }

    const {
        studentName,
        email,
        internshipId,
        resume,
        status
    } = req.body;

    if (studentName) application.studentName = studentName;
    if (email) application.email = email;
    if (internshipId) application.internshipId = Number(internshipId);
    if (resume) application.resume = resume;
    if (status) application.status = status;

    res.status(200).json({
        success: true,
        message: "Application updated successfully",
        data: application
    });

});

// DELETE application
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = applications.findIndex(app => app.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Application not found"
        });
    }

    const deletedApplication = applications.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Application deleted successfully",
        data: deletedApplication
    });

});

module.exports = router;