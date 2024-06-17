const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// توصيل قاعدة البيانات MongoDB
mongoose.connect('mongodb://localhost:27017/productsDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

// تعريف نموذج الإعلان
const adSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    contactNumber: String,
    productCategory: String,
    productModel: String,
    productCondition: String,
    productDescription: String,
    images: [String],
    expiryDate: Date
});

const Ad = mongoose.model('Ad', adSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// تمكين الوصول لملفات العميل (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint لإضافة منتج جديد
app.post('/addProduct', async (req, res) => {
    try {
        const {
            productName,
            productPrice,
            contactNumber,
            productCategory,
            productModel,
            productCondition,
            productDescription,
            images,
            expiryDate
        } = req.body;

        const newAd = new Ad({
            productName,
            productPrice,
            contactNumber,
            productCategory,
            productModel,
            productCondition,
            productDescription,
            images,
            expiryDate
        });

        const savedAd = await newAd.save();
        res.status(201).json(savedAd);
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).send("حدث خطأ أثناء حفظ المنتج. يرجى المحاولة مرة أخرى.");
    }
});

// التشغيل على المنفذ 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
