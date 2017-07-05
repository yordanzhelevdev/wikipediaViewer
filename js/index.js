function search() {
  var searchValue = document.getElementById("wikiSearch").value;
  var resultDiv = document.getElementById("results");
  var html = "";
  var myArr;
  //console.log(searchValue);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myArr = JSON.parse(this.responseText);
      //console.log(myArr[1][2]);//the title
      for (var i = 0; i < myArr[1].length; i++) {
        html += "<a href=" + myArr[3][i] + " target='_blank'>";
        html += "<div class='article'>";
        html += "<h1>" + myArr[1][i] + "</h1>";
        html += "<p>" + myArr[2][i] + "</p>";
        html += "</div>";
        html += "</a>";
      }
      resultDiv.innerHTML = html;
    }
  };

  xhttp.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
      searchValue +
      "",
    true
  );
  xhttp.send();
}