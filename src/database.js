import { connect } from "mongoose";
import { MONGODB } from "./config";
// console.log(process.env.MONGODB);

(async () => {
  try {
    const db = await connect(MONGODB);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
