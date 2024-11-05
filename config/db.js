import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Veritabanına başarılı bir şekilde bağlandı...");
  } catch (err) {
    console.log("Veritabanına bağlanırken hata çıktı:", err);
    process.exit(1); // Hata durumunda uygulamayı sonlandırır
  }
};

export default connectDB;
