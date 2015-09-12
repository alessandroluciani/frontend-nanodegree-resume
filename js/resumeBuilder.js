//JSON Bio Sector
var bio = {
	"name" : "Alessandro Luciani",
	"role" : "Front-End Web Developer",
	"welcomMessage" : "Lorem ipsum dolor sit amet etc etc etc.",
	"contacts" : {
		"mobile" : "012-345-6789",
		"email" : "info@alessandroluciani.it",
		"github" : "alessandroluciani",
		"twitter" : "@alexluciani72",
		"location" : "Rome"
	},
	"skills" : ["skill1","skill2","skill3","skill4"],
	"bioPic" : "images/fry.jpg"
};

//JSON Education Sector
var education = {
	"schools" : [
		{
			"name" : "Udacity University",
			"location" : "San Francisco",
			"degree" : "Nanodegree",
			"majors" : ["Html","Css","Javascript"],
			"dates" : "2015",
			"url" : "http://www.example.com"
		},
		{
			"name" : "University of Rome",
			"location" : "Rome",
			"degree" : "Mechanical Engineering Degree",
			"majors" : ["Mathematical Models","Metallurgy"],
			"dates" : 2000,
			"url" : "http://www.example.com"
		},
		{
			"name" : "M.Malpighi High School",
			"location" : "Rome",
			"degree" : "Scientific high school",
			"majors" : ["Math","Physics"],
			"dates" : 1990,
			"url" : "http://www.example.com"
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
		}
	]
};

//JSON Works Sector
var work = {
	"jobs" : [
		{
			"employer" : "Easyweb srl",
			"title" : "CEO & Co-Founder",
			"location" : "Rome",
			"dates" : "2014 - Present",
			"description" : "bla bla bla bla bla bla bla bla bla bla bla bla"
		},
		{
			"employer" : "IctEasy srl",
			"title" : "CEO & Co-Founder",
			"location" : "Rome",
			"dates" : "2010 - Present",
			"description" : "bla bla bla bla bla bla bla bla bla bla bla bla"
		},
		{
			"employer" : "InfoRoma srl",
			"title" : "Freelance",
			"location" : "Rome",
			"dates" : "Dic 1999 - May 2010",
			"description" : "bla bla bla bla bla bla bla bla bla bla bla bla"
		}
	]
};

//JSON Projects Sector
var projects  = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "bla bla bla bla bla bla bla bla bla bla bla bla",
			"images" : [
				{
					"url" : "images/fry.jpg"
				},
				{
					"url" : "images/fry.jpg"
				}
			]
		},
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "bla bla bla bla bla bla bla bla bla bla bla bla",
			"images" : [
				{
					"url" : "images/fry.jpg"
				},
				{
					"url" : "images/fry.jpg"
				}
			]
		},
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "bla bla bla bla bla bla bla bla bla bla bla bla",
			"images" : [
				{
					"url" : "images/fry.jpg"
				},
				{
					"url" : "images/fry.jpg"
				}
			]
		}
	]
};


//Bio Sector Formatting
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

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
}


