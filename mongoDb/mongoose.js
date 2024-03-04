const mongoose = require("mongoose");
const conectionString =
  "mongodb+srv://kamienieckifranek:123@cluster0.f2g4c4y.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(conectionString);

async function checkSave() {
  var carSchema = new mongoose.Schema({
    make: {
      type: String,
      unique: true,
    },
    model: String,
    power: {
      type: Number,
      min: [1, "samochod musi miec przynajmniej jednego konia mechanicznego"],
      max: [1000, "Twoj samochod jest za mocny"],
    },
  });

  var Car = mongoose.model("Car", carSchema);

  var bmw = new Car({ make: "BMW", model: "e39", power: 193 });

  var audi = new Car({ make: "Audi", model: "A6", power: 1500 });

  var bmwValidationResults = bmw.validateSync();
  var audiValidationResults = audi.validateSync();
  //   console.log(bmwValidationResults);
  //   console.log(audiValidationResults);

  if (bmwValidationResults === undefined) {
    const bmwCar = await bmw.save();
    console.log(bmwCar._id);
  }

  if (audiValidationResults === undefined) {
    const audiCar = await audi.save();
    console.log(audiCar._id);
  }
}

checkSave();
