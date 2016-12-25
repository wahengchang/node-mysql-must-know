
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: process.env.MYSQL_IP,
  user: "peter",
  password: "1234",
  database: "southwind"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query(
  'UPDATE products SET quantity = ? Where price = ?',
  [2, 2.3],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
  if(err) console.log('err: ', err);
  else console.log('Terminated done: ');
});
