import express from 'express';
import { produtoIndex } from './controllers/produtoController.js';
const router = express.Router()

// define the home page route
router.get('/produtos', produtoIndex)

export default router

