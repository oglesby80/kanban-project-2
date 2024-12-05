import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME 'kanban_db' // Database name
    process.env.DB_USER 'postgres' // Database user
    process.env.DB_PASSWORD '2264' // Database password
    {
        host: process.env.DB_HOST || 'localhost', // Database host
        port: parseInt(process.env.DB_PORT || '5432'), // Database port
        dialect: 'postgres', // Using PostgreSQL
        logging: false, // Disable Sequelize logging
    }
);

export default sequelize;

