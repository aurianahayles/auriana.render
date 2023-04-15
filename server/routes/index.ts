/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
import express from 'express';
const router = express.Router();

import {
  DisplayAboutUsPage,
  DisplayContactPage,
  DisplayHomePage,
  DisplayProductsPage,
  DisplayServicesPage
} from "../controllers";


router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/about', DisplayAboutUsPage);
router.get('/products', DisplayProductsPage);
router.get('/services', DisplayServicesPage);
router.get('/contact', DisplayContactPage);

export default router;
