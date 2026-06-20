import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const volunteerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^[6-9]\d{9}$/,
    },
    college: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160,
    },
    skills: {
      type: String,
      required: true,
      trim: true,
      maxlength: 600,
    },
    availability: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160,
    },
    motivation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  },
);

export type VolunteerDocument = InferSchemaType<typeof volunteerSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
};

export const Volunteer =
  (mongoose.models.Volunteer as Model<VolunteerDocument> | undefined) ??
  mongoose.model<VolunteerDocument>("Volunteer", volunteerSchema);
