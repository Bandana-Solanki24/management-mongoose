import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: trues });

export const MedicalRecord = mongoose.models(
  'MedicalRecord',
  medicalRecordSchema
);
