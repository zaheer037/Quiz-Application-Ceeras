import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100
  },
  description: { 
    type: String, 
    trim: true,
    maxlength: 500
  },
  created_by: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  questions: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question' 
  }],
  time_limit: { 
    type: Number, 
    default: 0,
    min: 0
  },
  shareable_link: { 
    type: String,
    trim: true
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model("Quiz",quizSchema);