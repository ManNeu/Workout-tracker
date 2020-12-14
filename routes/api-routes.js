const Workout = require("../models/workout");
// const db = require("../models");
// require("mongoose");

module.exports = (app) => {
    app.post("api/workouts", (req, res) => {
        Workout.create({}).then(data => res.json(data))
        console.log(data)
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdandUpdate(req.params.id,
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
    app.get("/api/workouts/range", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });


    app.get("*", (req, res) => {
        res.redirect("/");
    });
}
