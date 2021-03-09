import {Router} from 'express';
const router  =  Router();

import * as productsController from '../controllers/products.controller'

router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:id', productsController.getProductById);
router.put('/:id', productsController.updateProductById);
router.delete('/:id', productsController.deleteProductById);

export default router;