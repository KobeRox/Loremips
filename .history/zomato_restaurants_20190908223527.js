function get_restaurants(cuisine_id, callback) {
  $.ajax({
    url:
      "https://developers.zomato.com/api/v2.1/search?city_id=70&cuisines=" +
      cuisine_id,
    type: "GET",
    //d323749b276f5be54a2e776c45a7ad1a
    //b17db59020e7fbe543111e1e6c2e5ecb
    beforeSend: function(xhr) {
      xhr.setRequestHeader("user-key", "d323749b276f5be54a2e776c45a7ad1a");
    },
    success: function(data) {
      callback(convertContract(data));
    }
  });
}
