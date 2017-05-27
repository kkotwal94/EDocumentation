import mongoose from 'mongoose';

/*
  Documentation Schema
  */

  const OrganizationSchema = new mongoose.Schema({
    Owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Title: String,
    Description: String,
    DisplayOrder: Number,
    Avatar: {data: Buffer, contentType: String},
    Contact: String,
    Admins: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    Documentations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Documentation'}],
    Users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    LastUpdatedDate: Date,
  });

OrganizationSchema.statics = {};

export default mongoose.model('Organization', OrganizationSchema);
