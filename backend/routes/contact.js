const express = require("express");
const {
  addContact,
  getAllContacts,
  deleteContact,
  updateContact,
  getOneContact,
} = require("../Controllers/controllersContact");
const Contact = require("../models/Contact");
const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send("this is a test");
// });

// add new contact
// method post
// req.body

router.post("/addContact", addContact);

// get all contacts
// method get

router.get("/allContacts", getAllContacts);

// delete contact
// method delete
// req.params

router.delete("/deleteContact/:id", deleteContact);

// update contact
//method put
// req.params && req.body

router.put("/updateContact/:id", updateContact);

// get one contact
// method get
// req.params

router.get("/getOneContact/:id", getOneContact);

module.exports = router;
