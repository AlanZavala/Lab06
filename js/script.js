$("#add-form").submit(function(){
    event.preventDefault();
    var nameProduct = $("input").val();
    $("#list-to-buy").append(`<li><p class="product" name="0"><strong>${nameProduct}</strong></p>
                                <button class="check-btn">check</button>
                                <button class="delete-btn">delete</button>
                            </li>`);
    
});

$("#list-to-buy").on("click", ".delete-btn", function(){
    $(this).parent().remove();
});

$("#list-to-buy").on("click", ".check-btn", function(){
    var currentVal = $(this).parent().find("p").attr("name");

    if (currentVal.localeCompare("0") == 0) {
        $(this).parent().find("p").attr("name", "1");
        $(this).parent().find("p").css("text-decoration", "line-through");
    }
    else {
        $(this).parent().find("p").attr("name", "0");
        $(this).parent().find("p").css("text-decoration", "none");
    }
    
    
});