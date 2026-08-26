const { Router } = require('express');
const authRouter = Router();
authRouter.post('/register');
authRouter.post('/login');
authRouter.post('/logout');
authRouter.post('/send-otp');
authRouter.post('/verify-otp');
authRouter.post('/reset-password');
module.exports = authRouter;