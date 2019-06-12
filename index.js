var leveldown = require("asyncstorage-down");
var levelup = require("levelup");
var fs = require("level-filesystem");

var db = levelup("level-fs", { db: leveldown });

var fileSystem = fs(db);
fileSystem.existsSync = function(dirPath) {
  return fs.exists(dirPath, function(err) {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
};

module.exports = fileSystem;
