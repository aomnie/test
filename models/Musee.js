const mongoose = require('mongoose')



const museeSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      unique: true,
    },

    region: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
      unique: true,
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },

    collectionDescription: [],
    collectionImage: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = Musee = mongoose.model("musee", museeSchema);
