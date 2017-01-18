
(function(){
	// var theImages = document.querySelectorAll(".image-holder"),
	// 	heading = document.querySelector(".heading"),
	// 	title = document.querySelector(".main-copy h2"),
	// 	paragraph = document.querySelector(".main-copy p"),
	// 	appliedClass;

	var $theImages = $(".image-holder"),
		$heading = $(".heading"),
		$title = $(".main-copy h2"),
		$paragraph = $(".main-copy p"),
		appliedClass;


	function changeElements()
	{
		//heading.classList.remove(appliedClass); //Clears any existing classes so that it may change back each time
		$heading.removeClass(appliedClass); //This is the jquery method for that same function
		//title.classList.remove(appliedClass);
		$title.removeClass(appliedClass);

		//appliedClass = this.id;
		appliedClass = event.currentTarget.id; //There is no "this.id" in jquery

		//heading.classList.add(this.id);
		$heading.addClass(event.currentTarget.id);
		//title.classList.add(this.id);
		$title.addClass(event.currentTarget.id);

		//title.firstChild.nodeValue = dynamicContent[this.id].headline; //These are accessing parts of an object located in contentObject
		$title.text(dynamicContent[event.currentTarget.id].headline);
		//paragraph.firstChild.nodeValue = dynamicContent[this.id].text;
		$paragraph.text(dynamicContent[event.currentTarget.id].text);
	}

	$theImages.click(function(){
		//console.log("Clicked!");
		changeElements();
	});

	// [].forEach.call(theImages, function(image) {
	// 	image.addEventListener('click', changeElements, true);
	// });

	//title.firstChild.nodeValue = dynamicContent["spring"].headline; //These change the content on load
	$title.text(dynamicContent["spring"].headline);
	//paragraph.firstChild.nodeValue = dynamicContent["spring"].text;
	$paragraph.text(dynamicContent["spring"].text);
	//heading.classList.add("spring");
	$heading.addClass("spring");
	
})();