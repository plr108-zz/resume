var bio = {
    "name": "Patrick Roche",
    "role": "Web Developer",
    "welcomeMessage": "I’m a Recent Udacity Front-End Web Developer Nanodegree graduate with 14+ years of professional problem solving experience and a passion for all things web and mobile.  My portfolio includes examples of responsive web design, website performance optimization, object-oriented JavaScript, and web applications accessing JavaScript APIs via AJAX requests.  I’m familiar with working on remote teams using Google Hangouts, Slack, and Git/GitHub, and have 5 years of experience developing software using Java and C++.",

    "contacts": {
        "mobile": "724-875-3487",
        "mobileLink": "tel:724-875-3487",
        "email": "patrick.l.roche@gmail.com",
        "emailLink": "mailto:patrick.l.roche@gmail.com",
        "github": "plr108",
        "githubURL": "https://github.com/plr108",
        "portfolio": "plr108.github.io",
        "portfolioURL": "https://plr108.github.io/",
        "linkedin": "patrickroche1",
        "linkedinURL": "https://www.linkedin.com/in/patrickroche1",
        "location": "Irwin, PA",
        "locationURL": "https://www.google.com/maps/place/Irwin,+PA+15642/@40.3189343,-79.7836634,12z/data=!3m1!4b1!4m2!3m1!1s0x8834dd3f7b945281:0x3ada31dc83155eba",
    },

    "skills": [
        "JavaScript", "HTML", "CSS", "Java", "C++", "C"
    ],

    "bioPic": "images/me.jpg",

    display: function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%link%", bio.contacts.mobileLink);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email).replace("%link%", bio.contacts.emailLink);
        var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin).replace("%link%", bio.contacts.linkedinURL);
        var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio).replace("%link%", bio.contacts.portfolioURL);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%link%", bio.contacts.githubURL);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location).replace("%link%", bio.contacts.locationURL);
        var formattedBioPic = HTMLbioPic.replace("%data%", "images/me.jpg");
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        // show contact info in header and footer
        $("#topContacts, #footerContacts").append(formattedMobile);
        $("#topContacts, #footerContacts").append(formattedEmail);
        $("#topContacts, #footerContacts").append(formattedLinkedIn);
        $("#topContacts, #footerContacts").append(formattedGitHub);
        $("#topContacts, #footerContacts").append(formattedPortfolio);
        $("#topContacts, #footerContacts").append(formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            var formattedSkill = null;
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }

        // Show interactive map
        $("#mapDiv").append(googleMap);
    }
};

var work = {
    "jobs": [{
        "employer": "Philips",
        "title": "Senior Engineering Specialist",
        "location": "Plum, PA",
        "dates": "2010 - Present",
        "description": "I create and validate the processes used to service medical devices." + "  I also review deliverables for device testing software written in C, C++, and " + "National Instruments LabVIEW.",
        // I add a URL key to all items in the jobs array
        "url": "http://www.philips.com"
    }, {
        "employer": "Bechtel Plant Machinery Incorporated",
        "title": "Supplier Quality Assurance Engineer",
        "location": "Monroeville, PA",
        "dates": "2008 - 2010",
        "description": "I ensured that our company's instrumentation and control system " + "suppliers provided equipment that met Navy Nuclear Program quality system and " + "contract requirements.",
        "url": "http://www.bpmionline.com"
    }, {
        "employer": "US Army PM Transportation Information Systems",
        "title": "Software Group Lead",
        "location": "Springfield, VA",
        "dates": "2005 - 2008",
        "description": "I developed software that managed military transportation operations.  " + "I managed interfaces with other military systems, developed data exchange " + "software in Java EE, and displayed transportation-related information in web " + "applications using JavaScript and jQuery.  I also managed the work of a team " + "of three software development task leads and about 25 software developers.",
        "url": "http://www.pdamis.army.mil/"
    }, {
        "employer": "Naval Surface Warfare Center Dahlgren Division",
        "title": "Software Engineer",
        "location": "Dahlgren, VA",
        "dates": "2003 - 2005",
        "description": "I developed software used in the configuration and certification of " + "US navy tactical data and radar systems.  I created components of a software " + "model in C++ that was used to simulate tactical systems of US Navy strike " + "groups during combat scenarios.  I also developed components of a web-based " + "software project management system used to plan, execute, and assess combat " + "system interoperability tests.",
        "url": "http://www.navy.mil/local/NSWCDD/"
    }],
    display: function() {

        for (var job in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            // add work URL to formattedEmployer.  URL opens in a new browser window.
            formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url + "\"" + " target=\"_blank\"");
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
    "projects": [{
        "title": "Neighborhood Map",
        "dates": "January 2016 - February 2016",
        "description": "Developed Web Application that uses Google Maps, Wikipedia, and Flickr to show information about the ballparks of Major League Baseball.  The app uses KnockoutJS and jQuery AJAX requests.",
        "images": ["images/FEND5-1.png"],
        "demoLink": "http://plr108.github.io/portfolio/FEND5-1/index.html"
    }, {
        "title": "Website Performance Optimization Project",
        "dates": "December 2015",
        "description": "Optimized a pre-existing website to achieve a <a class='inline-link underline-link' target='_blank' href='https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fplr108.github.io%2Fportfolio%2FFEND4%2Findex.html&tab=mobile'>PageSpeed Insights score of 94/100</a>.  Optimized a pre-existing, animation-intensive website to run at 60 fps.  Please see the README in the <a class='inline-link underline-link' target='_blank' href='https://github.com/plr108/FrontEndNanodegreeProject4'>GitHub Repository</a> for more information on the optimizations I made.",
        "images": ["images/FEND4.png"],
        "demoLink": "http://plr108.github.io/portfolio/FEND4/index.html"
    }, {
        "title": "Classic Arcade Game Clone",
        "dates": "October 2015",
        "description": "Created a clone of Frogger using Object-Oriented JavaScript and HTML5 Canvas.",
        "images": ["images/FEND3.png"],
        "demoLink": "http://plr108.github.io/portfolio/FEND3/index.html"
    }, {
        "title": "Freelance Project: Masterworks Concert Chorale website",
        "dates": "October 2015 - Present",
        "description": "Used KnockoutJS and Bootstrap to create a responsive web page for a non-profit concert group in Murrysville, Pennsylvania.  •	Trained concert chorale board member to maintain the site and make minor edits.  I show the December 2015 version of the site in my portfolio.  Here is a link to the <a class='inline-link underline-link' href='http://www.mccsings.com' target='_blank'>live site</a>.",
        "images": ["images/MCC.png"],
        "demoLink": "http://plr108.github.io/portfolio/MCCKO/index.html"
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);

        for (var project in projects.projects) {

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",
                projects.projects[project].title).replace("%link%", projects.projects[project].demoLink);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",
                projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",
                projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%",
                        projects.projects[project].images[image]).replace("%link%", projects.projects[project].demoLink);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Internet",
        "degree": "Nanodegree",
        "majors": [
            "Front-End Web Developer"
        ],
        "dates": 2016,
        "url": "https://www.udacity.com"
    }, {
        "name": "Penn State University",
        "location": "University Park, PA",
        "degree": "Master's",
        "majors": [
            "Manufacturing Management"
        ],
        "dates": 2002,
        "url": "http://www.psu.edu"
    }, {
        "name": "Penn State University",
        "location": "University Park, PA",
        "degree": "Bachelor of Science",
        "majors": [
            "Computer Science"
        ],
        "dates": 2001,
        "url": "http://www.psu.edu"
    }],
    "onlineCourses": [{
        "title": "JavaScript Testing",
        "school": "Udacity",
        "date": "February 2016",
        "url": "https://www.udacity.com/course/viewer#!/c-ud549-nd"
    },{
        "title": "JavaScript Design Patterns",
        "school": "Udacity",
        "date": "January 2016",
        "url": "https://www.udacity.com/course/viewer#!/c-ud989-nd"
    },{
        "title": "Intro to AJAX",
        "school": "Udacity",
        "date": "December 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud110-nd"
    },{
        "title": "Writing READMEs",
        "school": "Udacity",
        "date": "December 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud777"
    },{
        "title": "Browser Performance Optimization",
        "school": "Udacity",
        "date": "November 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud860-nd"
    },{
        "title": "Website Performance Optimization",
        "school": "Udacity",
        "date": "October 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud884-nd"
    },{
        "title": "HTML5 Canvas",
        "school": "Udacity",
        "date": "October 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud292-nd"
    },{
        "title": "Object-Oriented JavaScript",
        "school": "Udacity",
        "date": "September 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud015-nd"
    },{
        "title": "Into to jQuery",
        "school": "Udacity",
        "date": "September 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud245-nd/l-3342528615/m-3343838767"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "September 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-2239648539/e-1962768535/m-1950528601"
    }, {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "date": "August 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": "July 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851/m-3573228854"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": "July 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3561069759"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": "July 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
    }],
    display: function() {
        for (var school in education.schools) {
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
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        // I added a <br> before the Online Courses header so there is more space between
        // the Education and Online Course sections
        $("#education").append("<br>" + HTMLonlineClasses);

        for (var onlineCourse in education.onlineCourses) {
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
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            // I added a <br> formattedOnlineDates to give a little space between
            // each online course entry.
            $(".education-entry:last").append(formattedOnlineDates + "<br>");
        }

    }

};

education.display();
work.display();
projects.display();
bio.display();
