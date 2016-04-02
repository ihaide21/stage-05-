//Work Section
var work = {
	"jobs": [
		{ 
			"employer": "Levin Simes",
			"title": " Research Analyst", 
			"location": "San Francisco, CA",
			"dates": "Jan 2013 - Present",
			"description": "Currently work with pharmaceutical companies"
		}, 
		{
			"employer": "Genentech",
			"title": "Manager", 
			"location": "San Francisco, CA",
			"dates": "Jan 2010 - 2013",
			"description": "Worked as an Equipment Technician"
		},
	]
};

//function displayWork() {
work.display = function(){
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle; 
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedlocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedlocation);

	var formatteddatesworked=HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formatteddatesworked);

	var fromattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(fromattedDescription);
}
};
//displayWork()
work.display();


//Projects section
var projects = {
	"projects": [
		{
			"title": "Project 1: Interactive resume project",
			"dates": "2016",
			"description": "Created an interactive resume with Javascript. This was our last project in Intro. to Programming degree, and overall it was quite helpful to wrap things up and show us how to use Java Script. Below is the screenshot of how this current page is suppose to look like :) ",
			"images": ["images/sample.jpg"
			]
			
		},
		{
			"title": "Project 2: Stage 3 Poject from Intro. to Programming class",
			"dates": "2015",
			"description": "We (students) created our own page, where we kept our notes for the whole class. (Below is a screenshot of how that project looked like.",
			"images": ["images/sample2.jpg"]
			
		}
	]	
};

//"projectImages": [ "images/stage1-pic1-index.png",
//		 "images/stage1-pic2-css.png",			
//		 "images/stage1-pic3-html.png"],

projects.display = function() {
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	var formattedpicture = HTMLprojectImage.replace("%data%", projects.projects[project].images);
	$(".project-entry:last").append(formattedpicture);
	
	}
};

projects.display();



//Education section
var education = {
	"schools": [
		{
			"name": "Mercyhurst", 
			"location": "Erie", 
			"degree": "Bacherlor's of Science",
			"majors": ["Molecular Biology"], 
			"dates" : "2008 - 2012",
			"url" : "xyz.com/"
		},
		{
			"name" : "ABC College",
			"location" : "India",
			"degree": "BS in Science",
			"majors" : "Chemistry",
			"dates" : "1995 - 1999",
			"url" : "abc.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to Programming",
			"school" : "Udacity",
			"date" : "2015 - 2016 ",
			"url" : "https://www.udacity.com"
		},
	]
};


education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool=HTMLschoolName.replace("%data%", education.schools[school].name);
		var formatteddegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchool + formatteddegree); 

		var formattedduration=HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedduration);

		var formattedlocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedlocation);

		//var formatteddegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		//$(".education-entry:last").append(formatteddegree);

		var formattedmajor=HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedmajor);

	}
	    $(".education-entry:last").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

    	for (onlineschools in education.onlineCourses){
        $("#education").append(HTMLschoolStart);

		var formattedtitles=HTMLonlineTitle.replace("%data%", education.onlineCourses[0]);
		$(".education-entry:last").append(formattedtitles);

		var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[1]);
		$(".education-entry:last").append(formattedonlineschool);

		var formattedonlinedate = HTMLonlineDates.replace("%data%", education.onlineCourses[2]);
		$(".education-entry:last").append(formattedonlinedate);

		var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[3]);
		$(".education-entry:last").append(formattedonlineurl);
}

	
};
education.display();



var bio = {
	"name" : "Irfan Haider",
	"role" : "Product Manager",
	"contacts" : {
		"mobile" : "0221647247",
		"email" : "abc@gmail.com",
		"github" : "https://github.com/ihaide21",
		"twitter" : "@twitter",
		"location" : "Germany",
		"blog" : "@blog.abc",
	},
	"welcomeMessage" : "Have a great day!",
	"skills" : ["HTML", "CSS", "Python", "Java Scripts"], 
	"biopic" : "images/simpsons.jpg"
};

bio.display=function(){
if (bio.skills.length > 0) {

	var formattedRoles = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRoles);

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLskillsStart);

	
	var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts,#footerContacts").append(formattedmobile);

	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedemail);

	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedgithub);

	var formattedlocations = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedlocations);

	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedtwitter);

	var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts,#footerContacts").append(formattedblog);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbiopic);

}
}

bio.display();



//CLICK Values
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY; 

	logClicks(x,y);
});

//console.log(LocationFinder);
$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location; 
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));

