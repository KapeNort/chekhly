'use strict';



$(document).ready(function ($) {
    function showModal(modalName) {
        $('#overlay').fadeIn(500,
            function () {
                var ModalLeft = ($(window).width() - $(modalName).outerWidth()) / 2;
                var ModalTop = (window.innerHeight - $(modalName).outerHeight()) / 2;
                setTimeout(function () {
                    $(modalName)
                        .css('display', 'block')
                        .animate({
                            opacity: 1,
                            left: ModalLeft + 'px',
                            top: ModalTop + 'px'
                        }, 300);
                }, 50)
            });
    }

    $('.js_alModal').click(function (event) {
        event.preventDefault();
        var modalClass = '.' + $(this).attr('data-modal');
        showModal(modalClass);
    })


    $('.js_alModalClose, #overlay').click(function () {
        $('.alModal').animate({
                opacity: 0
            }, 200,
            function () {
                $(this).css({
                    'display': 'none',
                    'top': '100%',
                    'left': '50%'
                });
                $('#overlay').fadeOut(400);
            }
        );
    });



    $('#Form1').submit(function () {
        if (document.forms.Form1.checkValidity()) {
            var thisModal = $(this).parents('.alModal');
            var form = $('#Form1').serialize();
            $.ajax({
                type: "POST",
                url: THEMEURL + "/email-send.php",
                data: form,
                success: function (msg) {
                    thisModal.animate({
                            opacity: 0
                        }, 200,
                        function () {
                            $(this).css({
                                'display': 'none',
                                'top': '100%',
                                'left': '50%'
                            });
                        }
                    );
                    thisModal.find('.alModalInput').val('');
                    thisModal.find('textarea').val('');
                    showModal('.alModalThank');
                }
            });
        }
    });



    $('#Form2').submit(function () {
        if (document.forms.Form2.checkValidity()) {
            var thisModal = $(this).parents('.alModal');
            var form = $('#Form2').serialize();
            $.ajax({
                type: "POST",
                url: THEMEURL + "/email-send.php",
                data: form,
                success: function (msg) {
                    thisModal.animate({
                            opacity: 0
                        }, 200,
                        function () {
                            $(this).css({
                                'display': 'none',
                                'top': '100%',
                                'left': '50%'
                            });
                        }
                    );
                    thisModal.find('.alModalInput').val('');
                    thisModal.find('textarea').val('');
                    showModal('.alModalThank');
                }
            });
        }
    });

    $('#Form3').submit(function () {
        if (document.forms.Form3.checkValidity()) {
            var thisModal = $(this).parents('.alModal');
            var form = $('#Form3').serialize();
            $.ajax({
                type: "POST",
                url: THEMEURL + "/email-send.php",
                data: form,
                success: function (msg) {
                    thisModal.animate({
                            opacity: 0
                        }, 200,
                        function () {
                            $(this).css({
                                'display': 'none',
                                'top': '100%',
                                'left': '50%'
                            });
                        }
                    );
                    thisModal.find('.order-form__inputs input').val('');
                    thisModal.find('textarea').val('');
                    showModal('.alModalThank');
                }
            });
        }
    });

    $('#Form4').submit(function () {
        if (document.forms.Form4.checkValidity()) {
            var thisModal = $(this).parents('.alModal');
            var form = $('#Form4').serialize();
            $.ajax({
                type: "POST",
                url: THEMEURL + "/email-send.php",
                data: form,
                success: function (msg) {
                    thisModal.animate({
                            opacity: 0
                        }, 200,
                        function () {
                            $(this).css({
                                'display': 'none',
                                'top': '100%',
                                'left': '50%'
                            });
                        }
                    );
                    thisModal.find('.order-form__inputs input').val('');
                    thisModal.find('textarea').val('');
                    showModal('.alModalThank');
                }
            });
        }
    });

});