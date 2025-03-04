import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  quiz_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Quiz', 
    required: true 
  },
  score: { 
    type: Number, 
    required: true,
    min: 0,
    max: 100
  },
  completion_time: { 
    type: Number, 
    required: true,
    min: 0
  },
  rank: { 
    type: Number,
    min: 1
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model("Result",resultSchema);