const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/appointmentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  doctor: String,
  date: String,
  time: String,
  message: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.post('/api/appointments', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).send('Appointment saved!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    console.log('📥 Request received:', req.body);
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send('Contact message saved!');
  } catch (err) {
    console.error('❌ Error in contact route:',err);
    res.status(500).send('Server error');
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
