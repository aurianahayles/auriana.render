/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
import express from 'express';
const router = express.Router();
import {
    DisplayAddPage,
    DisplayContactListPage,
    DisplayEditPage,
    ProcessingAddPage,
    ProcessingDeletePage,
    ProcessingEditPage
} from "../controllers/contact-list";


function AuthGuard() {

}

/* GET home page. */
router.get('/contact-list', AuthGuard, DisplayContactListPage);


router.get('/add', AuthGuard, DisplayAddPage);

router.post('/add', AuthGuard, ProcessingAddPage);

router.get('/delete', AuthGuard, DisplayEditPage);

router.post('/edit', AuthGuard, ProcessingEditPage);

router.post('/delete', AuthGuard, ProcessingDeletePage);

export default router;
