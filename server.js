import express from 'express';
import bodyParser from 'body-parser';
import { router as imageProcessingRoute} from './routes/imageProcessingRoute.js'
import { router as authRoutes} from './routes/authRoute.js'

import { requiresAuth } from './middleware/requiresAuthMiddleware.js';

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// Root Endpoint
// Displays a simple message to the user
app.get( "/", async (req, res) => {
  res.send("Image Processing Microservice Project on AWS")
} );

// Start the Server
app.listen( port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
} );

app.use("/auth", authRoutes);
// app.use("/filteredimage", requiresAuth(), imageProcessingRoute);
app.use("/filteredimage", imageProcessingRoute);