$(".agregar").click(function(event) {
    event.preventDefault();

    var value = $("#newText").val();
    if (validateForm(value)) {
        $("#newText").val("");

        var newItem = $(
        `<div class="item-div">
            <li>
                <p class="item-value">${value}</p>
                <button class="check-button">check</button>
                <button class="delete-button">delete</button>
            </li>
        </div>`);

        $(".Lista").append(newItem);
    }
    else
        alert("Text field is empty");
});

$(".Lista").on('click', '.check-button', function(event) {
    event.preventDefault();
    
    var itemValue = $(this).parent().children(".item-value");

    if (itemValue.hasClass("checked"))
        itemValue.css("text-decoration", "none");       
    else
        itemValue.css("text-decoration", "line-through");

    itemValue.toggleClass("checked");
});

$(".Lista").on('click', '.delete-button', function(event) {
    var r = confirm("Do you wish to remove this item?");
    if (r) {
        var itemDiv = $(this).parent().parent();
        itemDiv.remove();
    }
});

function validateForm(value) {
    if (value == "")
        return false;
    else
        return true;
}