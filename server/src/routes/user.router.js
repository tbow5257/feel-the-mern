const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.model');

/* Get all Posts */
userRouter.get('/', (req, res, next) => {
    User.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single Post */
// userRouter.get("/:post_id", (req, res, next) => {
//     Post.findById(req.params.post_id, function (err, result) {
//         if(err){
//              res.status(400).send({
//                success: false,
//                error: err.message
//              });
//         }
//         res.status(200).send({
//             success: true,
//             data: result
//         });
//      });
// });


/* Add Single Post */
userRouter.post("/add", (req, res, next) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save({}, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "User created successfully"
      });
  });
});

/* Edit Single Post */
// userRouter.patch("/:post_id", (req, res, next) => {
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

// /* Delete Single Post */
// userRouter.delete("/:post_id", (req, res, next) => {
//   Post.findByIdAndDelete(req.params.post_id, function(err, result){
//       if(err){
//         res.status(400).send({
//           success: false,
//           error: err.message
//         });
//       }
//     res.status(200).send({
//       success: true,
//       data: result,
//       message: "Post deleted successfully"
//     });
//   });
// });

module.exports = userRouter;