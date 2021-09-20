const mongoose = require('../database');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schama({
    name: {
        type: String,
        require: true, // Obrigatório
    },
    photo: {
        type: String,
        require: false, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa

    },
    birthday: {
        type: Date,
        require: true, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa
        
    },
    office: {
        type: String,
        require: true, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa
        
    },
    specialty: {
        type: String,
        require: true, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa
        
    },
    cpf: {
        type: String,
        require: true, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa
        select: false,  // omissão
        
    },
    whatsapp: {
        type: String,
        require: true, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa
        
    },
    linkedIn: {
        type: String,
        require: false, // Obrigatório
        unique: true,  // unica 
        lowercase: true, // caixa baixa
        
    },
    project: {
        type: [String],
        require: false, // Obrigatório
        unique: true,  // unica 
        lowercase: true,  // caixa baixa
        
    },
    email: {
        type: String,
        unique: true, // unica
        required: true, // Obrigatório
        lowercase: true, // Caixa Baixa
    },
    password: {
        type: String,
        required: true, // Obrigatório
        select: false, // Omissão da senha 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;