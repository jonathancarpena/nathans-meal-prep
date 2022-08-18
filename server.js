import dotenv from "dotenv"
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));


// Express
import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"

// Database
import connectDB from './config/db.js'

// Routes
import adminRoutes from './routes/adminRoutes.js'
import availabilityRoutes from './routes/availabilityRoutes.js'
import mealRoutes from './routes/mealsRoute.js'
import orderRoutes from './routes/ordersRoute.js'
import imageRoutes from './routes/imageRoute.js'

dotenv.config()

// Conncet to MongoDB
connectDB();

// Express Server
const app = express()

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

// For JSON Data
app.use(cookieParser())
app.use(json())
app.use(urlencoded({
    extended: false
}))



// Routes: (extension, routes)
app.use("/api/admin", adminRoutes)
app.use("/api/availability", availabilityRoutes)
app.use("/api/meals", mealRoutes)
app.use("/api/orders", orderRoutes)
app.use('/image', imageRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
}


// Port server is running on
const PORT = process.env.PORT || 5000
app.listen(PORT,
    () => console.log(`Server running on port ${PORT}`)
)