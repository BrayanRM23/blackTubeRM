import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;


