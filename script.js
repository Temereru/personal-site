var source = $('#project-card').html();
var template = Handlebars.compile(source);
fetch();
function fetch() {
  $.ajax({
    method: "GET",
    url: 'https://api.github.com/users/temereru/repos',
    dataType: "json",
    success: function(data) {
      var repos = getData(data);
      newHtml = template({repos:repos});
      $('#Projects').append(newHtml);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
}


function getData(data) {
  var repos = [];
  $(data).each(function (id, val){
    var repo = {
      name: val.name,
      url: val.html_url
    };
    repos.push(repo);
  });
    
  console.log(repos);
  return repos;
}