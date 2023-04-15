"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contact_list_1 = require("../controllers/contact-list");
function AuthGuard() {
}
router.get('/contact-list', AuthGuard, contact_list_1.DisplayContactListPage);
router.get('/add', AuthGuard, contact_list_1.DisplayAddPage);
router.post('/add', AuthGuard, contact_list_1.ProcessingAddPage);
router.get('/delete', AuthGuard, contact_list_1.DisplayEditPage);
router.post('/edit', AuthGuard, contact_list_1.ProcessingEditPage);
router.post('/delete', AuthGuard, contact_list_1.ProcessingDeletePage);
exports.default = router;
//# sourceMappingURL=contact-list.js.map