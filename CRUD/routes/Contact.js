const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact
      .save()
      .then((savedContact) => {
        console.log(savedContact);
        res.status(201).json({ msg: "Contact succesfully saved" });
      })
      .catch((error) => {
        console.log(error);

        if (error.code === 11000 && error.keyPattern && error.keyPattern.emailAdress) {
          res.status(500).json({ msg: "Email adress aleready in use " });
        } else {
          res.status(500).json({ msg: "Unable to create new contact" });
        }
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to save new contact" });
  }
});

router.get("/contact", async (req, res) => {
  try {
    Contact.find()
      .then((contacts) => {
        console.log(contacts);
        res.status(200).json({ contacts: contacts });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Unable to get contacts" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get contacts" });
  }
});
module.exports = router;
