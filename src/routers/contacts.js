import { Router } from "express";
import { createContactController, deleteContactController, getContactByIdController, getContactsController, upsertContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', ctrlWrapper(createContactController));
router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
export default router;
