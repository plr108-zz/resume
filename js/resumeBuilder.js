var bio = {
    "bioPic": "images/me.jpg",
    "name": "Patrick Roche",
    "role": "Web Developer",
    "welcomeMessage": "Web developer with 14+ years of professional problem solving experience including application development and user interface design.  Passionate about web and mobile, and eager to leverage skills built in the defense and medical device industries into a front-end development position.",
    "welcomeBullet1": "14+ years experience including application development and user interface design.",
    "welcomeBullet2": "Eager to leverage skills built in the defense and medical device industries into a front-end development position.",
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

    "languages": ["JavaScript", "HTML", "CSS", "Java", "C++", "C"],
    "frameworks_libraries": ["Knockout JS", "Bootstrap", "jQuery", "jQueryUI", "Jasmine"],
    "other_tools": ["Chrome DevTools", "Grunt", "Gulp", "Git", "GitHub"],
    "pdfResumeURL": "https://drive.google.com/file/d/0Bw9Pzles4ekkWm9Lc0l5MEc2ME0/view?usp=sharing",
    "wordResumeURL": "https://drive.google.com/file/d/0Bw9Pzles4ekkT3lEUDlVNzQ5M3M/view?usp=sharing",

    display: function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%link%", bio.contacts.mobileLink);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email).replace("%link%", bio.contacts.emailLink);
        var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin).replace("%link%", bio.contacts.linkedinURL);
        var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio).replace("%link%", bio.contacts.portfolioURL);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%link%", bio.contacts.githubURL);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location).replace("%link%", bio.contacts.locationURL);
        var formattedBioPicBig = HTMLbioPic.replace("%data%", "images/me.jpg").replace("%id%", "biopic-big");
        var formattedBioPicSmall = HTMLbioPic.replace("%data%", "images/me.jpg").replace("%id%", "biopic-small");
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedWelcomeBullet1 = HTMLwelcomeBullet.replace("%data%", bio.welcomeBullet1);
        var formattedWelcomeBullet2 = HTMLwelcomeBullet.replace("%data%", bio.welcomeBullet2);
        var formattedWordResumeLink = HTMLresumeLink.replace("%data%", "Resume Microsoft Word Format").replace("%link%", bio.wordResumeURL);
        var formattedPDFResumeLink = HTMLresumeLink.replace("%data%", "Resume PDF Format").replace("%link%", bio.pdfResumeURL);

        $("#header").prepend('<div id="top-content-container"></div>');
        $("#top-content-container").append('<div id="top-content-left"></div>');
        $("#top-content-left").append(formattedBioPicBig);
        $("#top-content-container").append('<div id="top-content-right"></div>');

        // biopic is present in both top-content-left and top-content-right.
        // Only one pic is visible.  The visible pic is determined by viewport size.
        $("#top-content-right").append('<div id="biopic-small-container"></div>');
        $("#top-content-right").append('<div id="name-role-container"></div>');
        $("#biopic-small-container").append(formattedBioPicSmall);
        $("#name-role-container").append(formattedName);
        $("#name-role-container").append(formattedRole);
        $("#name-role-container").append('<hr id="top-rule">');
        $("#top-content-right").append('<ul id="top-contacts"</ul>');

        // show contact info in header and footer
        $("#top-contacts, #footer-contacts").append(formattedMobile);
        $("#top-contacts, #footer-contacts").append(formattedEmail);
        $("#top-contacts, #footer-contacts").append(formattedLinkedIn);
        $("#top-contacts, #footer-contacts").append(formattedGitHub);
        $("#top-contacts, #footer-contacts").append(formattedPortfolio);
        $("#top-contacts, #footer-contacts").append(formattedLocation);
        $("#header").append('<ul id="welcome-bullets-list"><hr></ul>');
        $("#welcome-bullets-list").append(formattedWelcomeBullet1);
        $("#welcome-bullets-list").append(formattedWelcomeBullet2);
        $("#welcome-bullets-list").append('<hr>');
        $("#header").append('<div id="skills-container"></div>');


        if (bio.languages.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Programming Languages").replace("%id%", "skills-languages");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.languages.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.languages[i]);
                $("#skills-languages").append(formattedSkill);
            }
        }

        if (bio.frameworks_libraries.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Frameworks/Libraries").replace("%id%", "skills-fw-lib");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.frameworks_libraries.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.frameworks_libraries[i]);
                $("#skills-fw-lib").append(formattedSkill);
            }
        }

        if (bio.other_tools.length > 0) {
            var skillsStart = HTMLskillsStart.replace("%data%", "Other Tools").replace("%id%", "skills-other");
            $("#skills-container").append(skillsStart);
            var formattedSkill = null;
            for (var i = 0; i < bio.other_tools.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.other_tools[i]);
                $("#skills-other").append(formattedSkill);
            }
        }

        $("#header").append('<div id="resume-links"><hr></div>');
        $("#resume-links").append(formattedPDFResumeLink);
        $("#resume-links").append(formattedWordResumeLink);

        // Show interactive map
        $("#locations").append('<div id="mapDiv"></div>');
        $("#mapDiv").append(googleMap);
    }
};

var projects = {
    "projects": [{
        "title": "Neighborhood Map",
        "dates": "January 2016 - February 2016",
        "description": '<p>Developed web application that uses APIs for Google Maps, Wikipedia, and Flickr to show information about the ballparks of Major League Baseball.</p><p class="tech-used"><b>Technologies used:</b>  JavaScript, Knockout JS, MVVM, jQuery, jQuery UI, AJAX</p>',
        "images": ["images/FEND5-1.png"],
        "demoLink": "http://plr108.github.io/ballpark-map/index.html"
    }, {
        "title": "Website Performance Optimization Project",
        "dates": "December 2015",
        "description": '<p>Optimized website to improve PageSpeed Insights score from <a class="inline-link underline-link" target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fcameronwp.github.io%2Fudportfolio%2F&tab=mobile">28/100</a> to <a class="inline-link underline-link" target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fplr108.github.io%2Fweb-perf%2Findex.html">94/100</a>.  Optimized animation-intensive website to run at 60 fps.  Please see the README in the <a class="inline-link underline-link" target="_blank" href="https://github.com/plr108/web-perf">GitHub Repository</a> for more information on the optimizations.</p><p class="tech-used"><b>Technologies used:</b> JavaScript, Chrome DevTools, HTML, CSS</p>',
        "images": ["images/FEND4.png"],
        "demoLink": "http://plr108.github.io/web-perf/index.html"
    }, {
        "title": "Freelance Project: Masterworks Concert Chorale Website",
        "dates": "October 2015 - December 2015",
        "description": '<p>Created a responsive website for a non-profit concert group in Murrysville, Pennsylvania.  Website improvements helped to improve concert attendance by 10% and increase website traffic by over 20%.  Trained concert chorale board member to maintain the site and make minor edits.  I show the December 2015 version of the site in my portfolio.  Here is a <a class="inline-link underline-link" href="http://www.mccsings.com" target="_blank">link to the live site</a>.</p><p class="tech-used"><b>Technologies used:</b>  HTML, CSS, JavaScript, Bootstrap, jQuery, Knockout</p>',
        "images": ["images/MCC.png"],
        "demoLink": "http://plr108.github.io/mccsings/index.html"
    }, {
        "title": "Classic Arcade Game Clone",
        "dates": "October 2015",
        "description": '<p>Created web game based on the classic arcade game Frogger.  Please see the <a class="inline-link underline-link" target="_blank" href="https://github.com/plr108/feed-the-ladybugs">README in the GitHub Repository</a> for game instructions.</p><p class="tech-used"><b>Technologies used:</b>  Object-Oriented JavaScript, HTML Canvas</p>',
        "images": ["images/FEND3.png"],
        "demoLink": "http://plr108.github.io/feed-the-ladybugs/index.html"
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
    }, {
        "title": "JavaScript Design Patterns",
        "school": "Udacity",
        "date": "January 2016",
        "url": "https://www.udacity.com/course/viewer#!/c-ud989-nd"
    }, {
        "title": "Intro to AJAX",
        "school": "Udacity",
        "date": "December 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud110-nd"
    }, {
        "title": "Writing READMEs",
        "school": "Udacity",
        "date": "December 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud777"
    }, {
        "title": "Browser Performance Optimization",
        "school": "Udacity",
        "date": "November 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud860-nd"
    }, {
        "title": "Website Performance Optimization",
        "school": "Udacity",
        "date": "October 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud884-nd"
    }, {
        "title": "HTML5 Canvas",
        "school": "Udacity",
        "date": "October 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud292-nd"
    }, {
        "title": "Object-Oriented JavaScript",
        "school": "Udacity",
        "date": "September 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud015-nd"
    }, {
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

var work = {
    "jobs": [{
        "employer": "Philips Healthcare",
        "title": "Senior Engineering Specialist",
        "location": "Pittsburgh, PA",
        "dates": "2010 - Present",
        "description": "Lead the development of processes to remanufacture medical devices at over 55 Philips and external service centers.  Create validation strategies for 24 product lines resulting in zero major findings in internal and external audits.  Continually improving the procedures related to process validation, including reducing equipment qualification times by 30%.",
        "url": "http://www.usa.philips.com/healthcare"
    }, {
        "employer": "Bechtel Plant Machinery Incorporated",
        "title": "Quality Assurance Engineer",
        "location": "Monroeville, PA",
        "dates": "2008 - 2010",
        "description": "Evaluated capability of 2 Naval Nuclear Propulsion Program suppliers to manufacture equipment per contract requirements.  Performed equipment acceptance reviews and contributed to successful fielding of 2 new versions of control system components.",
        "url": "http://www.bpmionline.com"
    }, {
        "employer": "US Army PM Transportation Information Systems",
        "title": "Group Lead, Software Engineering and Interoperability",
        "location": "Springfield, VA",
        "dates": "2005 - 2008",
        "description": "Lead software development group that developed Enterprise Resource Planning solutions for military deployment, distribution, and air load planning.  Managed three development leads responsible for coordinating the work of about 25 software developers.  Optimized XML data format and reduced touchpoints with other Department of Defense systems, reducing load times by 15%.  Reviewed Java and JavaScript software deliverables, provided recommendations on software acceptance.",
        "url": "http://www.pdamis.army.mil/"
    }, {
        "employer": "Naval Surface Warfare Center Dahlgren Division",
        "title": "Software Engineer",
        "location": "Dahlgren, VA",
        "dates": "2003 - 2005",
        "description": "Created C++ software model components that tested the tactical system interoperability of 5 proposed network architectures.  Performed software testing and readiness reviews in support of 12 tactical system interoperability testing exercises.  Maintained an ASP web application used to plan, execute, and assess combat system interoperability tests.",
        "url": "http://www.navsea.navy.mil/Home/WarfareCenters/NSWCDahlgren.aspx"
    }, {
        "employer": "United States Steel Corporation",
        "title": "Engineering Intern",
        "location": "Dravosburg, PA",
        "dates": "1999 - 2002",
        "description": "Developed and maintained supervisory, control, and data acquisition software using C++ in support of 7 manufacturing lines.",
        "url": "https://www.ussteel.com/uss/portal/home"
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
bio.display();
projects.display();
education.display();
work.display();
