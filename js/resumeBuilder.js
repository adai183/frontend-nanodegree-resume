/*
 resumeBuilder.js
 contains the JSON with the data to publish
 and the display methods
by Andreas Daiminger
*/

//bio
var bio = {
	"name": "Andreas Daiminger",
	"role": "Front End Developer Apprentice",
	"contacts": {
		"mobile": "(+34) 608 379 802",
		"email": "andreas.daiminger@gmail.com",
		"github": "@adai183",
		"twitter": "@ADaiminger",
		"location": "Madrid",
	},
	"welcomeMessage": "On my way to become a front end ninja!",
	"skills": ["HTML", "CSS", "JavaScript", "Python"],
	"bioPic": "images/hombre_pajaro.jpg"
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	// header
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	// contacts
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	// skills
	if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }

};

// education
var education = {
	"schools": [
	{
		"name": "Joseph von Fraunhofer Gymnasium",
		"location": "Cham, Germany",
		"degree": "High school",
		"majors": ["English", "History"],
		"dates": " from 1998 to 2006"
	},
	{
		"name": "Universität Regensburg",
		"location": "Regensburg, Germany",
		"degree": "College",
		"majors": "English and Spanish Linguistics",
		"dates": "from 2006 to 2008"
	},
	{
		"name": "Amor de Dios",
		"location": "Madrid, Spain",
		"degree": "Dance Academy",
		"majors": "Flamenco Dance",
		"dates": "from 2008 to 2014"
	}],
	"onlineCourses": [

		{
			"title": "Introduction to Programming",
			"school": "Udacity",
			"dates": "From July to September 2015",
			"url": "My Degree Notes"
		}]

};


education.display = function(){
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // start the HTML
        $("#education").append(HTMLschoolStart);
		for (school in education.schools) {

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchooolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedSchoolName + formattedSchooolDegree
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajors);
	};
		};

	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // start the HTML
		$(".education-entry:last").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			formattedonlineTitle = formattedonlineTitle.replace("#","https://www.udacity.com/");
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			formattedonlineURL = formattedonlineURL.replace("#", "http://kinetic-silicon-104012.appspot.com/");

			$(".education-entry:last").append(formattedonlineTitleSchool);
			$(".education-entry:last").append(formattedonlineDates);
			$(".education-entry:last").append(formattedonlineURL);
		};
	};
};

// work
var work =  {
	"jobs": [
	{
		"title": "Flamenco Dancer",
		"employer": "Amor de Dios",
		"location": "Madrid",
		"dates": "2010 - 2015",
		"description": "Training and teaching at renown Flamenco school Amor de Dios"
	},
	{
		"title": "Cultural Manager",
		"employer": "Compania Curro de Candela",
		"location": "Madrid",
		"dates": "2015",
		"description": "Solving day to day problems in a big Flamenco Production"
	}]
};

work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

// projects
var projects = {
	"projects":[
	{
		"title": "Flamenco Dance",
		"dates": "2019 - 2015",
		"link": "https://www.youtube.com/watch?v=I6LJaKcB-NA",
		"description": "I danced a lot of Flamenco the last 6 years",
		"images":["images/flamenco1-400_large_1x.jpg", "images/flamenco2-400_large_1x.jpg"]
	},
	{
		"title": "Final project IPND",
		"dates": "July - September 2015",
		"link": "http://kinetic-silicon-104012.appspot.com",
		"description": "This was my first NanoDegree. I learned how to think like a Programmer and gained technological empathy",
        "images":["images/code-400_large_1x.jpg", "images/codebrain-400_large_1x.jpg"]
	}
]};

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


var menu = {
   "menu": [
      {
         "title": "work",
         "link": "#workH2"
      },
      {
         "title": "education",
         "link": "#educationH2"
      },
      {
         "title": "projects",
         "link": "#projectsH2"
      },
      {
         "title": "map",
         "link": "#mapDiv"
      }
   ]
};

menu.display = function () {
    var i=0;
    $("nav").append('<ul id="navmenu"></ul>');
    for (i=0; i<menu.menu.length; i++) {
       entry = '<li><a href="'+menu.menu[i].link+'">'+menu.menu[i].title+'</a></li>';
          $("#navmenu:last").append(entry);
    }
};


/////////// main /////////////////////////////////////
$("#mapDiv").append(googleMap);
menu.display();
bio.display();
education.display();
work.display();
projects.display();
