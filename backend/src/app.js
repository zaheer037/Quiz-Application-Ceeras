import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
import Question from './models/question.model.js';
import Quiz from './models/quiz.model.js';
import Result from './models/results.model.js';
import User from './models/users.models.js';

app.use(express.json());

// User Routes
app.post('/users/signup', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/users/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }
        res.send({ message: 'Sign-in successful' });
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'email', 'password', 'role'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/users/:id', async (req, res) => {
    

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/admin/signup', async (req, res) => {
    const admin = new Admin(req.body);
    try {
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/admin/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin || admin.password !== password) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }
        res.send({ message: 'Sign-in successful' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Question Routes
app.post('/questions', async (req, res) => {
    const question = new Question(req.body);
    try {
        await question.save();
        res.status(201).send(question);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.send(questions);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/questions/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['quiz_id', 'question_text', 'options', 'correct_answer', 'time_limit'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!question) {
            return res.status(404).send();
        }
        res.send(question);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/questions/:id', async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).send();
        }
        res.send(question);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Quiz Routes
app.post('/quizzes', async (req, res) => {
    const quiz = new Quiz(req.body);
    try {
        await quiz.save();
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.send(quizzes);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/quizzes/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'created_by', 'questions', 'time_limit', 'shareable_link'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!quiz) {
            return res.status(404).send();
        }
        res.send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/quizzes/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) {
            return res.status(404).send();
        }
        res.send(quiz);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Result Routes
app.post('/results', async (req, res) => {
    const result = new Result(req.body);
    try {
        await result.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/results', async (req, res) => {
    try {
        const results = await Result.find();
        res.send(results);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/results/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['user_id', 'quiz_id', 'score', 'completion_time', 'rank'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const result = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!result) {
            return res.status(404).send();
        }
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/results/:id', async (req, res) => {
    try {
        const result = await Result.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).send();
        }
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});


dotenv.config(); 


let port = process.env.PORT || 8080;

// MongoDB Connection (Ensure MONGO_URI is in your .env file)
mongoose.connect(process.env.MONGO_URL, {

})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


//app listening
app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
});
