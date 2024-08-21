import express from 'express';
import dotenv from "dotenv"
import cors from "cors"
import bodyparser from "body-parser"
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;
const database = process.env.MONGO_URL

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const JWT_SECRET = 'lanaKey16981231'; // You should store this securely, preferably in environment variables



const OrderSchema = mongoose.Schema({
    name: String,
    address: String,
    email: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})
const Order = mongoose.model('Order', OrderSchema)

const ProductSchema = mongoose.Schema({
    id: String,
    src: String,
    category: String,
    name: String,
    description: String,
    price: Number
})
const Product = mongoose.model('Product', ProductSchema)


const ServiceSchema = mongoose.Schema({
    name: String,
    date: String,
    time: String,
    location: String,
    description: String,
    topics: String,
    offers: String
})
const Service = mongoose.model('Service', ServiceSchema)


const UserSchema = mongoose.Schema({
   name: String,
   email: String,
   password:String
})
const User = mongoose.model('User', UserSchema)

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        console.error(error);
    }
});

app.get('/product/:id', async (req, res) => {

    try {
        const { id } = req.params
        console.log('====================================');
        console.log(id);
        console.log('====================================');
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).send('Product not found');
        res.json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.post('/product/new', (req, res) => {

    try {
        const { id, src, category, name, description, price } = req.body
        const product = new Product({ id, src, category, name, description, price })
        product.save()
        if (product) {
            res.status(201).json({ message: "Product created successfully" })
        }
    } catch (error) {
        res.status(500).json(error)
    }


})

app.post('/create/order', async (req, res) => {
    try {
        const { name, address, email, products } = req.body;
        console.log({ name, address, email, products });

        res.status(200).json({ name, address, email, products })


    } catch (error) {
        res.status(404).json({ error: "There is error" })
    }
})

app.post('/create/service', async (req, res) => {
    try {
        const { name, date, time, location, description, topics, offers } = req.body;
        console.log({ name, date, time, location, description, topics, offers });
        const service = new Service({
            name, date, time, location, description, topics, offers
        })
        const newService = await service.save()
        if (!newService) return res.status(403).json({ message: "There is an error" })
        else
            return res.status(200).json({ message: "Service created" })
    } catch (error) {
        res.status(404).json({ error: "There is error" })
    }
})

app.get('/services', async (req, res) => {
    try {
        const services = await Service.find()
        res.json(services)
    } catch (error) {
        console.error(error);
    }
});

app.get('/event/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log('====================================');
        console.log(id);
        console.log('====================================');
        const service = await Service.findById(req.params.id)
        if (!service) return res.status(404).send('Service not found');
        res.json(service)
    } catch (error) {
        res.status(500).json(error)
    }
})


app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Create a JWT payload with the user's ID (or other identifying information)
        const payload = {
            userId: user._id,
            email: user.email,
        };

        // Sign the token with a secret key and set an expiration time (e.g., 1 hour)
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

        // Send the token in the response
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, async () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    await mongoose.connect(database).then(() => {
        console.log("Connected to MongoDB")
    }).catch((error) => {
        console.error(error);

    })
});

