import mongoose from 'mongoose';

/*
  Documentation Schema
  */

  const DocumentSchema = new mongoose.Schema({
    Owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Title: String,
    Description: String,
    DisplayOrder: Number,
    Sections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Section'}],
    ParentSubDocuments: {type: mongoose.Schema.Types.ObjectId, ref: 'SubDocument'},
    ParentDocumentation: {type: mongoose.Schema.Types.ObjectId, ref: 'Documentation'},
    LastUpdatedDate: Date,
  });

DocumentSchema.statics = {};

export default mongoose.model('Document', DocumentSchema);
