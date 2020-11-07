$(document).ready(function () {
	$('form').submit(function (evt){
		evt.preventDefault();
		var $searchfield =$('#search');		
		
		var flickerApi="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal=$searchfield.val();
		var flickerOptions={
			tags:animal,
			format:"json"
		};
		function displayPhotos(data){
			var photohtml='<ol class="row " >';
			$.each(data.items,function(i,photo){
				photohtml +='<li class="col-md-4">';
				photohtml +='<a href="'+photo.link+'" class="image">';
				photohtml +='<img src="'+photo.media.m+'"></a></li>';

			});
			photohtml +='</ol>';
			$('#photos').html(photohtml);
		}
		$.getJSON(flickerApi,flickerOptions,displayPhotos);
	});
});