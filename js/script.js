/* add bg on scroll */

    const menuButton = document.querySelector('.nav-menu__button');
    const menu = document.querySelector('.nav-menu');
      menuButton.addEventListener('click', function(){
        menuButton.classList.add('is-active')
        menu.classList.toggle('is-active')

        const html = document.querySelector('html');
        if (menu.classList.contains('is-active')){
          html.classList.add('is-active')
        }

        else {
          html.classList.remove('is-active')
        }
        
      });

      const menuButtonSecond = document.querySelector('.menu-button');

        menuButtonSecond.addEventListener('click', function(){
            menu.classList.remove('is-active')
            menuButton.classList.remove('is-active')
        });

        


      