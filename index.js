// $(document).ready(()=>{
//     $("button").click(()=>{
//        $.get("test.txt", (data, status)=> {
//         $("#test").html(data);
//         alert(status);
//        }) 
//     });
// });

$(document).ready(()=> {
   $("input").keyup(()=>{
    var name = $("input").val();
    $.post("suggestions.php", {
        suggestion: name
    }, (data, status)=> {
        $("#test").html(data);
    });
   }); 
});