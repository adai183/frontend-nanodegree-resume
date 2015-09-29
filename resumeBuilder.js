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

var work =  {
	"jobs": [
	{
		"title": "Flamenco Dancer",
		"employer": "Amor de Dios",
		"dates": "2010 - 2015",
		"description": "Training and teaching at renown Flamenco school Amor de Dios"
	},
	{
		"title": "Cultural Manager",
		"employer": "Compania Curro de Candela",
		"dates": "2015",
		"description": "Solving day to day problems in a big Flamenco Production"
	}]
};




var projects = {
	"projects":[
	{
		"title": "Flamenco Dance",
		"dates": "2019 - 2015",
		"link": "https://www.youtube.com/watch?v=I6LJaKcB-NA",
		"description": "I danced a lot of Flamenco the last 6 years",
		"images":["images/flamenco1-800_large_1x.jpg", "images/flamenco2-800_large_1x.jpg"]
	},
	{
		"title": "Final project IPND",
		"dates": "July - September 2015",
		"link": "http://kinetic-silicon-104012.appspot.com",
		"description": "This was my first NanoDegree. I learned how to think like a Programmer and gained technological empathy",

	}
]};

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

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton)



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#mapDiv").append(googleMap);


if(bio.skills.length > 0) {
	 $("#header").append(HTMLskillsStart);
	 var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	 $("#skills").append(formattedSkill);
	}

function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

displayWork();

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedTitle = formattedTitle.replace("#", projects.projects[project].link)
    	$(".project-entry:last").append(formattedTitle);

	    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	    $(".project-entry:last").append(formattedDates);

	    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	    $(".project-entry:last").append(formattedDescription);

	    if (projects.projects[project].images.length > 0){
	      for (var image in projects.projects){
	        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};


projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});



