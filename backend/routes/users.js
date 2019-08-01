const router = require("express").Router();
let User = require("../models/user.model");

//* the first endpoint that handles http get requests on the /users url path
//* this returns all the users from the DB or catches an error
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error " + err));
});

//* this handles the /users post requests
router.route("/add").post((req, res) => {
  //* assigns the request.body.username
  const username = req.body.username;
  //* creating a new instance of user from the above request
  const newUser = new User({ username });

  //* then saves the newUser to the DB
  newUser
    .save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
