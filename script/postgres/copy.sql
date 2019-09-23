-- COPY restaurants(name) FROM '/Users/NatalieSpace/hrsf122/sdc/Reviews/script/rest.csv' DELIMITER ',' CSV;
-- COPY users("user",user_initials,initials_background,location,vip) FROM '/Users/NatalieSpace/hrsf122/sdc/Reviews/script/user.csv' DELIMITER ',' CSV;
COPY reviews(review,overall,food,service,ambience,value,noise,would_recommend,date,user_id,restaurant_id) FROM '/Users/NatalieSpace/hrsf122/sdc/Reviews/script/review.csv' DELIMITER ',' CSV;

-- "mongoimport --uri 'mongodb://localhost/reviewsDB' --collection restaurants --type csv --file '/Users/NatalieSpace/hrsf122/sdc/Reviews/script/rest.csv' --headerline"
-- "mongoimport --uri 'mongodb://localhost/reviewsDB' --collection users --type csv --file '/Users/NatalieSpace/hrsf122/sdc/Reviews/script/user.csv' --headerline"
-- "mongoimport --uri 'mongodb://localhost/reviewsDB' --collection reviews --type csv --file '/Users/NatalieSpace/hrsf122/sdc/Reviews/script/review.csv' --headerline"