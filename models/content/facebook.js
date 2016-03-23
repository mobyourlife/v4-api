// Content schema for Facebook

module.exports = {
  // Content owner
  fanpageId: { type: String, required: true },

  // Content type
  contentType: {
    type: String,
    enum: ['post', 'album', 'photo', 'video']
  },

  // Date events
  createdTime: Date,
  updatedTime: Date,
  syncedTime: Date,

  // Status
  isPublished: Boolean, // still scheduled to be published
  isHidden: Boolean, // marked as hidden
  scheduledPublishTime: Date,

  // Post
  post: {
    _id: { type: String, required: true },

    // Post message
    message: String,

    // Status
    postType: {
      type: String,
      enum: ['link', 'status', 'photo', 'video', 'offer']
    },
    statusType: String, // type of update status
    story: String, // story description, not written by users

    // Links and related info
    link: String,
    name: String,
    caption: String,
    description: String,

    // Object attached to the post
    object_id: String,
    picture: String
  },

  // Album
  album: {
    _id: { type: String, required: true },

    // Album info
    name: String,
    description: String,
    location: String,

    coverPhoto: {
      _id: { type: String, required: true },
      createdTime: Date,
      name: String
    }

    // Status
    albumType: {
      type: String,
      enum: ['app', 'cover', 'profile', 'mobile', 'wall', 'normal', 'album']
    },
    count: Number
  },

  // Photo
  photo: {
    _id: { type: String, required: true },

    // Photo info
    albumId: String,
    name: String,

    // Dimensions
    width: Number,
    height: Number,
    picture: String, // 100px wide photo

    // All available sizes of this photo
    images: [
      {
        source: String,
        width: Number,
        height: Number
      }
    ]
  },

  // Video
  video: {
    _id: { type: String, required: true },

    // Video info
    title: String,
    description: String,
    picture: String,
    length: Number,
    raw_source: String,

    // Embedding
    embeddable: Boolean,
    embed_html: String,

    // All available formats of this video
    formats: [
      {
        picture: String,
        embed_html: String,
        filter: String,
        width: Number,
        height: Number
      }
    ]
  }
}
