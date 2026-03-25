window.cfields = [];
window._show_thank_you = function(id, message, trackcmp_url, email) {
    // Leeg de formulier velden
    document.getElementById('firstname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    
    // Herstel de button
    var submitButton = document.getElementById('_form_8_submit');
    submitButton.disabled = false;
    submitButton.classList.remove('processing');
    submitButton.innerHTML = 'Reserveer nu mijn plek <i class="fa-solid fa-lock" style="font-size: 0.9em; margin-left: 5px;"></i>';
    
    // Toon het custom modal
    var modal = document.getElementById('success-modal');
    if(modal) {
        modal.classList.remove('hidden');
    } else {
        alert("Bedankt voor je inschrijving!");
    }

    // FACEBOOK LEAD EVENT TRIGGER
    if (typeof fbq === 'function') {
        fbq('track', 'Lead');
    }
};
window._show_error = function(id, message, html) {
    alert(message);
    var submitButton = document.getElementById('_form_8_submit');
    submitButton.disabled = false;
    submitButton.classList.remove('processing');
    submitButton.innerHTML = 'Reserveer nu mijn plek <i class="fa-solid fa-lock" style="font-size: 0.9em; margin-left: 5px;"></i>';
};
window._load_script = function(url, callback, isSubmit) {
    var head = document.querySelector('head'), script = document.createElement('script'), r = false;
    var submitButton = document.querySelector('#_form_8_submit');
    script.charset = 'utf-8';
    script.src = url;
    if (callback) {
        script.onload = script.onreadystatechange = function() {
            if (!r && (!this.readyState || this.readyState == 'complete')) {
                r = true;
                callback();
            }
        };
    }
    script.onerror = function() {
        if (isSubmit) {
            _show_error("8", "Sorry, je inzending is mislukt. Probeer het opnieuw.");
            submitButton.disabled = false;
            submitButton.classList.remove('processing');
        }
    }
    head.appendChild(script);
};

(function() {
    var form_to_submit = document.getElementById('_form_8_');
    var addEvent = function(element, event, func) {
        if (element.addEventListener) {
            element.addEventListener(event, func);
        } else {
            var oldFunc = element['on' + event];
            element['on' + event] = function() {
                oldFunc.apply(this, arguments);
                func.apply(this, arguments);
            };
        }
    };

    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":case"email":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};

    var form_submit = function(e) {
        e.preventDefault();
        
        // Simpel validatie check (HTML5 doet al veel)
        var firstname = document.getElementById('firstname').value;
        var email = document.getElementById('email').value;
        var phoneField = document.getElementById('phone');
        var phone = phoneField.value;
        
        if(!firstname || !email) {
            alert("Vul alstublieft uw voornaam en e-mailadres in.");
            return false;
        }

        // --- Mailblue formatterings-fix voor NL telefoonnummers ---
        // Verwijder eerst alle spaties en streepjes voor een schone basis
        var cleanPhone = phone.replace(/[\s-]/g, '');
        // Controleer of de gebruiker met (0)6 begint
        if (cleanPhone.startsWith('06')) {
            // Vervang de 0 door +31, de rest blijft
            cleanPhone = '+31' + cleanPhone.substring(1);
            phoneField.value = cleanPhone; // Zet het (onzichtbaar snel) terug in het veld voor de serialize functie
        } else if (cleanPhone.startsWith('6') && cleanPhone.length === 9) {
            cleanPhone = '+31' + cleanPhone;
            phoneField.value = cleanPhone;
        }

        var submitButton = e.target.querySelector('#_form_8_submit');
        submitButton.disabled = true;
        submitButton.classList.add('processing');
        submitButton.innerHTML = 'Bezig met inschrijven...';
        
        var serialized = _form_serialize(document.getElementById('_form_8_')).replace(/%0A/g, '\\n');
        
        // ActiveCampaign POST via jsonp work-around (standaard AC gedrag)
        _load_script('https://defitnesscoach.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
        
        return false;
    };
    addEvent(form_to_submit, 'submit', form_submit);
})();
