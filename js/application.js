// JavaScript Document
$(document).ready(function () {
	$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
//added re-arranging function

	$('.Adding').submit(function (e) {
		e.preventDefault();
	});
	//prevents reloading of page when clicking the submit button
	
	//Places content from search input into listItem
	$(".Adding").on("click", ".btn", function () {
		//gets value of input field
		var Item = $(".typeItem").val();
		//listItem variable holds HTML content for appending listItem
		$(".typeItem").val(" ");
		//clears input field after submitting item
		
		var listItem = $('<li class="listItem">' +
							'<div class="unchecked"><p></p></div>' + '<div class="checked"><p>&#10003</p></div>'
							+ '<p>' + Item + '</p>' + '<div class="delete"><p>X</p></div>' +
							'</li>');
		if (Item == " ") {
			  console.log('Not a valid input');
			  //prevents empty submissions
		}
		else {
		//append listItem <li> to listwrap <ul>					
		$('.listwrap').append(listItem);
		}
		
		
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
		//added both states of checked and unchecked then used hide/show() to show unchecked and checked divs

		$(".listwrap").on("click", ".unchecked", function (){
			$(this).hide().parent().children(".checked").show();
		})
		$(".listwrap").on("click", ".checked", function (){
			$(this).hide().parent().children(".unchecked").show();
		})
	});
});