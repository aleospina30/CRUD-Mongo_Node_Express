import { config } from "dotenv";

config();

export const MONGODB = process.env.MONGODB || "mongodb://localhost/test"

export const PORT = process.env.PORT || 3000;