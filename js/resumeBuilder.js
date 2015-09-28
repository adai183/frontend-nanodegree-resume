var bio = {
	"name": "Andreas Daiminger",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "(+34) 608 379 802",
		"email": "andreas.daiminger@gmail.com",
		"github": "@adai183",
		"location": "Madrid",
	},
	"welcomeMessage": "On my way to become a front end ninja!",
	"bioPic": "images/biopic.jpg",
	"skills": ["Skill1", "Skill2", "Skill3", "Skill4"]
};

var work = {};
work.position = "Flamenco dancer";
work.years = "2011 - 2015";

var projects = {
	"name": "Final project IPND",
	"link": "http://kinetic-silicon-104012.appspot.com"
};

var education = {
	"schools": [
	{
		"name": "Joseph von Fraunhofer Gymnasium",
		"city": "Cham",
		"majors": ["English", "History"],
		"graduationYear": "2006"
	},
	{
		"name": "Amor de Dios",
		"city": "Madrid",
		"majors": "Flamenco Dance",
		"graduationYear": "2014"
	}],
	"onlineCourses": {
		"name": "Udacity",
		"degree": "Introduction to Programming",
		"graduationDate": "September 2015"
	}

};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]),
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]),
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]),
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]),
    $("#skills").append(formattedSkill);
}







