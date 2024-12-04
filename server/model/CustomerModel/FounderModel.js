const client = require('../../utils/conn');

const Founder = async (founder_name,
    founder_email,
    founder_number,
    founder_gender,
    founder_student_id,
    founder_linkedin,
    founder_role, 
    session_mail) => {
    return new Promise((resolve, reject) => {
        client.query(`INSERT INTO founder_details(name, email, number, gender, studentid, linkedin, role, mail_address) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`, 
            [founder_name,
            founder_email,
            founder_number,
            founder_gender,
            founder_student_id,
            founder_linkedin,
            founder_role, 
            session_mail] , 
            (error, result)=>{
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(result);
            }
        })
    })
};

module.exports = Founder;