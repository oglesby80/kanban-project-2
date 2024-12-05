import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js'; // Ensure the .js extension is present
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

const forceDatabaseRefresh = false;

// Serve static files in the client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

