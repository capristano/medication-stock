/*
 * This script is executed when our application is starting
 */
CREATE TABLE IF NOT EXISTS medication(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(512) NOT NULL,
	dosage REAL,
	unit_measurement VARCHAR(3),
	initial_amount INTEGER,	
	amount_quarter1 INTEGER,
	price_quarter1 REAL,
	amount_quarter2 INTEGER,
	price_quarter2 REAL,
	amount_quarter3 INTEGER,
	price_quarter3 REAL,
	amount_quarter4 INTEGER,
	price_quarter4 REAL
);
--Create a new sequence for our table, it's only to show what we can do using more than one table
INSERT INTO sqlite_sequence(name, seq) SELECT "medication", 1 WHERE (SELECT COUNT(1) FROM sqlite_sequence WHERE seq = 1) > 0;


