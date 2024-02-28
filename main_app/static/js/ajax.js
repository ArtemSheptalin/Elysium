// Ajax форм на сайте

$(function() {
    $('#index__form').on('submit', function(e){ 
        e.preventDefault();
        let popup_window = $('.popup__window');
        let error_popup = $('.popup__error');

        $.ajax({
            url: '/main-page-form-complete/',
            method: 'POST',
            data: {
                first_name: $('#first_name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success: function(response) {
                if (response.success) {
                    popup_window.css('display', 'inline-block');
                    $('body').css('overflow', 'hidden');
                    $('#first_name').val('');
                    $('#first_name').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });                 
                    $('#email').val('');
                    $('#email').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });  
                    $('#message').val('');
                    $('#message').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });
                } else {
                    error_popup.css('display', 'inline-block');
                    $('body').css('overflow', 'hidden');
                    $('#first_name').val('');
                    $('#first_name').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });                 
                    $('#email').val('');
                    $('#email').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });  
                    $('#message').val('');
                    $('#message').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });
                }
            },
            error: function(error) {
                console.log('Ошибка!!!');
            }
        });
    });
});

$(function() {
    $('#services__form').on('submit', function(e){ 
        e.preventDefault();

        $.ajax({
            url: '/services-form-complete/',
            method: 'POST',
            data: {
                first_name: $('#first_name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success: function(response) {
                if (response.success) {
                    popup_window.css('display', 'inline-block');
                    $('body').css('overflow', 'hidden');
                    $('#first_name').val('');
                    $('#first_name').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });                 
                    $('#email').val('');
                    $('#email').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });  
                    $('#message').val('');
                    $('#message').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });
                } else {
                    error_popup.css('display', 'inline-block');
                    $('body').css('overflow', 'hidden');
                    $('#first_name').val('');
                    $('#first_name').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });                 
                    $('#email').val('');
                    $('#email').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });  
                    $('#message').val('');
                    $('#message').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });
                }
            },
            error: function(error) {
                console.log('Ошибка!!!');
            }
        });
    });
});

$(function() {
    $('#career__form').on('submit', function(e){ 
        e.preventDefault();

        $.ajax({
            url: '/career-form-complete/',
            method: 'POST',
            data: {
                first_name: $('#first_name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success: function(response) {
                if (response.success) {
                    popup_window.css('display', 'inline-block');
                    $('body').css('overflow', 'hidden');
                    $('#first_name').val('');
                    $('#first_name').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });                 
                    $('#email').val('');
                    $('#email').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });  
                    $('#message').val('');
                    $('#message').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });
                } else {
                    error_popup.css('display', 'inline-block');
                    $('body').css('overflow', 'hidden');
                    $('#first_name').val('');
                    $('#first_name').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });                 
                    $('#email').val('');
                    $('#email').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });  
                    $('#message').val('');
                    $('#message').css({
                        'display': 'block',
                        'width': '100%',
                        'padding': '28px 32px',
                        'color': '#FFF',
                        'font-size': '16px',
                        'font-weight': '700',
                        'line-height': '24px',
                        'background': 'linear-gradient(#090909 0 0) padding-box, linear-gradient(313deg, rgb(88, 255, 248) 0%, rgb(122, 174, 252) 45%, rgb(152, 103, 255) 100%) border-box',
                        'border': '1.5px solid transparent',
                        'border-radius': '16px'
                    });
                }
            },
            error: function(error) {
                console.log('Error!!!');
            }
        });
    });
});

