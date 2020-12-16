const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter the exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the exercise name"
            },
            duration: {
                type: Number,
                required: "Enter duration for exercise in minutes"
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }

    });
