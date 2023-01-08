const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/student");
    console.log("Connecting to Mongo");
    // const s1 = new Studentmodel({ name: "adarsh", age: 25, salary: 28000 });
    // await s1.save();
    // console.log("inserted");

    const c1 = await Studentmodel.deleteOne({ name: "pappu kumar singh" });
    console.log(c1);
  } catch (error) {
    console.log("Error connecting to Mongo");
  }
};

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  salary: { type: Number, required: true },
});

Studentmodel = mongoose.model("Student", studentSchema);

connectDB();
