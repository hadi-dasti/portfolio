import { Router } from 'express';
const router: Router = Router();


// handel controller for client comment
import { getClientsCommentController } from '../../../controller/clientsComment.Controller';

router.get('/viewClient', getClientsCommentController);





export default router;