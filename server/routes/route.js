const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: '../uploads/'}); // For parsing multipart form-data
const Authenticate = require('../utils/Authenticate.js');
const LoginController = require('../controller/Admin/LoginController/LoginController');
const WorkController = require('../controller/Admin/WorkRequestController/WorkRequestController');
const ResumeController = require('../controller/Admin/Resume/ResumeController.js');
const GetAllResumeController = require('../controller/Admin/Resume/GetAllResumeController.js');
const ResumeUpload = require('../controller/Admin/Resume/ResumeUpload.js');
const Resumedata = require('../controller/Admin/Resume/Resumedata.js');
const ApprovalRequest  = require('../controller/Admin/Resume/ApporvalRequest.js');
const ForgotRequest = require('../controller/Admin/LoginController/ForgotRequest.js');
const {Profile, ProfilePhoto} = require('../controller/Admin/Profile/Profile.js');
const DeleteResume = require('../controller/Admin/Resume/DeleteResume.js');
const AddMentor = require('../controller/Admin/Mentors/AddMentor.js');
const Settings = require('../controller/Admin/Settings/Settings.js');
const {AddStartup, FetchStartupDatainNumbers, FetchStartupData, UpdateStatus, IndividualStartups, TopStartupsSectorsCont} = require('../controller/Admin/startups/AddStartup.js');
const {AddMessage, ViewMessage} = require('../controller/Admin/Messages/Messages.js');
const {AddConnections, ViewConnections, EstablishConnection, AvailConnections} = require("../controller/Admin/Connections/Connection.js");
const Report = require('../controller/Admin/Reports/Report.js');
const Founder = require('../controller/Team/Founder.js');
const {FetchDataMentor} = require('../controller/Team/Mentor.js');
const Job =  require('../controller/Admin/Job/Job.js');
const TeamMember = require('../controller/Team/TeamMember.js'); 
const AwsCredits = require('../controller/Team/AwsCredits.js');
const RaiseRequest = require('../controller/Team/RaiseRequest.js');
const {AddMentorHour} = require('../controller/Team/Mentor.js');
const {DeleteConnection} = require('../controller/Admin/Connections/Connection.js')
const {ViewNotification} = require('../controller/Admin/Notification/Notification.js');
const {CreateEvents, FetchEvents, RequestSpeaker} = require('../controller/Admin/Events/Events.js');
const {FetchMentorData, MentorCount, DeleteMentorData} = require('../controller/Admin/Mentors/MentorData.js')
const AddJob = require('../controller/Team/AddJob.js');
const {AddFunding, updateFundingNotif} = require('../controller/Finance/AddFunding.js');
const {ScheduleMentorMeeting} = require('../controller/Admin/Mentorship/Mentorship.js');
const IPdataUpload = require('../controller/Office/IPdata.js');
const FetchIndTeamData = require('../controller/Team/Team.js')
router.get('/fetch-team-data', FetchIndTeamData);
router.get('/avail-connections', AvailConnections);
router.get('/prof', ProfilePhoto);
router.put('/update-status', UpdateStatus)
router.get('/startup/:id',IndividualStartups)
router.post('/schedule-meeting', ScheduleMentorMeeting);
router.post('/finance/funding-update', AddFunding);
router.get('/fetch-startup', FetchStartupData);
router.get('/fetchevents', FetchEvents);
router.get('/count-startupdata', FetchStartupDatainNumbers);
router.get('/mentor/count',MentorCount);
router.post('/mentor/request-speaker', RequestSpeaker);
router.post('/login', LoginController);
router.post('/send-message', AddMessage);
router.post('/forgot-password', ForgotRequest);
router.post('/work-request', WorkController);
router.get('/download/:filename', ResumeController);
router.get('/getdata', GetAllResumeController);
router.post('/resumeupload', ResumeUpload);
router.get('/get-mentor-details', FetchMentorData);
router.get('/resume-fetch/:page_data/:page_number', Resumedata);
router.post('/resume-send', ApprovalRequest);
router.get('/profile/:mail', Profile);
router.delete('/delete-resume/:id', DeleteResume);
router.post('/mentor/add', AddMentor);
router.post('/create-events',CreateEvents);
router.get('/profile-data/:mail', Authenticate, Profile);
router.post('/add-sector', Settings)
router.get('/view-message', ViewMessage);
router.post('/add-connections', AddConnections);
router.post('/add-startup', AddStartup);
router.get('/viewconnections', ViewConnections);
router.post('/post-job', Authenticate, Job);
router.get('/fetch-report-data', Report);
router.post('/establish-connection', EstablishConnection);
router.put('/customer/founder-update', Founder);
router.post('/customer/teams-update', TeamMember);
router.post('/customer/aws-credit-apply', AwsCredits);
router.post('/customer/raise-request', RaiseRequest);
router.post('/customer/apply-mentor', AddMentorHour);
router.get('/customer/fetch-mentor', FetchDataMentor);
router.post('/customer/add-job', AddJob);
router.get('/notification', updateFundingNotif);
router.delete('/delete-mentor/:id', DeleteMentorData)
router.delete('/delete-connection', DeleteConnection);
router.post('/ipdataupload', upload.single('file'),  IPdataUpload);
router.get('/st', TopStartupsSectorsCont);
module.exports = router;