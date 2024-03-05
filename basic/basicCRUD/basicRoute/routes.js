const express = require("express");
const router = express.Router();
const verbSchema = require("../basicModel/norms");

router.get("/verbs", async (req, res) => {
  try {
    verbSchema
      .find()
      .then((verbs) => {
        console.log(verbs);
        res.status(200).json({ verbs });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Unable to get verbs" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get verbs" });
  }
});
router.post("/verbs", async (req, res) => {
  try {
    const newVerb = new verbSchema(req.body);
    await newVerb
      .save()
      .then((savedVerb) => {
        console.log(savedVerb);
        res.status(201).json({ msg: "verb succesfully saved" });
      })
      .catch((error) => {
        console.log(error);

        res.status(500).json({ msg: "Unable to create new verb" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to save new verb" });
  }
});

module.exports = router;
