// Javascript to change details displayed in the html id="centerPanel".

function showSection(idToSet) {
    console.log('idToSet is: ', idToSet);
    
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    const aerialCenter = document.getElementById('aerialCenter');
    const terrestrialCenter = document.getElementById('terrestrialCenter');
    const aquaticCenter = document.getElementById('aquaticCenter');

    const newDisplay = document.getElementById(idToSet);

    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
    aerialCenter.style.display = 'none';
    terrestrialCenter.style.display = 'none';
    aquaticCenter.style.display = 'none';
    if (idToSet == "contact") {
        // clear the email form
        document.getElementById('emailForm').reset();
    }
    newDisplay.style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("homeButton").addEventListener("click", function (event) {
        showSection("home");
        
    });

    document.getElementById("aboutButton").addEventListener("click", function (event) {
        showSection("about");
    });

    document.getElementById("contactButton").addEventListener("click", function (event) {
        showSection("contact");
    });

    document.getElementById("lhsPanelHardHatButton").addEventListener("click", function (event) {
        showSection("aerialCenter");
    });

    document.getElementById("lhsPanelNavyHatButton").addEventListener("click", function (event) {
        showSection("terrestrialCenter");
    });

    document.getElementById("lhsPanelDivingHelmetButton").addEventListener("click", function (event) {
        showSection("aquaticCenter");
    });
});