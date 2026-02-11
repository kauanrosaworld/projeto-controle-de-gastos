CREATE DATABASE IF NOT EXISTS controledegastos;
USE controledegastos;

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  entry_date DATE NOT NULL,
  kind VARCHAR(10) NOT NULL,
  amount DECIMAL(10,2) NOT NULL
);
