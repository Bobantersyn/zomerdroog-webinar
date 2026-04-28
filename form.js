(function() {
    var iframe = document.getElementById('hidden_iframe');
    var forms = document.querySelectorAll('.optin-form');
    var submitted = false;
    var currentSubmitButton = null;

    if (iframe) {
        // When the iframe loads, if submitted is true, it means the form was natively submitted.
        iframe.onload = function() {
            if(submitted) {
                // Toon het custom modal
                var modal = document.getElementById('success-modal');
                if(modal) {
                    modal.classList.remove('hidden');
                }
                
                // Herstel de button
                if (currentSubmitButton) {
                    currentSubmitButton.disabled = false;
                    currentSubmitButton.classList.remove('processing');
                    currentSubmitButton.innerHTML = 'Reserveer nu mijn gratis plek <i class="fa-solid fa-arrow-right" style="font-size: 0.9em; margin-left: 5px;"></i>';
                }
                
                // FACEBOOK LEAD EVENT TRIGGER
                if (typeof fbq === 'function') {
                    fbq('track', 'Lead');
                }
            }
        };
    }

    var form_submit = function(e) {
        var form = e.target;
        var firstname = form.querySelector('input[name="firstname"]').value;
        var email = form.querySelector('input[name="email"]').value;
        var phoneField = form.querySelector('input[name="phone"]');
        
        if(!firstname || !email) {
            alert("Vul alstublieft uw voornaam en e-mailadres in.");
            e.preventDefault();
            return false;
        }

        // --- Mailblue formatterings-fix voor NL telefoonnummers ---
        if (phoneField) {
            var phone = phoneField.value;
            var cleanPhone = phone.replace(/[\s-]/g, '');
            if (cleanPhone.startsWith('06')) {
                cleanPhone = '+31' + cleanPhone.substring(1);
                phoneField.value = cleanPhone;
            } else if (cleanPhone.startsWith('6') && cleanPhone.length === 9) {
                cleanPhone = '+31' + cleanPhone;
                phoneField.value = cleanPhone;
            }
        }

        currentSubmitButton = form.querySelector('button[type="submit"]') || form.querySelector('button');
        if (currentSubmitButton) {
            currentSubmitButton.disabled = true;
            currentSubmitButton.classList.add('processing');
            currentSubmitButton.innerHTML = 'Bezig met inschrijven...';
        }
        
        submitted = true;
        // The form will natively submit to target="hidden_iframe"
    };
    
    forms.forEach(function(form) {
        form.target = "hidden_iframe"; // Set target explicitly
        if (form.addEventListener) {
            form.addEventListener('submit', form_submit);
        } else {
            form.attachEvent('onsubmit', form_submit);
        }
    });
})();
