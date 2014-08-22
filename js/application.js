// JavaScript Document

$(document).ready(function () {
	$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

	$('.Adding').submit(function (e) {
		e.preventDefault();
	});
	//Places content from search input into listItem
	$(".Adding").on("click", ".btn", function () {
		//gets value of input field
		var Item = $(".typeItem").val();
		//listItem variable holds HTML content for appending listItem
			
		var listItem = $('<li class="listItem">' +
							'<div class="unchecked"><p></p></div>' + '<div class="checked"><p>&#10003</p></div>'
							+ '<p>' + Item + '</p>' + '<div class="delete"><p>X</p></div>' +
							'</li>');
		//append listItem <li> to listwrap <ul>					
		$('.listwrap').append(listItem);
		//added both states of checked and unchecked then used hide/show() to show unchecked and checked divs

		$(listItem).find(".unchecked").click(function (){
			$(this).hide();
			$(this).parent().children(".checked").show();
		})
		$(listItem).find(".checked").click(function (){
			$(this).hide();
			$(this).parent().children(".unchecked").show();
		})
		//uses mouseenter () and mouseleave () to show delete div
		$(listItem).mouseenter(function(e) {
       		  $(this).find(".delete").show().click(function (){
				  //when clicking .delete, traverse to parent of .delete (listItem) and remove listItem
			  		$(this).parent(listItem).remove();
			  })		
		}).mouseleave(function (e) {
			 $(this).find(".delete").hide();
			 //when mouse leaves hide the .delete (X)
		})
	});
});