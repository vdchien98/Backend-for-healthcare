import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();
let app = express();
//cofig app
app.use(bodyParser.json()); // cấu hình tham số từ client gửi lên
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
viewEngine(app);
initWebRoutes(app);

//connetc db
connectDB();

//chạy dự án
let port = process.env.PORT || 9494;
app.listen(port, () => {
    console.log('Backend Nodejs is running on the port: ' + port);
});
