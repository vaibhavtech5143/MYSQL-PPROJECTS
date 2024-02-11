import  express  from "express";
import {loginController,registerController,logoutController} from "../controllers/authController.js"


const router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/logout',logoutController)


export default router;
