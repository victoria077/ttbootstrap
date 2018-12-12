const prices = {
    101: {
        "small: green": 100,
        "small: red": 150,
        "medium: green": 200,
        "medium: red": 250,
        "large: green": 300,
        "large: red": 350,
    },
    102: {
        "small: green": 100,
        "small: red": 150,
        "medium: green": 200,
        "medium: red": 250,
        "large: green": 300,
        "large: red": 350,
    },
    103: {
        "small: green": 100,
        "small: red": 150,
        "medium: green": 200,
        "medium: red": 250,
        "large: green": 300,
        "large: red": 350,
    }
};

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".add").click(function () {
        number = $(this).attr("id");
        $("[name='selected-product']").val(number)
    })
    $(".change").change(recalc);
    $(".btn").click(req);
});

function recalc() {
    let
        size = $('.show .size').val(),
        color = $('.show .color').val(),
        number = $("[name='selected-product']").val(),
        amount = $('.show .amount').val();
    let s1 = `${size}: ${color}`;
    let s2 = "small: red";
    total = prices[number][`${size}: ${color}`] * amount;

    $('.show .total').text(`${total} $`);
};

function req() {
    let
        size1 = $('.show .size').val(),
        color1 = $('.show .color').val(),
        number1 = $("[name='selected-product']").val(),
        amount1 = $('.show .amount').val();
    jsonData = { 'productId': number1, 'color': color1, 'size': size1, 'quantity': amount1 };

    $.ajax({
        url: 'http://urlexample',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(jsonData),
        success: function (result) { },
        error: function (err) { }
    })
}
