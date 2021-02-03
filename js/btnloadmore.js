
/* Button Load more - v1.0.0 - 2018-02-28
* Copyright (c) 2018 NTTPS; */

(function ($) {
    $.fn.btnLoadmore = function (options) {
        var defaults = {
                showItem: 6,
                whenClickBtn: 3,
                textBtn: 'Loadmore ...',
                classBtn : '',
                setCookies: false,
                delayToScroll: 2000,

            },
            options = $.extend(defaults, options);

        this.each(function () {

            var $this = $(this),
                $childrenClass = $($this.children());

            var className = $this.attr('class');

            // Get Element Of contents to hide
            $childrenClass.hide();

            //Show Element from Options
            $childrenClass.slice(0, defaults.showItem).show();
            
            //Show Button when item in contents != 0
            // if ($childrenClass.filter(":hidden").length > 0) {
            //     $this.after('<button type="button" class="btn-loadmore '+ defaults.classBtn +'">' + defaults.textBtn + '</button>')
            // }

            $(document).on('click', '.' + className + ' .btn-loadmore', function (e) {
                e.preventDefault();
                $childrenClass.filter(':hidden').slice(0, defaults.whenClickBtn).slideDown();
                if ($childrenClass.filter(":hidden").length == 0) {
                    $('.' + className + ' .btn-loadmore').text('Hết rồi mentor ơi!!! Nhấn hoài hư chuột hết =))');
                }
                scrollDown();
               
            });

            function scrollDown() {
                $('html, body').animate({
                    scrollTop: $childrenClass.filter(":visible").last().offset().top
                }, defaults.delayToScroll);
            }
        });

        

    }
}(jQuery));