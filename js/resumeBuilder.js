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
	]
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
	]
}

var bio = {
	"name" : "Patrick Roche",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my resume!",
	
	"contacts" : {
		"mobile" : "724-875-3487",
		"email" : "patrick.l.roche@gmail.com",
		"github" : "plr108",
		"location" : "Pittsburgh"
	},
	
	"skills" : [
		"HTML","CSS","JavaScript","hustle","loyalty","respect","grit","awesomeness"
	],
	
	"bioPic" : "images/me.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "school1", 
			"location" : "University Park, PA",
			"degree" : "school1degree",
			"majors" : [
				"major1"
				],
			"dates" : "start date - end date",
			"url" : "school1url"
		},
		{
			"name" : "school2", 
			"location" : "University Park, PA",
			"degree" : "school2degree",
			"majors" : [
				"major1"
				],
			"dates" : "start date - end date",
			"url" : "school1url"
		}
	],
	"onlineCourses" : [
		{
			"title" : "onlineCourse1 title",
			"school" : "onlineCourse1 school",
			"dates" : "start date - end date",
			"url" : "courseURL" 
		}
	]
}

function displayWork() {
	// add Name
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").append(formattedName);

	// add Role
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").append(formattedRole);

	// add mobile
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#header").append(formattedMobile);

	// add email
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#header").append(formattedEmail);

	// add github
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#header").append(formattedGithub);

	// add location
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#header").append(formattedLocation);

	// add picture
	var formattedBioPic = HTMLbioPic.replace("%data%", "images/me.jpg");
	$("#header").append(formattedBioPic);

	// add welcome message 
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	// add skills to header
	if(bio.skills.length > 0){
	  $("#header").append(HTMLskillsStart);

	  var formattedSkill = null;
	  for(i=0; i<bio.skills.length;i++){
	  	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	  	$("#skills").append(formattedSkill);
	  }
	}

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

displayWork();

// log location of every page click
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

projects.display = function() {
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

projects.display();

$("#mapDiv").append(googleMap);