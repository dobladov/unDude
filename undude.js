var sqlite3 = require('sqlite3').verbose();


function getAdmin(text) {
  var user, pass;
  user = text[text.indexOf("sys-name")+1];
  pass = text[text.indexOf("password")+1];

  console.log("[Admin] User: " + user + " Password: " + pass);
}


function getDevice(text) {
  var user, pass, device;
  user = text[text.indexOf("user")+1];
  pass = ((text[text.indexOf("pwd")+1] != "routerOS") ? text[text.indexOf("pwd")+1] : "");
  device = text[text.indexOf("sys-name")+1];

  console.log("[Device] " + device + " User: " + user + (pass ? " Password: " + pass:"" ) );
}


function splitUnicode(text) {
  return text.replace(/[\x00-\x1F\x80-\xFF]/g,"%").split(/[%]+/);
}


function main() {

  if (process.argv.length < 3) {
    console.log("Usage: node undude.js dude.db");
    process.exit(1);
  }

  var db = new sqlite3.Database(process.argv[2]);

  db.each("SELECT id, obj FROM objs", function(err, row) {

      obj = row.obj.toString();

      if (obj.search("allowMoreThanOne")  > -1)
        getAdmin(splitUnicode(row.obj.toString()));

      if (obj.search("routerOS")  > -1)
         getDevice(splitUnicode(row.obj.toString()));

  });

  db.close();

}

main();
