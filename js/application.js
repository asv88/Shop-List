// JavaScript Document

$(document).ready(function () {
	
	//Places content from search input into listItem
	$(".Adding").on("click", ".btn", function () {
		var item = $(".typeItem").val();
		$(".listItem").find("p").add(item);
		$(".listwrap").append(".listItem").show();
		$(".unchecked").show();	
	});
	
	//Append the List Item to the Shopping List
	

});