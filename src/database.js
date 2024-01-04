import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.MONGODB);

(async () => {
  try {
    const db = await connect(process.env.MONGODB);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
