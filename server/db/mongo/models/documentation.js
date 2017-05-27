import mongoose from 'mongoose';

/*
  Documentation Schema
  */

  const DocumentationSchema = new mongoose.Schema({
    Owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Title: String,
    Description: String,
    Avatar: {data: Buffer, contentType: String},
    Documents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Document'}],
    SubDocuments: [{type: mongoose.Schema.Types.ObjectId, ref: 'SubDocument'}],
    AllowEveryone: Boolean,
    AllowSpecificUsers: Boolean,
    AllowNoOne: Boolean,
    DisplayOrder: Number,
    AllowedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    AllowOrganization: [{type: mongoose.Schema.Types.ObjectId, ref: 'Organization'}],
    LastUpdatedDate: Date,
  });

DocumentationSchema.statics = {};

export default mongoose.model('Documentation', DocumentationSchema);
