import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, onValue, set, onDisconnect, push, serverTimestamp, query, limitToLast } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Firebase Configuratie (gebaseerd op je screenshot)
// De database URL is handmatig toegevoegd naar de Europese server.
const firebaseConfig = {
  apiKey: "AIzaSyA-DbZu0rz-xvOBszuhtN5EtTLuLp36h7A",
  authDomain: "zomerdroog-webinar.firebaseapp.com",
  databaseURL: "https://zomerdroog-webinar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zomerdroog-webinar",
  storageBucket: "zomerdroog-webinar.firebasestorage.app",
  messagingSenderId: "1068215719153",
  appId: "1:1068215719153:web:cc2084d8850e04fbdb8550",
  measurementId: "G-HLN5CS7XDT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Globale exit-intent sluiter functie expliciet definieren op window, want dit is nu een module.
window.closeExitIntent = function() {
    document.getElementById("exit-intent-modal").classList.add("hidden");
};

// Start de boosters!
document.addEventListener("DOMContentLoaded", () => {
    // 1. Tabblad herinnering
    let originalTitle = document.title;
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            document.title = "Vergeet je aanmelding niet! 😱";
        } else {
            document.title = originalTitle;
        }
    });

    // 2. Exit Intent Pop-up
    let exitIntentShown = false;
    document.addEventListener("mouseout", function(e) {
        if (e.clientY < 5 && !exitIntentShown) {
            exitIntentShown = true;
            document.getElementById("exit-intent-modal").classList.remove("hidden");
        }
    });

    // 3. Echte Live Bezoekers (Firebase Presence)
    const viewersEl = document.createElement("div");
    viewersEl.className = "live-viewers-toast";
    viewersEl.innerHTML = `<span class="pulse-dot"></span> <strong><span id="viewer-count">1</span>&nbsp;anderen</strong>&nbsp;bekijken deze pagina`;
    document.body.appendChild(viewersEl);

    const viewerCountEl = document.getElementById("viewer-count");
    
    // Maak een unieke referentie aan voor deze actieve browser sessie
    const myConnectionRef = push(ref(db, 'viewers'));
    
    // Bij verbinding opslaan in database, bij sluiten automatisch wissen
    set(myConnectionRef, true);
    onDisconnect(myConnectionRef).remove();

    // Luister live (in milliseconden) naar het totaal aantal 'viewers'
    onValue(ref(db, 'viewers'), (snapshot) => {
        let count = snapshot.size || 0;
        // Ingebouwde psychologische baseline: Voegt 2 toe zodat het niet "0" toont en de vibe gezellig is ;)
        viewerCountEl.innerText = count + 2; 
    });

    // 4. Echte Aanmeldingen opslaan en uitlezen (FOMO Notifications)
    const fomoContainer = document.createElement("div");
    fomoContainer.className = "fomo-container";
    document.body.appendChild(fomoContainer);

    let activeToastTimeout = null;

    function showSignupToast(name, timestampMs) {
        if(document.hidden) return;
        
        let timeText = "zojuist";
        if (timestampMs) {
            const diffMs = Date.now() - timestampMs;
            const diffMin = Math.max(0, Math.floor(diffMs / 60000));
            if(diffMin === 0) {
                timeText = "minder dan 1 minuut geleden";
            } else {
                timeText = `${diffMin} minuten geleden`;
            }
        }

        const fomoHTML = `
            <div class="fomo-notification show">
                <div class="fomo-icon"><i class="fa-solid fa-check"></i></div>
                <div class="fomo-content">
                    <p class="fomo-name"><strong>${name}</strong> heeft zich zojuist aangemeld!</p>
                    <p class="fomo-time">${timeText}</p>
                </div>
            </div>
        `;
        
        fomoContainer.innerHTML = fomoHTML;
        
        if(activeToastTimeout) clearTimeout(activeToastTimeout);

        // Verberg na 7 seconden
        activeToastTimeout = setTimeout(() => {
            const notif = document.querySelector(".fomo-notification");
            if (notif) notif.classList.remove("show");
            setTimeout(() => {
                if(fomoContainer.firstChild) fomoContainer.removeChild(fomoContainer.firstChild);
            }, 500); 
        }, 7000); 
    }

    // Onderschep het formulier en sla de naam ECHT op in Firebase bij klikken!!!
    const form = document.querySelector(".optin-form");
    if (form) {
        form.addEventListener('submit', function(e) {
            const firstname = document.getElementById("firstname").value;
            if (firstname && firstname.trim() !== '') {
                push(ref(db, 'signups'), {
                    name: firstname.trim(),
                    timestamp: serverTimestamp() // Real backend tiijdstempel
                });
            }
        });
    }

    // Luister live (in milliseconden) naar de laatste 5 unieke inschrijvingen in the database
    const allSignupsQuery = query(ref(db, 'signups'), limitToLast(5));
    let recentSignups = [];
    
    // Zodra we voor het eerste opstarten (in de eerste seconde) verwerken we oude aanmeldingen
    let initialLoad = true;
    
    onValue(allSignupsQuery, (snapshot) => {
        const nieuweLijst = [];
        snapshot.forEach((child) => {
            nieuweLijst.push(child.val());
        });
        
        // Als we net een nieuwe inschrijving binnenkrijgen in realtime, direct tonen!
        if (!initialLoad && nieuweLijst.length > recentSignups.length) {
            const laatste = nieuweLijst[nieuweLijst.length - 1];
            if(laatste) showSignupToast(laatste.name, laatste.timestamp);
        }
        
        recentSignups = nieuweLijst;
        initialLoad = false;
    });

    // En om de FOMO er goed in te houden: toon elke 20 - 45 seconden één van de recente inschrijvers
    function showRandomRealSignup() {
        if (!document.hidden && recentSignups.length > 0) {
            const randomSignup = recentSignups[Math.floor(Math.random() * recentSignups.length)];
            showSignupToast(randomSignup.name, randomSignup.timestamp);
        }
        setTimeout(showRandomRealSignup, Math.floor(Math.random() * (45000 - 20000) + 20000));
    }
    
    setTimeout(showRandomRealSignup, 15000); 
});
