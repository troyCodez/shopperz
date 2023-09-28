const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');

const axios = require('axios');

const cloudinary = require('cloudinary').v2

const nodemailer = require("nodemailer");

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));