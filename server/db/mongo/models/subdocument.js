import mongoose from 'mongoose';

/*
  Documentation Schema
  */

  const SubDocumentSchema = new mongoose.Schema({
    Owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Title: String,
    Description: String,
    DisplayOrder: Number,
    Documents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Document'}],
    SubDocuments: [{type: mongoose.Schema.Types.ObjectId, ref: 'SubDocument'}],
    ParentDocumentation: {type: mongoose.Schema.Types.ObjectId, ref: 'Documentation'},
    ParentSubDocumentation: {type: mongoose.Schema.Types.ObjectId, ref: 'SubDocument'},
    LastUpdatedDate: Date,
  });

SubDocumentSchema.statics = {};

export default mongoose.model('SubDocument', SubDocumentSchema);
