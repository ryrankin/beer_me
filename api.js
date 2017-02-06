var OFFSET = 30;
var SEARCHTERM = '';
var RUNCALL = true;

//get data from etsy api and ajax call
var getDataFromEtsy = function(searchTerm, offset) {
	var listingRequest = {
		api_key: '9n8h7006j4x35jmb912dy08k',
		method : 'GET', 
		keywords : searchTerm,
		fields : ['listing_id', 'price', 'title', 'listing_image_id', 'url_570xN'], 
		includes: 'MainImage',
		limit: 50,
		offset: offset ? offset : 0
	};
	$.ajax({
		url : 'https://openapi.etsy.com/v2/listings/active.js',
		data : listingRequest,
		success : function(data, e){
			showResults(data);
		},
		dataType : 'jsonp'
	});
}
//append search results
function showResults(results){
	var html = "";
	if(results.results.length === 0){
		RUNCALL = false;
		html += '<p>No search results found for ' + SEARCHTERM + ', please search for something else.</p>'
	} else {
		$.each(results.results, function(index, value){
			html += '<li><a href=" ' + value.url + ' " target="_blank" ">' + '</br>';
			html += '<img src=" '+ value.MainImage.url_570xN + ' "/>' + '</a>' + '</br>';
			html += value.title + '</br>';
			html += 'USD' + " " + value.price;
			html += '<br>' + '<button class="button"><a href=" ' + value.url + ' " target="_blank" ">view on etsy</a></button>' + '</li>';	
		});
	}
	$('#searchResults').append(html);
	$('#etsyQuery').val('');
	$('.resultsText').show();
	$('#loading').hide();

}


$(document).ready(function() {
	$('.resultsText').hide();
	$('#loading').hide();
	//submit your search
	$('#etsySearch').submit(function(e){
		e.preventDefault();
		if( $('#etsyQuery').val().length === 0) {return false};
		$('#loading').show();
		$('#searchResults').html('');
		SEARCHTERM = $('#etsyQuery').val();
		$('.search').text(SEARCHTERM);
		OFFSET = 50;
		getDataFromEtsy(SEARCHTERM);
		RUNCALL = true;
	});

	// each time the user scrolls
	$(window).scroll(function() {
		// End of the document reached?
		if(Math.floor($(window).scrollTop()) + $(window).height() > $(document).height() - 5 && SEARCHTERM.length && RUNCALL) {
			$('#loading').show();
			console.log(RUNCALL);
			getDataFromEtsy(SEARCHTERM, OFFSET);
			OFFSET += 30;
		} 	
	});

	//back to top arrow
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#arrow').fadeIn();
		} else {
			$('#arrow').fadeOut();
		};
	});

});



