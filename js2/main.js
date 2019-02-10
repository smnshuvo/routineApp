(function($) {

    $( "#birth_date" ).datepicker({
        dateFormat: "mm - dd - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-calendar-alt"></i>',
    });

    $('.add-info-link ').on('click', function() {
        $('.add_info').toggle( "slow" );
    });

    $('#dprtmnt').parent().append('<ul class="list-item" id="newcountry" name="dprtmnt"></ul>');
    $('#dprtmnt option').each(function(){
        $('#newcountry').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#dprtmnt').remove();
    $('#newcountry').attr('id', 'dprtmnt');
    $('#dprtmnt li').first().addClass('init');
    $("#dprtmnt").on("click", ".init", function() {
        $(this).closest("#dprtmnt").children('li:not(.init)').toggle();
    });



    var allOptions = $("#dprtmnt").children('li:not(.init)');
    $("#dprtmnt").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#dprtmnt").children('.init').html($(this).html());
        allOptions.toggle('slow');
    });





    $('#signup-form').validate({
        rules : {
            first_name : {
                required: true,
            },
            last_name : {
                required: true,
            },
            phone_number : {
                required: true
            },
            password : {
                required: true
            },
            re_password : {
                required: true,
                equalTo: "#password"
            },
            email : {
                required: true,
            },


            dprtmnt : {
                required: true,
            },
        },
            
        onfocusout: function(element) {
            $(element).valid();
        },
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);