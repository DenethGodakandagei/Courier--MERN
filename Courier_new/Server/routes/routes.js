import express from "express";
import { Domestic, International, Admin ,Contacts} from "../Module/module.js";
import Jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import bcrypt from 'bcrypt' 
const router = express.Router();
/* save oder */
router.post("/", async (req, res) => {
  try {
    const newoder = {
      weight: req.body.weight,
      price: req.body.price,
      sendername: req.body.sendername,
      sendernumber: req.body.sendernumber,
      senderaddress: req.body.senderaddress,
      receivername: req.body.receivername,
      receivernumber: req.body.receivernumber,
      receiveraddress: req.body.receiveraddress,
    };
    const oder = await Domestic.create(newoder);
    const createdId = oder.id;

    return res.status(201).send({ id: createdId, ...oder.toJSON() });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.massage });
  }
});

router.post("/international", async (req, res) => {
  try {
    const newoder = {
      weight: req.body.weight,
      price: req.body.price,
      sendername: req.body.sendername,
      sendernumber: req.body.sendernumber,
      senderaddress: req.body.senderaddress,
      receivername: req.body.receivername,
      receivernumber: req.body.receivernumber,
      receiveraddress: req.body.receiveraddress,
    };
    const oder = await International.create(newoder);
    const createdId = oder.id;
    return res.status(201).send({ id: createdId, ...oder.toJSON() });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.massage });
  }
});

router.post("/contacts", async (req, res) => {
  try {
    const massage = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,

    };
    const contact = await Contacts.create(massage);


    return res.status(201).json(contact);
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.massage });
  }
});

/* get All oders */

router.get("/", async (req, res) => {
  try {
    const oders = await Domestic.find({});
    return res.status(200).json(oders);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.massage });
  }
});

router.get("/international", async (req, res) => {
  try {
    const oders = await International.find({});
    return res.status(200).json(oders);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.massage });
  }
});

/* get All contacts */
router.get("/contacts", async (req, res) => {
  try {
    const contact = await Contacts.find({});
    return res.status(200).json(contact);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.massage });
  }
});


/* get oder from id */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Domestic.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

router.get("/international/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await International.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});


/* get oder from id for checking and update*/
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Domestic.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

router.get("/international/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await International.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

/* Admin register  */
router.post("/register", async (req, res) => {
  try {
    const {  email, password } = req.body;

    
    if (!email) {
      return res.json({
        error: "email is required ",
      });
    }

    
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await Admin.create({
       
        email,
       
        password: hashedPassword,
       
      });

      return res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
});
/* admin login */

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await Admin.findOne({ email });
  
      if (!user) {
        return res.status(404).send({ error: "Email not found" });
      }
  
      const passwordCheck = await bcrypt.compare(password, user.password);
  
      if (!passwordCheck) {
        return res.status(400).send({ error: "Password does not match" });
      }
  
      const token = Jwt.sign({
        userID: user._id,
        email: user.email
      }, JWT_SECRET, { expiresIn: "1h" });
  
      res.status(201).send({
        message: "User login successful",
        email: user.email,
        token
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
export default router;
