const client = require('../../utils/conn.js');
const TeamsData = (EmailAddress, userHash) => {
    return new Promise((resolve, reject) => {
            client.query(`select ud.user_mail, ud.user_hash, t.official_email_address, t.basic, t.founder, t.official, t.description from user_data ud, test_startup t WHERE official_email_address=$1 AND user_hash=$2;`, [EmailAddress, userHash], (err, result) => {
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