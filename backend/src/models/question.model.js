import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quiz_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Quiz', 
    required: true 
  },
  question_text: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 500
  },
  options: [{ 
    type: String, 
    trim: true,
    maxlength: 200 
  }],
  correct_answer: { 
    type: String, 
    required: true,
    trim: true
  },
  time_limit: { 
    type: Number, 
    default: 0,
    min: 0
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model("Question",questionSchema);