$("#form").submit(function (e) {
  e.preventDefault();
  var query = $("#search").val();
  var API_KEY = "e1346307-c03c-45e7-8d28-9bca45752fd9";
  let result = "";
  var url = "https://api.jsonstorage.net/v1/json/db8fa9a7-d029-420a-9208-fd7d0993e278/0e45d350-6e28-473a-89f0-d5ae97076c0b=" + API_KEY + "&type=web&query=" + query;
  console.log(url);
  $.get(url, function (data) {
    $("#result").html("");
    console.log(data);
    data.organic_results.forEach((res) => {
      result = (
        <div>
          <h1>${res.title}</h1>
          <br />
          <a target="_blank" href="${res.url}">
            ${res.url}
          </a>
          <p>${res.snippet}</p>
        </div>
      );

      $("#result").append(result);
    });
  });
});
