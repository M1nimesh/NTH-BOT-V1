const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/154253046?s=400&u=23cb08726f9c6e1692ea8e4e676772fcbb09e8cc&v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi ! I'm NTH-BOT-V1,I'm Alive Now...!",
};
