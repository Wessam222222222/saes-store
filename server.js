const express = require('express');
const app = express();
const port = 4000; // تغيير المنفذ إلى 4000

// Middleware لتقديم الملفات الثابتة مثل HTML، CSS، JS
app.use(express.static('public'));

// إعداد مسار رئيسي
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// بدء السيرفر
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
