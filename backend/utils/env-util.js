import dotenv from "dotenv"
dotenv.config()


export const sec_key = process.env.SEC_KEY;
export const port = process.env.PORT;
export const mongo_url = process.env.MONGO_URL;

