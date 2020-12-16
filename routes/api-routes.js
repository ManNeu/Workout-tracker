const Workout = require("../models/workout");
// const db = require("../models");
// require("mongoose");
const router = require("express").Router();


router.post("api/workouts", (req, res) => {
    Workout.create({}).then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        {
            $push: { exercises: req.body }
        },
        { new: true, runValidators: true })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.json(err)
        });
});
router.get("/api/workouts", function (req, res) {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    // Workout.create({})
    //     .then(data => res.json(data))
    //     .catch(err => {
    //         console.log(err);
    //         res.json(err);
    //     });
});






module.exports = router;
