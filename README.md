npm init
npm install express
npm install --save-dev nodemon
Mở terminal gõ lệnh npm start để chạy node server


----------------------------------------------------------------
-Cài đặt EJS 
npm install --save-exact ejs

-Cài đặt package env
npm install --save-exact dotenv

-cấu hình mô hình mvc
+config
+controller
+middleware
+migration
+model
+routes
+seeder
+service
+view

-cài đặt mysql
npm i mysql2
npm install --save mysql2

-- Sử dụng connection pool để tăng hiệu năng kết nối:
Connection pools hoạt động như thế nào?
Một nguyên tắc cơ bản là một App sẽ implements một connection pool open n connections đến Database. Và có một cơ chế để đánh dấu connections là "available" hay "in use". Khi gọi connect() thì một connection sẽ được lấy ra khỏi pool ( nó được đánh dấu là "in use" và trả về 1 connection cho lời gọi). Khi close() thì nó sẽ được put lại pool (chứ không thực sự đóng lại).

Ngăn chặn connections leaking
Connection pools thì triển khai một config là giới hạn max connection có thể mở tại 1 thời điểm. Leak connection sẽ làm cho lời gọi connect() bị treo mãi mãi ( vì connection pools sẽ từ chối mở 1 connection mới và nó sẽ chờ đợi một connection "available"). Để ngăn leak hãy đảm bảo rằng code của bạn gọi close() khi không sử dụng.

