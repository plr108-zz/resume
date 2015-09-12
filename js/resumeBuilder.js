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
		"HTML","CSS","JavaScript","hustle","loyalty","respect","grit","awesomeness"
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

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Job 1 Employer Name",
			"title" : "Job 1 Title",
			"location" : "Dravosburg, PA",
			"dates" : "Job 1 start date - Job 1 end date",
			"description" : "Job 1 Description" 	
		},
		{
			"employer" : "Job 2 Employer Name",
			"title" : "Job 2 Title",
			"location" : "Dahlgren, VA",
			"dates" : "Job 2 start date - Job 2 end date",
			"description" : "Job 2 Description" 	
		}
	],
	display : function() {
		// add jobs info to Work Experience
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};

var projects = {
	"projects" : [
		{	"title" : "Project 1 Title", 
			"dates" : "Project 1 start date - Project 1 end date",
			"description" : "Project 1 Description",
			"images" : [
				"images/project1image1.jpg",
				"images/project1image2.jpg"
			]
		},
		{	"title" : "Project 2 Title", 
			"dates" : "Project 2 start date - Project 2 end date",
			"description" : "Project 2 Description",
			"images" : [
				"images/project2image1.jpg",
				"images/project2image2.jpg"
			]
		}
	],
	display : function() {
		$("#projects").append(HTMLprojectStart);

		for(project in projects.projects) {

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
		
			if(projects.projects[project].images.length > 0) {	
				for(image in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
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
			"degree" : "Master",
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
		}
	],
	display : function() {
		for(school in education.schools)
		{
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			// A loop isn't needed since each majors array in the JSON only has one element
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
			
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		$("#education").append(HTMLonlineClasses);

		for(onlineCourse in education.onlineCourses)
		{
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}

	}
	
}



var clicks = 0;

// log location of every page click and number of page clicks
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

$("#mapDiv").append(googleMap);