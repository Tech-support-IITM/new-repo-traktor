const client = require('../../utils/conn.js');
const TeamsData = (userHash) => {
    return new Promise((resolve, reject) => {
            client.query(`SELECT * FROM user_data WHERE user_hash=$1`, [userHash], (err, result) => {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(result)
                }
            })
    })
}
module.exports = {TeamsData}