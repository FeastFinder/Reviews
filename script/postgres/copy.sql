COPY restaurants FROM '/Users/NatalieSpace/hrsf122/sdc/Reviews/mongo/rest.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/NatalieSpace/hrsf122/sdc/Reviews/mongo/user.csv' DELIMITER ',' CSV HEADER;
COPY reviews FROM '/Users/NatalieSpace/hrsf122/sdc/Reviews/mongo/review.csv' DELIMITER ',' CSV HEADER;