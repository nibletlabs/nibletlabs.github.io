// Modified by Niblet Labs
//
/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //Set the tigglers
    document.getElementById('btncheck1').checked = true;
    document.getElementById('btncheck2').checked = true;
    document.getElementById('btncheck3').checked = true;

});

function myFunction() {
    //
    if (document.getElementById('btncheck1').checked === false) {        
        let list = document.querySelectorAll('[id^="id_portfolio_product"]');

        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "none";
        } 
    } else {        
        let list = document.querySelectorAll('[id^="id_portfolio_product"]');

        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "block";
        } 
    }

    //
    if (document.getElementById('btncheck2').checked === false) {        
        let list = document.querySelectorAll('[id^="id_portfolio_news"]');

        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "none";
        } 
    } else {        
        let list = document.querySelectorAll('[id^="id_portfolio_news"]');

        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "block";
        } 
    }

    //
    if (document.getElementById('btncheck3').checked === false) {        
        let list = document.querySelectorAll('[id^="id_portfolio_blog"]');

        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "none";
        } 
    } else {        
        let list = document.querySelectorAll('[id^="id_portfolio_blog"]');

        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "block";
        } 
    }
  }