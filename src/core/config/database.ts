
const DB_USER =  process.env.DB_USER;
const DB_PASSWORD =  process.env.DB_PASSWORD;
const DB_HOST =  process.env.DB_HOST;
const DB_PORT =  process.env.DB_PORT;
const DB_NAME =  process.env.DB_NAME;

// const DB_CONNECTION =  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const DB_CONNECTION =  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
export {
    DB_CONNECTION
};