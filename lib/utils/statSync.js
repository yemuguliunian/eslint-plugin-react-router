const fs = require('fs');

function statSync(path) {
    try {
        return fs.statSync(path);
    } catch (error) {
        return false;
    }
}

module.exports = statSync;
