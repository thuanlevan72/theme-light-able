/*
-------------------------------------------------------------------------
* Template Name    : Fadmin - Responsive Bootstrap Admin Dashboard      * 
* Author           : ThemesBoss                                         *
* Version          : 2.0.0                                              *
* Updated          : October 2023                                         * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

$(document).ready(function() {
    
    "use strict";
    
    // Options
    var submenu_animation_speed = 100,
        submenu_opacity_animation = true, // set to "false" to remove opacity animation
        page_boxed = false,
        page_sidebar_fixed = false,
        page_sidebar_collapsed = false,
        page_header_fixed = false;
    
    // Elements
    var body = $('body');
    
    // Theme dark or light mode setting
    const bsTheme = localStorage.getItem("data-bs-theme");
    if (bsTheme === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "dark")
    }

    // Boxed Page 
    var boxed_page = function() {
        if(page_boxed === true) {
            $('.page-container').addClass('container');
        };
    };
    
    
    // Fixed Header
    var fixed_header = function() {
        if(page_header_fixed === true) {
            $('body').addClass('page-header-fixed');
        };
    };
    
    
    // Sidebar
    var page_sidebar_init = function() {
        
        // Slimscroll
        // $('.page-sidebar-inner').slimScroll({
        //     height: '100%'
        // }).mouseover();  
        
        // Fixed Sidebar
        var fixed_sidebar = function() {
            if((body.hasClass('page-sidebar-fixed'))&&(page_sidebar_fixed === false)) {
                page_sidebar_fixed = true;
            };
            
            if(page_sidebar_fixed === true) {
                body.addClass('page-sidebar-fixed');
                $('#fixed-sidebar-toggle-button').removeClass('mdi mdi-chemical-weapon');
                $('#fixed-sidebar-toggle-button').addClass('mdi mdi-chemical-weapon');
            };
            
            var fixed_sidebar_toggle = function() {
                body.toggleClass('page-sidebar-fixed');
                if(body.hasClass('page-sidebar-fixed')) {
                    page_sidebar_fixed = true;
                } else {
                    page_sidebar_fixed = false;
                }
            };
    
            $('#fixed-sidebar-toggle-button').on('click', function() {
                fixed_sidebar_toggle();
                $(this).toggleClass('mdi mdi-chemical-weapon');
                $(this).toggleClass('mdi mdi-chemical-weapon');
                return false;
            });
        };
        
        
        // Collapsed Sidebar
        var collapsed_sidebar = function() {
            if(page_sidebar_collapsed === true) {
                body.addClass('page-sidebar-collapsed');
            };
            
            var collapsed_sidebar_toggle = function() {
                body.toggleClass('page-sidebar-collapsed');
                if(body.hasClass('page-sidebar-collapsed')) {
                    page_sidebar_collapsed = true;
                } else {
                    page_sidebar_collapsed = false;
                };
                $('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
                    mouseenter: function(){
                        $('.page-sidebar').addClass('fixed-sidebar-scroll') 
                    },
                    mouseleave: function(){
                        $('.page-sidebar').removeClass('fixed-sidebar-scroll')
                    }
                }, 'li');
            };
    
                $('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
                    mouseenter: function(){
                        $('.page-sidebar').addClass('fixed-sidebar-scroll') 
                    },
                    mouseleave: function(){
                        $('.page-sidebar').removeClass('fixed-sidebar-scroll')
                    }
                }, 'li');
            $('#collapsed-sidebar-toggle-button').on('click', function() {
                collapsed_sidebar_toggle();
                return false;
            });
            
        };
        
        var small_screen_sidebar = function(){
            if(($(window).width() < 768)&&($('#fixed-sidebar-toggle-button').hasClass('mdi mdi-chemical-weapon'))){
                $('#fixed-sidebar-toggle-button').click();
            }
            $(window).on('resize', function() {
                if(($(window).width() < 768)&&($('#fixed-sidebar-toggle-button').hasClass('mdi mdi-chemical-weapon'))){
                    $('#fixed-sidebar-toggle-button').click();
                }
            });
            $('#sidebar-toggle-button').on('click', function() {
                body.toggleClass('page-sidebar-visible');
                document.getElementById('overlay')?.classList.add("show");
                return false;
            });
            $('#sidebar-toggle-button-close').on('click', function() {
                body.toggleClass('page-sidebar-visible');
                document.getElementById('overlay')?.classList.remove("show");
                return false;
            });
        };
        
        fixed_sidebar();
        collapsed_sidebar();
        small_screen_sidebar();
    };
    
        
    // Accordion menu
    var accordion_menu = function() {
        
        var select_sub_menus = $('.page-sidebar li:not(.open) .sub-menu'),
            active_page_sub_menu_link = $('.page-sidebar li.active-page > a');
        
        // Hide all sub-menus
        select_sub_menus.hide();
        
        
        if(submenu_opacity_animation === false) {
            $('.sub-menu li').each(function(i){
                $(this).addClass('animation');
            });
        };
        
        // Accordion
        $('.accordion-menu').on('click', 'a', function() {
            var sub_menu = $(this).next('.sub-menu'),
                parent_list_el = $(this).parent('li'),
                active_list_element = $('.accordion-menu > li.open'),
                show_sub_menu = function() {
                    sub_menu.slideDown(submenu_animation_speed);
                    parent_list_el.addClass('open');
                    if(submenu_opacity_animation === true) {
                        $('.open .sub-menu li').each(function(i){
                            var t = $(this);
                            setTimeout(function(){ "/"+ t.addClass('animation'); }, (i+1) * 15);
                        });
                    };
                },
                hide_sub_menu = function() {
                    if(submenu_opacity_animation === true) {
                        $('.open .sub-menu li').each(function(i){
                            var t = $(this);
                            setTimeout(function(){ t.removeClass('animation'); }, (i+1) * 5);
                        });
                    };
                    sub_menu.slideUp(submenu_animation_speed);
                    parent_list_el.removeClass('open');
                },
                hide_active_menu = function() {
                    $('.accordion-menu > li.open > .sub-menu').slideUp(submenu_animation_speed);
                    active_list_element.removeClass('open');
                };
            
            if((sub_menu.length)&&(!body.hasClass('page-sidebar-collapsed'))) {
                
                if(!parent_list_el.hasClass('open')) {
                    if(active_list_element.length) {
                        hide_active_menu();
                    };
                    show_sub_menu();
                } else {
                    hide_sub_menu();
                };
                
                return false;
                
            };
            if((sub_menu.length)&&(body.hasClass('page-sidebar-collapsed'))){
                return false;
            };
        });
        
        if($('.active-page > .sub-menu').length) {
            active_page_sub_menu_link.click();
        };
    };

    
    // Fulscreen Function
    function toggleFullScreen() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };
    
    // Navbar
    var navbar_init = function(){
        
        $('#toggle-fullscreen').on('click', function(){ 
            toggleFullScreen();
            return false;
            
        });
        
        $('#search-button').on('click', function(){
            body.toggleClass('search-open')
            if(body.hasClass('search-open')) {
                $('.search-form input').focus();
            }
        });
        
        $('#close-search').on('click', function(){
            body.toggleClass('search-open')
        });
        
    };
    
    // Right Sidebar
    var right_sidebar = function(){
        $('.right-sidebar-toggle').on('click', function(){
            var sidebarId = $(this).data("sidebar-id");
            $('#' + sidebarId).toggleClass('visible');
        });
        
        var write_message = function(){
            $(".chat-write form input").on('keypress', function (e) {
                if ((e.which === 13)&&(!$(this).val().length === 0)) {
                    if($('.right-sidebar-chat .chat-bubbles .chat-bubble:last-child').hasClass('me')) {
                        
                    $('<span class="chat-bubble-text">' + $(this).val() + '</span>').insertAfter(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child span:last-child");
                    } else {
                        $('<div class="chat-bubble me"><div class="chat-bubble-text-container"><span class="chat-bubble-text">' + $(this).val() + '</span></div></div>').insertAfter(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child");
                    };
                    $(this).val('');
                } else if(e.which === 13) {
                    return;
                }
                // var scrollTo_int = $('.right-sidebar-chat').prop('scrollHeight') + 'px';
                // $('.right-sidebar-chat').slimscroll({
                //     allowPageScroll: true,
                //     scrollTo : scrollTo_int
                // });
            });
        };
        write_message();
    };
    
    // Plugins
    var plugins_init = function(){
        // Slimscroll
        // $('.slimscroll').slimScroll();
        
        // Uniform
        var checkBox = $("input[type=checkbox]:not(.js-switch), input[type=radio]:not(.no-uniform)");
        if (checkBox.length > 0) {
            checkBox.each(function() {
                $(this).uniform();
            });
        };
        
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html, {size: 'small', color: '#637282'});
        });

        // show-overlay-button
        const overlay = document.getElementById('overlay');

        function showOverlay() {
            overlay.classList.remove('show');
            if(document.body.classList.contains("page-sidebar-visible")) {
                document.body.classList.remove("page-sidebar-visible");
            }
        }

        overlay?.addEventListener('click', showOverlay);
        
    };

    var set_layout = function(){
        localStorage.setItem("data-layout", document.documentElement.getAttribute("data-layout")?? "vertical");
    }

    //Toggle Mode
    const themeToggleSwitch = document.getElementById("theme-toggle-switch");
    themeToggleSwitch.addEventListener("click", () => {
        (document.documentElement.getAttribute("data-bs-theme") === "light") ?
            document.documentElement.setAttribute("data-bs-theme", "dark") :
            document.documentElement.setAttribute("data-bs-theme", "light");
        localStorage.setItem("data-bs-theme", document.documentElement.getAttribute("data-bs-theme"));
    });


    //breadcrumb
    var setBreadcrumb = function (breadcrumbString) {
        if(breadcrumbString){
            const breadcrumbArray = breadcrumbString.split('/');
            const breadcrumbPlaceholder = $('#breadcrumb-placeholder');
            breadcrumbPlaceholder.empty();

            breadcrumbArray.forEach((item, index) => {
                const li = $('<li class="breadcrumb-item"></li>');
                if (index === breadcrumbArray.length - 1) {
                    li.addClass('active');
                    li.text(item.trim());
                } else {
                    const a = $('<a href="#"></a>');
                    a.text(item.trim());
                    li.append(a);
                }
                breadcrumbPlaceholder.append(li);
            });
        }
    }
    
    const breadcrumbElement = $('#breadcrumb-placeholder');
    const breadcrumb = breadcrumbElement.data('breadcrumb');
    if(breadcrumb)
        setBreadcrumb(breadcrumb);


    //Active Left Sidebar Script 

     // Get the current page's identifier from the data attribute on the div
     var currentPage = $('.page-sidebar-menu').data('current-page');

     // Select the menu item links in the sidebar (inside the .page-sidebar-menu)
     var menuItemLinks = $('.page-sidebar-menu ul li a');

     // Loop through each menu item link
     menuItemLinks.each(function () {
         var menuItemPage = $(this).data('page');

         // Check if the current page's identifier matches the menu item's data-page attribute
         if (currentPage === menuItemPage) {
             // Add the "active-page" class to the parent <li> element
             $(this).closest('li').addClass('active-page');

             // Add the "active-page" class to the parent <li> element
             var parentLi = $(this).closest('li');

             parentLi.addClass('active-page');
         }
     });

     var activeLi = $('.active-page').closest('ul');

     var closestParent1 = activeLi.get(0).parentNode.closest('li');

     // Add a class to closestParent1
     $(closestParent1).addClass('open');

     // Set display: block for activeLi
     activeLi.css('display', 'block');

     // Add "animation" class to all child <li> elements
     activeLi.find('li').addClass('animation');


     //Auto run functions
    page_sidebar_init();
    boxed_page();
    accordion_menu();
    navbar_init();
    right_sidebar();
    plugins_init();
    set_layout();
    
});