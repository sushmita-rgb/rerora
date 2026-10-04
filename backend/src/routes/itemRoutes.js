import express from 'express';
import { getItems, createItem, deleteItem } from '../controllers/itemController.js';

const router = express.Router();

router.route('/items')
  .get(getItems)
  .post(createItem);

router.route('/items/:id')
  .delete(deleteItem);

export default router;
