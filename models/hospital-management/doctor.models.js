import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: Number,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
      required: true,
    },
    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: trues }
);

export const Doector = mongoose.models('Doctor', doctorSchema);
