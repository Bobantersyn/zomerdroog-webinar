(function() {
    var forms = document.querySelectorAll('.optin-form');
    var currentSubmitButton = null;

    function showSuccessModal() {
        forms.forEach(function(f) { f.reset(); });

        var enrollModal = document.getElementById('enroll-modal');
        if (enrollModal) enrollModal.classList.remove('show');
        var exitModal = document.getElementById('exit-intent-modal');
        if (exitModal) exitModal.classList.add('hidden');

        var modal = document.getElementById('success-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        if (currentSubmitButton) {
            currentSubmitButton.disabled = false;
            currentSubmitButton.classList.remove('processing');
            currentSubmitButton.innerHTML = 'Ja, ik wil gratis meedoen';
        }

        if (typeof fbq === 'function') {
            fbq('track', 'Lead');
        }
    }

    var form_submit = function(e) {
        e.preventDefault();
        var form = e.target;
        var firstname = form.querySelector('input[name="firstname"]').value;
        var email = form.querySelector('input[name="email"]').value;
        var phoneField = form.querySelector('input[name="phone"]');

        if (!firstname || !email) {
            alert("Vul alstublieft uw voornaam en e-mailadres in.");
            return false;
        }

        // --- AC/Mailblue NL phone format: +316xxxxxxxx ---
        if (phoneField && phoneField.value) {
            var raw = phoneField.value.replace(/[\s\-()+]/g, '');
            if (raw.startsWith('0031')) {
                raw = raw.substring(2);
            } else if (raw.startsWith('06')) {
                raw = '31' + raw.substring(1);
            } else if (raw.startsWith('6') && raw.length === 9) {
                raw = '31' + raw;
            }
            phoneField.value = '+' + raw;
        }

        currentSubmitButton = form.querySelector('button[type="submit"]') || form.querySelector('button');
        if (currentSubmitButton) {
            currentSubmitButton.disabled = true;
            currentSubmitButton.classList.add('processing');
            currentSubmitButton.innerHTML = 'Bezig met inschrijven...';
        }

        var formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(function() {
            console.log('[form.js] AC POST verzonden — success-modal tonen');
            showSuccessModal();
        }).catch(function(err) {
            console.warn('[form.js] fetch faalde, modal alsnog tonen', err);
            showSuccessModal();
        });
    };

    forms.forEach(function(form) {
        if (form.addEventListener) {
            form.addEventListener('submit', form_submit);
        } else {
            form.attachEvent('onsubmit', form_submit);
        }
    });
})();
