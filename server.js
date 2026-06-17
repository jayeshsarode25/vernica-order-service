import _config from "./src/config/config.js";
import app from "./src/app.js";
import connetDb from "./src/db/db.js";

const PORT = process.env.PORT || 3004;

app.get("/", (req, res) => {
  res.json({
    message: "Order service is running"
  });
});

app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Order service running on port ${PORT}`);

  try {
    await connetDb();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
});