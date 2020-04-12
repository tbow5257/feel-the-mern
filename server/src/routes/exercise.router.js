const express = require('express');
const exerciseRouter = express.Router();
const Exercise = require('../models/exercise.model');

/* Get all Posts */
exerciseRouter.get('/', (req, res, next) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
});

/* Get Single Post */
exerciseRouter.get("/:id", (req, res, next) => {
    Exercise.findById(req.params.id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});


/* Add Single Exercise */
exerciseRouter.post("/add", (req, res, next) => {
    const { username, description } = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error:', err));
});

/* Add Single Post */
exerciseRouter.post("/update/:id", (req, res, next) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error:', err));
        })
        .catch(err => res.status(400).json("Error", err));
});

/* Edit Single Post */
// exerciseRouter.patch("/:post_id", (req, res, next) => {
//   let fieldsToUpdate = req.body;
//   Post.findByIdAndUpdate(req.params.post_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
//       if(err){
//           res.status(400).send({
//              success: false,
//             error: err.message
//             });
//       }
//       res.status(200).send({
//         success: true,
//         data: result,
//         message: "Post updated successfully"
//         });
//   });
// });

// /* Delete Single Exercise */
exerciseRouter.delete("/:id", (req, res, next) => {
  Exercise.findByIdAndDelete(req.params.id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "Exercise deleted successfully"
    });
  });
});

module.exports = exerciseRouter;