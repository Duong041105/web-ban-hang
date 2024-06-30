const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Sử dụng body-parser để xử lý dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));

// Cung cấp các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint để xử lý đơn đặt hàng
app.post('/order', (req, res) => {
    const cartItems = req.body.cartItems;
    // Xử lý đơn hàng tại đây (lưu vào cơ sở dữ liệu, gửi email, v.v.)
    console.log('Received order:', cartItems);

    // Phản hồi lại cho khách hàng
    res.send({ message: 'Order received', success: true });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
