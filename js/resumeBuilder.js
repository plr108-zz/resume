var bio = {
	"name" : "Patrick Roche",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my resume!",

	"contacts" : {
		"mobile" : "724-875-3487",
		"email" : "patrick.l.roche@gmail.com",
		"github" : "plr108",
		"twitter" : "@Patrick_Roche",
		"location" : "Pittsburgh, PA"
	},

	"skills" : [
		"HTML","CSS","JavaScript","Java", "C#", "Hustle","Loyalty","Respect","Grit","Awesomeness"
	],

	"bioPic" : "images/me.jpg",

	display : function() {

		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", "images/me.jpg");
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
		  	$("#header").append(HTMLskillsStart);

		  	var formattedSkill = null;
		  	for(i=0; i<bio.skills.length;i++) {
		  		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		  		$("#skills").append(formattedSkill);
		  	}
		}

		// show footer contact info
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		// Show interactive map
		$("#mapDiv").append(googleMap);
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Philips",
			"title" : "Senior Engineering Specialist",
			"location" : "Plum, PA",
			"dates" : "2010 - Present",
			"description" : "I create and validate the processes used to service medical devices."
				+ "  I also review deliverables for device testing software written in C, C++, and "
				+ "National Instruments LabVIEW.",
			// I add a URL key to all items in the jobs array
			"url" : "http://www.philips.com"
		},
		{
			"employer" : "Bechtel Plant Machinery Incorporated",
			"title" : "Supplier Quality Assurance Engineer",
			"location" : "Monroeville, PA",
			"dates" : "2008 - 2010",
			"description" : "I ensured that our company's instrumentation and control system "
				+ "suppliers provided equipment that met Navy Nuclear Program quality system and "
				+ "contract requirements.",
			"url" : "http://www.bpmionline.com"
		},
		{
			"employer" : "US Army PM Transportation Information Systems",
			"title" : "Software Group Lead",
			"location" : "Springfield, VA",
			"dates" : "2005 - 2008",
			"description" : "I developed software that managed military transportation operations.  "
				+ "I managed interfaces with other military systems, developed data exchange "
				+ "software in Java EE, and displayed transportation-related information in web "
				+ "applications using JavaScript and jQuery.  I also managed the work of a team "
				+ "of three software development task leads and about 25 software developers.",
			"url" : "http://www.pdamis.army.mil/"
		},
		{
			"employer" : "Naval Surface Warfare Center Dahlgren Division",
			"title" : "Software Engineer",
			"location" : "Dahlgren, VA",
			"dates" : "2003 - 2005",
			"description" : "I developed software used in the configuration and certification of "
				+ "US navy tactical data and radar systems.  I created components of a software "
				+ "model in C++ that was used to simulate tactical systems of US Navy strike "
				+ "groups during combat scenarios.  I also developed components of a web-based "
				+ "software project management system used to plan, execute, and assess combat "
				+ "system interoperability tests.",
			"url" : "http://www.navy.mil/local/NSWCDD/"
		}
	],
	display : function() {

		for(job in work.jobs)
		{
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			// add work URL to formattedEmployer.  URL opens in a new browser window.
			formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url + "\""
				+ " target=\"_blank\"");
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;


			var formattedWorkLocation = HTMLworkLocation.replace("%data%",
				work.jobs[job].location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%",
				work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};

var projects = {
	"projects" : [
		{	"title" : "Tecmo Super Bowl Team Select Android Application",
			"dates" : "2014 - Present",
			"description" : "During football season I still play a lot of Tecmo Super Bowl with "
			+ "my friends.  We play on the original Nintendo Entertainment System hardware, and "
			+ "to keep it fair and interesting we needed a new way to pick our teams.  The game "
			+ "does not have a random team select feature so I created this app (in 8-bit style "
			+ "graphics and fonts to stay true to the game of course).  Here's how it works: the "
			+ "app will present 3 random teams for each user to choose from.  The app will then "
			+ "rate the players' team picks as well as show who has an advantage in the matchup.  "
			+ "In the pictures below Player 2 picked the Raiders, and Player 1 picked the Eagles.  "
			+ "Player 2 picked the best team presented so their name appears in green.  Player 1 "
			+ "picked the second best team presented so their name appears in yellow.  (The worst "
			+ "pick possible would cause a player's name to appear in red.)  In the game the "
			+ "Raiders are a slightly better team than the Eagles, so the advantage arrow points "
			+ "towards Player 2.",
			"images" : [
				"images/project1image1.jpg",
				"images/project1image2.jpg",
				"images/project1image3.jpg"
			]
		}
	],
	display : function() {
		$("#projects").append(HTMLprojectStart);

		for(project in projects.projects) {

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",
				projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",
				projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",
				projects.projects[project].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%",
						projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
}

var education = {
	"schools" : [
		{
			"name" : "Penn State University",
			"location" : "University Park, PA",
			"degree" : "Bachelor of Science",
			"majors" : [
				"Computer Science"
				],
			"dates" : 2001,
			"url" : "http://www.psu.edu"
		},
		{
			"name" : "Penn State University",
			"location" : "University Park, PA",
			"degree" : "Master's",
			"majors" : [
				"Manufacturing Management"
				],
			"dates" : 2002,
			"url" : "http://www.psu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3561069759"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851/m-3573228854"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud775-nd"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-2239648539/e-1962768535/m-1950528601"
		},
		{
			"title" : "Into to jQuery",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud245-nd/l-3342528615/m-3343838767"
		}
	],
	display : function() {
		for(school in education.schools)
		{
			var formattedSchoolName = HTMLschoolName.replace("%data%",
				education.schools[school].name);
			// add school URL to formattedSchoolName.  URL opens in a new browser window.
			formattedSchoolName = formattedSchoolName.replace("#",
				education.schools[school].url + "\"" + " target=\"_blank\"");
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
				education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",
				education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
				education.schools[school].location);
			// A loop isn't needed since each majors array in the JSON only has one element
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
				education.schools[school].majors[0]);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		// I added a <br> before the Online Courses header so there is more space between
		// the Education and Online Course sections
		$("#education").append("<br>" + HTMLonlineClasses);

		for(onlineCourse in education.onlineCourses)
		{
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
				education.onlineCourses[onlineCourse].title);
			// add school URL to formattedSchoolName.  URL opens in a new browser window.
			formattedOnlineTitle = formattedOnlineTitle.replace("#",
				education.onlineCourses[onlineCourse].url + "\"" + " target=\"_blank\"");
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
				education.onlineCourses[onlineCourse].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",
				education.onlineCourses[onlineCourse].date);

			// HTMLonlineURL is not displayed since URL is reachable via the Title/School tag.
			// I thought this was a cleaner-looking implementation than displaying the
			// URL separately.
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
			// I added a <br> formattedOnlineDates to give a little space between
			// each online course entry.
			$(".education-entry:last").append(formattedOnlineDates + "<br>");
		}

	}

}

// log location of every page click and number of page clicks
var clicks = 0;
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
	clicks++;
	console.log("Clicks: " + clicks);
});

education.display();
work.display();
projects.display();
bio.display();