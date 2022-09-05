

const mongoose =require('mongoose')
  const mongoAtlasUri=' mongodb+srv://sam:RqYlpltjT2qesAkC@cluster0.m0bug.mongodb.net/?retryWrites=true&w=majority'

  
  try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true,
         useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }