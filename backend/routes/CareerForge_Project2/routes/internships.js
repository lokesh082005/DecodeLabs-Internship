const express = require("express");

const router = express.Router();

const internships = [
    {
        id: 1,
        title: "Frontend Development Intern",
        company: "TechNova Solutions",
        location: "Chennai",
        mode: "Remote",
        duration: "3 Months",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        id: 2,
        title: "Data Analytics Intern",
        company: "DataSphere Technologies",
        location: "Bangalore",
        mode: "Hybrid",
        duration: "6 Months",
        skills: ["Python", "SQL", "Excel"]
    },

    {
        id: 3,
        title: "AI / ML Intern",
        company: "InnovateAI Labs",
        location: "Bangalore",
        mode: "On-site",
        duration: "6 Months",
        skills: ["Python", "Machine Learning", "Pandas"]
    }
];

router.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        count: internships.length,
        data: internships
    });

});

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const internship = internships.find(item => item.id === id);

    if (!internship) {
        return res.status(404).json({
            success: false,
            message: "Internship not found"
        });
    }

    res.status(200).json({
        success: true,
        data: internship
    });

});

router.post("/", (req, res) => {

    const {
        title,
        company,
        location,
        mode,
        duration,
        skills
    } = req.body;

    if (!title || !company || !location || !mode || !duration) {
        return res.status(400).json({
            success: false,
            message: "Title, company, location, mode and duration are required"
        });
    }

    const newInternship = {
        id: internships.length + 1,
        title: title,
        company: company,
        location: location,
        mode: mode,
        duration: duration,
        skills: skills || []
    };

    internships.push(newInternship);

    res.status(201).json({
        success: true,
        message: "Internship created successfully",
        data: newInternship
    });

});

module.exports = router;
