function get_restaurants(cuisine_id, callback){
	$.ajax({
         url: "https://developers.zomato.com/api/v2.1/search?city_id=70&cuisines={cuisine_id}",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('user-key', 'b17db59020e7fbe543111e1e6c2e5ecb');},
         success: function(data) {
			callback(convertContract(data));
		 }
	});
}

