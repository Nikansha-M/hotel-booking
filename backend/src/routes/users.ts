import express, {Request, Response} from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator"; 

const router = express.Router();

// /api/users/register
router.post("/register", [
    check("firstName", "First name is required").isString(),
    check("lastName", "Last name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 8 or more characters is required").isLength({ min:8 }),

], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    try {
        // check if email exists in database
        let user = await User.findOne({
            email: req.body.email,
        });
        if(user) {
            return res.status(400).json({ message: "User already exists" });
        }
        user = new User(req.body);
        await user.save();
        
        const token = jwt.sign(
            { userId: user.id }, 
            process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d",
            }
        );
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            // 1 day converted to miliseconds
            maxAge: 86400000,
        })
        return res.sendStatus(200)        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Oh no, something has gone wrong" })
    }
});

export default router;