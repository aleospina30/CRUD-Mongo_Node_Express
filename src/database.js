import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://Sejotaz:Kakashis1@mongodb1.ndvxls9.mongodb.net/Tareitas"
    );
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
