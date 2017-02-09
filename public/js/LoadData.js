
$(document).ready(function () {
    $.getJSON( "/app/data/TaskItems.json", function( data ) {
        alert(data);
        localStorage.setItem("taskItemsList", JSON.stringify(data));
    });
});