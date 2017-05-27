import mongoose from 'mongoose';

/*
  Documentation Schema
  */

  const SectionSchema = new mongoose.Schema({
    Owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    SectionHeader: String,
    Content: String,
    DisplayOrder: Number,
    ParentDocument: {type: mongoose.Schema.Types.ObjectId, ref: 'Document'},
    ParentDocumentation: {type: mongoose.Schema.Types.ObjectId, ref: 'Documentation'},
    LastUpdatedDate: Date,
  });

SectionSchema.statics = {};

export default mongoose.model('Section', SectionSchema);
