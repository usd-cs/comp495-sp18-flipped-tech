var buttons = document.getElementsByTagName("button");
var btnHome = document.querySelector("#home");
var btnCourses = document.querySelector("#courses");
var btnBookmarks = document.querySelector("#bookmarks");
var btnCalendar = document.querySelector("#calendar");



for(var i = 0; i < buttons.length; i++)
{
	buttons[i].addEventListener("mouseover", function(){
		this.classList.toggle("selected");
	})
	buttons[i].addEventListener("mouseout", function(){
		this.classList.toggle("selected");
	})
}


btnHome.addEventListener("click", function(){
	alert("Home Button Pressed");
});

btnCourses.addEventListener("click", function(){
	alert("Courses Button Pressed");
})

btnBookmarks.addEventListener("click", function(){
	alert("Bookmarks Button Pressed");
})

btnCalendar.addEventListener("click", function(){
	alert("Calendar Button Pressed");
})