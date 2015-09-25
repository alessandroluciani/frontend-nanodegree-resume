//JSON Bio Sector
var bio = {
	"name" : "Alessandro Luciani",
	"role" : "Front-End Web Developer",
	"welcomMessage" : "I've been working on web sites and web applications since 1999. I've been working in the Oil & Gas and on my own business. I combine expertise on Process Technologies and Automation with the ability to create software more and more innovative.",
	"contacts" : {
		"mobile" : "012-345-6789",
		"email" : "info@alexthebest.it",
		"github" : "alessandroluciani",
		"twitter" : "@alexbest",
		"location" : "Rome, Italy"
	},
	"skills" : ["HTML5","CSS3","JAVASCRIPT","BOOTSTRAP.JS"],
	"bioPic" : "images/me.jpg"
};

//JSON Works Sector
var work = {
	"jobs" : [
		{
			"employer" : "Easyweb srl",
			"title" : "CEO & Co-Founder",
			"location" : "Madrid, Spain",
			"dates" : "2014 - Present",
			"description" : "Advanced Web Software analysis, design & development, platform independent, open source and modular. Professionality and experience to realize application solutions tailored to our customers. Web-based solutions for Industrial needs, accessing to any type of RDBMS (MySQL, SQLServer, Oracle, etc.), customized and integrated with the most of existing applications, for “anytime-anywhere” fruition. Development of applications for iOS and Android systems, technologies supporting almost all the smartphones and tablets on the market. Especially as extensions of web applications."
		},
		{
			"employer" : "IctEasy srl",
			"title" : "CEO & Co-Founder",
			"location" : "London, UK",
			"dates" : "2010 - Present",
			"description" : "Was born in 2010, responding to increasing demand of system integration and process optimization. Novachem multidisciplinary background, ranging from chemical engineering to automation engineering and web and desktop development, allows to directly relate with many final client departments and to effectively achieve fixed targets."
		}
	]
};

//JSON Projects Sector
var projects  = {
	"projects" : [
		{
			"title" : "E@syPipes",
			"dates" : "2014 - Present",
			"url" : "http://www.easyweb.it/esy-asset-integrity", 
			"description" : "The suite, based on a common central engine, consists of applications and modules all independent but customizable and fully integrated with each other depending on the specific requirements for composing highly customizable solutions. All components of the suite can be integrated with any existing enterprise software, with particular reference to SAP, making it a system that can follow the whole cycle, from production to accounting.",
			"images" : [
				{
					"url" : "images/pipe1.jpg"
				},
				{
					"url" : "images/pipe2.jpg"
				}
			]
		},
		{
			"title" : "E@syProject",
			"dates" : "2012 - 2014",
			"url" : "http://www.easyweb.it/esy-project", 
			"description" : "Fully web-based, cloud as document repository (Dropbox, Google Docs, etc.), social approach as communication between resources, integrable with ERP (SAP) and HR Management applications. Risk Management, KPI, compliance with the 'best practices': an application designed and built by the Project Managers for the Project Managers.",
			"images" : [
				{
					"url" : "images/project1.jpg"
				},
				{
					"url" : "images/project2.jpg"
				}
			]
		},
		{
			"title" : "E@sySensor",
			"dates" : "2010 - 2014",
			"url" : "http://www.easyweb.it/esy-sensor", 
			"description" : "Data management from any type of wireless devices (sensors / transmitters) located anywhere in the world, pipeline (water, oil, gas) power (thermical, electrical, nuclear, etc.). Integrable with suite applications to allow, e.g. automatic documents archiving with data transmitted from devices.",
			"images" : [
				{
					"url" : "images/sensor1.jpg"
				},
				{
					"url" : "images/sensor2.jpg"
				}
			]
		}
	]
};

//JSON Education Sector
var education = {
	"schools" : [
		{
			"name" : "Udacity University",
			"location" : "San Francisco, USA",
			"degree" : "Nanodegree",
			"majors" : ["Html","Css","Javascript"],
			"dates" : "2015",
			"url" : "https://www.udacity.com"
		},
		{
			"name" : "University of Rome",
			"location" : "Rome, Italy",
			"degree" : "Mechanical Engineering Degree",
			"majors" : ["Mathematical Models","Metallurgy"],
			"dates" : 2000,
			"url" : "http://www.uniroma1.it"
		},
		{
			"name" : "M.Malpighi High School",
			"location" : "Milan, Italy",
			"degree" : "Scientific high school",
			"majors" : ["Math","Physics"],
			"dates" : 1990,
			"url" : "http://www.iisviasilvestri.it"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/responsive-images--ud882-nd"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud245-nd"
		}
	]
};

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Bio Section with Encapsulation
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);

	var formattedContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedContactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedContactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedContactsMobile);
	$("#topContacts").append(formattedContactsEmail);
	$("#topContacts").append(formattedContactsGithub);
	$("#topContacts").append(formattedContactsTwitter);
	$("#topContacts").append(formattedContactsLocation);

	$("#footerContacts").append(formattedContactsMobile);
	$("#footerContacts").append(formattedContactsEmail);
	$("#footerContacts").append(formattedContactsGithub);
	$("#footerContacts").append(formattedContactsTwitter);
	$("#footerContacts").append(formattedContactsLocation);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomMessage);
	$("#header").append(formattedWelcomeMessage);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkills);
	} 
}

//Works Section with Encapsulation
work.display = function(){
	for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append("<hr>");
	}
}

//Projects Section with Encapsulation
projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedPrjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedPrjTitle = formattedPrjTitle.replace("#", projects.projects[project].url);
		var formattedPrjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedPrjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedPrjTitle);
		$(".project-entry:last").append(formattedPrjDates);
		$(".project-entry:last").append(formattedPrjDescription);
		//for images
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedPrjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image].url);
				$(".project-entry:last").append(formattedPrjImage);
			}
		}
	}
}

//Education Section with Encapsulation
education.displaySchool = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName+' '+formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajors);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append("<hr>");
		//manca la url
	}
}

//Education OnlineCourses Section with Encapsulation
education.displayOnlineCourses = function(){
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineCoursesTitle = formattedOnlineCoursesTitle.replace("#", education.onlineCourses[onlineCourse].url);
		var formattedOnlineCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedOnlineCoursesTitle+' '+formattedOnlineCoursesSchool);
		var formattedOnlineCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedOnlineCoursesDates);
		$(".education-entry:last").append("<br><hr>");
	}
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//DISPLAY ALL SECTIONS!
bio.display();
work.display();
projects.display();
education.displaySchool();
education.displayOnlineCourses();
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Clicking for document location via mouse position
$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// Internationalize my Name 
$("#main").append(internationalizeButton);
var inName = function() {
  var oldName = $("#name").text();
  var newName = oldName.trim().split(" ");
  newName[0] = newName[0][0].toUpperCase() + newName[0].slice(1).toLowerCase();
  newName[1] = newName[1].toUpperCase();
  newName = newName.join(" ");
  return newName;
}

//Map DOM Section Appended
$("#mapDiv").append(googleMap);