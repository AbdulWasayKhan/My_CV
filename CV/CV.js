function updatePage(){
    var now = document.getElementById("now");
     now.innerHTML = "Last Updated " + new Date(document.lastModified);
}
