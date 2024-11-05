import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // connectDB işlevini içe aktarıyoruz
import authRoutes from "./src/routes/authRoutes.js"; // .js uzantısını ekledik
import noteRoutes from "./src/routes/noteRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

// Veritabanı bağlantısını başlat
connectDB();

app.use(express.json()); // JSON verisini ayrıştırmak için

// Ana sayfa rotası
app.get("/", (req, res) => {
  res.json({
    message: "Anasayfa",
  });
});


app.use('/', authRoutes); // /auth yerine ana dizin kullanılıyor
app.use('/', noteRoutes);
console.log("Auth routes loaded successfully"); // Bu satırı ekleyin


app.listen(port, () => {
  console.log(`Server ${port} portundan çalışıyor...`);
});
