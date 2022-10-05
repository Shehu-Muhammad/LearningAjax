// $(document).ready(()=>{
//     $("button").click(()=>{
//        $.get("test.txt", (data, status)=> {
//         $("#test").html(data);
//         alert(status);
//        }) 
//     });
// });

// $(document).ready(()=> {
//    $("input").keyup(()=>{
//     var name = $("input").val();
//     $.post("suggestions.php", {
//         suggestion: name
//     }, (data, status)=> {
//         $("#test").html(data);
//     });
//    }); 
// });


// AJAX call for autocomplete 
$(document).ready(function() {
	$("#search-box").keyup(function() {
		$.ajax({
			type: "POST",
			url: "index.php",
			data: 'keyword=' + $(this).val(),
			beforeSend: function() {
				$("#search-box").css("background", "#FFF url(LoaderIcon.gif) no-repeat 165px");
			},
			success: function(data) {
				$("#suggesstion-box").show();
				$("#suggesstion-box").html(data);
				$("#search-box").css("background", "#FFF");
			}
		});
	});
});
//To select a country name
function selectCountry(val) {
	$("#search-box").val(val);
	$("#suggesstion-box").hide();
}