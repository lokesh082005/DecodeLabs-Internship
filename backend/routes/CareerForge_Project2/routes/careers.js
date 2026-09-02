const express = require("express");

const router = express.Router();

const careers = [
    {
        id: 1,
        title: "Full Stack Developer",
        category: "Technology",
        description: "Build complete web applications from frontend to backend.",
        skills: ["HTML", "CSS", "JavaScript", "Node.js"]
    },

    {
        id: 2,
        title: "Data Analyst",
        category: "Data",
        description: "Analyze data and generate useful insights.",
        skills: ["Python", "SQL", "Excel"]
    },

    {
        id: 3,
        title: "AI / ML Engineer",
        category: "Artificial Intelligence",
        description: "Build intelligent applications using machine learning.",
        skills: ["Python", "Machine Learning", "Pandas"]
    }
];

router.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        count: careers.length,
        data: careers
    });

});

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const career = careers.find((item) => item.id === id);

    if (!career) {

        return res.status(404).json({
            success: false,
            message: "Career not found"
        });

    }

    res.status(200).json({
        success: true,
        data: career
    });

});

router.post("/", (req, res) => {

    const { title, category, description, skills } = req.body;

    if (!title || !category || !description) {

        return res.status(400).json({
            success: false,
            message: "Title, category and description are required"
        });

    }

    const newCareer = {
        id: careers.length + 1,
        title: title,
        category: category,
        description: description,
        skills: skills || []
    };

    careers.push(newCareer);

    res.status(201).json({
        success: true,
        message: "Career created successfully",
        data: newCareer
    });

});

// UPDATE career
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const career = careers.find((item) => item.id === id);

    if (!career) {
        return res.status(404).json({
            success: false,
            message: "Career not found"
        });
    }

    const {
        title,
        category,
        description,
        skills
    } = req.body;

    if (title) career.title = title;
    if (category) career.category = category;
    if (description) career.description = description;
    if (skills) career.skills = skills;

    res.status(200).json({
        success: true,
        message: "Career updated successfully",
        data: career
    });

});


// DELETE career
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = careers.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Career not found"
        });
    }

    const deletedCareer = careers.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Career deleted successfully",
        data: deletedCareer
    });

});

module.exports = router;
