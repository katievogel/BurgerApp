var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "classpass2019!",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'peki1ic9a3wwvzqq',
    password: 'dkaxw3rmfayaw898',
    database: 'gx2t36okkdphtwkh'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
