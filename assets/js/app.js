const app = {
    
    index: 0,
    nextButton: document.querySelector('#next'),
    previousButton: document.querySelector('#previous'),
    main: document.querySelectorAll('main'),

    init: function() {
        app.previousButton.hidden = true;
        app.nextButton.addEventListener('click', app.handleNext);
        app.previousButton.addEventListener('click', app.handlePrevious);
    },

    handleNext: function() {
        app.main[app.index].hidden = true;
        app.main[app.index+1].hidden = false;
    
        app.previousButton.hidden = false;
        app.nextButton.textContent = "Page suivante";
    
        app.index = app.index + 1;
    
        if (app.index === 10) {
            app.nextButton.textContent = "Découvrir des vidéos";
        }
    
        if (app.index === 11) {
            app.nextButton.hidden = true;
        }
    },

    handlePrevious: function() {
        app.main[app.index].hidden = true;
        app.main[app.index-1].hidden = false;
    
        app.index = app.index - 1;
    
        if (app.index === 0) {
            app.previousButton.hidden = true;
            app.nextButton.textContent = "Découvrir le dossier";
        }
    
        if (app.index === 10) {
            app.nextButton.hidden = false;
            app.nextButton.textContent = "Découvrir des vidéos";
        }
    
        if (app.index < 10 && app.index > 1) {
            app.nextButton.textContent = "Page suivante";
        }
    }
}

document.addEventListener("DOMContentLoaded", app.init);