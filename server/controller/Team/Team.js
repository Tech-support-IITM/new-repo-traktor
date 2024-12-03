const { TeamsData } = require("../../model/CustomerModel/TeamsData")

const FetchIndTeamData = async(req, res) => {
    const {userHash} = req.query
    try 
    {
        const result = await TeamsData(userHash);
        res.send(result);
    }
    catch(err)
    {
        res.err(err);
    }
}
module.exports = FetchIndTeamData;