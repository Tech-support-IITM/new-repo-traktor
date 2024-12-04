const { TeamsData } = require("../../model/CustomerModel/TeamsData")
const FetchIndTeamData = async(req, res) => {
    const {userHash, email} = req.query
    try 
    {
        const result = await TeamsData(email, userHash);
        res.send(result);
    }
    catch(err)
    {
        res.err(err);
    }
}
module.exports = FetchIndTeamData;
