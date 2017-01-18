
(function(){
	var theImages = document.querySelectorAll(".image-holder");
	var heading = document.querySelector(".heading");
	var title = document.querySelector(".main-copy h2");
	var paragraph = document.querySelector(".main-copy p");
	var appliedClass;

	function changeElements()
	{
		heading.classList.remove(appliedClass); //Clears any existing classes so that it may change back each time
		title.classList.remove(appliedClass);

		heading.classList.add(this.id);
		title.classList.add(this.id);
		
		appliedClass = this.id;
		title.firstChild.nodeValue = dynamicContent[this.id].headline; //These are accessing parts of an object located in contentObject
		paragraph.firstChild.nodeValue = dynamicContent[this.id].text;
	}

	[].forEach.call(theImages, function(image) {
		image.addEventListener('click', changeElements, true);
	});

	title.firstChild.nodeValue = dynamicContent["spring"].headline; //These change the content on load
	paragraph.firstChild.nodeValue = dynamicContent["spring"].text;
	heading.classList.add("spring");

	
})();