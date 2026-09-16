/* =========================================================
   NER-LINK
   AI Smart Logistics & Accessibility Intelligence Platform
   ========================================================= */


/* ================= SCREEN NAVIGATION ================= */

const navItems = document.querySelectorAll(".nav-item");
const screens = document.querySelectorAll(".screen");

const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");


const screenInfo = {

    dashboard: {
        title: "Regional Operations Dashboard",
        subtitle: "AI-powered logistics and accessibility intelligence"
    },

    map: {
        title: "Live Accessibility Map",
        subtitle: "GIS-powered regional connectivity monitoring"
    },

    ai: {
        title: "AI Risk Prediction Engine",
        subtitle: "Predictive disruption and route optimization"
    },

    logistics: {
        title: "Logistics Operations",
        subtitle: "Essential commodity and vehicle monitoring"
    },

    emergency: {
        title: "Emergency Response Center",
        subtitle: "Priority disaster and emergency logistics"
    },

    reports: {
        title: "Field Intelligence",
        subtitle: "Geo-tagged incident reporting and offline sync"
    },

    analytics: {
        title: "Regional Analytics",
        subtitle: "Operational insights and connectivity intelligence"
    }

};


function openScreen(screenName) {

    screens.forEach(screen => {

        screen.classList.remove("active-screen");

    });


    const selectedScreen =
        document.getElementById(screenName);

    if (selectedScreen) {

        selectedScreen.classList.add("active-screen");

    }


    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.screen === screenName) {

            item.classList.add("active");

        }

    });


    if (screenInfo[screenName]) {

        pageTitle.textContent =
            screenInfo[screenName].title;

        pageSubtitle.textContent =
            screenInfo[screenName].subtitle;

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Sidebar */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        openScreen(item.dataset.screen);

    });

});


/* Buttons that open screens */

document.querySelectorAll("[data-screen-btn]").forEach(button => {

    button.addEventListener("click", () => {

        openScreen(button.dataset.screenBtn);

    });

});


/* ================= LIVE CLOCK ================= */

function updateClock() {

    const clock =
        document.getElementById("currentTime");

    if (!clock) return;


    const now = new Date();


    const time =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });


    clock.textContent = time;

}


updateClock();

setInterval(updateClock, 1000);


/* ================= NOTIFICATIONS ================= */

const notificationBtn =
    document.getElementById("notificationBtn");

const notificationPanel =
    document.getElementById("notificationPanel");


notificationBtn.addEventListener("click", event => {

    event.stopPropagation();

    notificationPanel.classList.toggle("show");

});


document.addEventListener("click", event => {

    if (
        !notificationPanel.contains(event.target) &&
        !notificationBtn.contains(event.target)
    ) {

        notificationPanel.classList.remove("show");

    }

});


/* ================= AI ANALYSIS ================= */

const analyzeBtn =
    document.getElementById("analyzeBtn");

const riskNumber =
    document.getElementById("riskNumber");

const bigRisk =
    document.getElementById("bigRisk");


if (analyzeBtn) {

    analyzeBtn.addEventListener("click", () => {

        analyzeBtn.textContent =
            "◌ Analyzing Route...";


        setTimeout(() => {

            const newRisk =
                Math.floor(Math.random() * 25) + 40;


            if (riskNumber) {

                riskNumber.textContent =
                    newRisk;

            }


            if (bigRisk) {

                bigRisk.textContent =
                    newRisk;

            }


            analyzeBtn.textContent =
                "✓ Analysis Complete";


            showToast(
                "AI analysis completed. Alternate route identified."
            );


            setTimeout(() => {

                analyzeBtn.textContent =
                    "◈ Run AI Route Analysis";

            }, 2500);


        }, 1600);

    });

}


/* ================= MAP FILTERS ================= */

const mapFilters =
    document.querySelectorAll(".map-filter");


mapFilters.forEach(filter => {

    filter.addEventListener("click", () => {

        mapFilters.forEach(item => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        showToast(
            filter.textContent +
            " layer enabled"
        );

    });

});


/* ================= LARGE MAP FILTERS ================= */

const largeFilters =
    document.querySelectorAll(".filter-button");


largeFilters.forEach(filter => {

    filter.addEventListener("click", () => {

        largeFilters.forEach(item => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        showToast(
            filter.textContent +
            " map layer selected"
        );

    });

});


/* ================= VEHICLE SIMULATION ================= */

const vehicleOne =
    document.querySelector(".vehicle-one");

const vehicleTwo =
    document.querySelector(".vehicle-two");


function moveVehicles() {

    if (!vehicleOne || !vehicleTwo) return;


    const positionsOne = [

        ["45%", "42%"],
        ["50%", "46%"],
        ["55%", "40%"],
        ["59%", "47%"],
        ["53%", "53%"]

    ];


    const positionsTwo = [

        ["58%", "61%"],
        ["63%", "58%"],
        ["66%", "64%"],
        ["60%", "69%"],
        ["55%", "64%"]

    ];


    const randomOne =
        positionsOne[
            Math.floor(Math.random() * positionsOne.length)
        ];


    const randomTwo =
        positionsTwo[
            Math.floor(Math.random() * positionsTwo.length)
        ];


    vehicleOne.style.left =
        randomOne[0];

    vehicleOne.style.top =
        randomOne[1];


    vehicleTwo.style.left =
        randomTwo[0];

    vehicleTwo.style.top =
        randomTwo[1];

}


setInterval(moveVehicles, 4000);


/* ================= MAP POINTS ================= */

document.querySelectorAll(".map-point").forEach(point => {

    point.addEventListener("click", () => {

        if (point.classList.contains("point-red")) {

            showToast(
                "⚠ Critical disruption detected at this location."
            );

        }

        else if (point.classList.contains("point-orange")) {

            showToast(
                "⚠ AI identifies elevated route risk."
            );

        }

        else {

            showToast(
                "✓ Route currently accessible."
            );

        }

    });

});


/* ================= STATE INFORMATION ================= */

const states =
    document.querySelectorAll(".state");


const stateMessages = {

    ASSAM:
        "Assam: 91% regional connectivity. Main corridors operational.",

    ARUNACHAL:
        "Arunachal Pradesh: Elevated landslide risk detected.",

    MANIPUR:
        "Manipur: 3 corridors require additional monitoring.",

    MEGHALAYA:
        "Meghalaya: Heavy rainfall may affect mountain routes.",

    MIZORAM:
        "Mizoram: Aizawl–Silchar corridor currently operational.",

    NAGALAND:
        "Nagaland: Moderate traffic and weather risk.",

    TRIPURA:
        "Tripura: Essential supply routes functioning normally.",

    SIKKIM:
        "Sikkim: Mountain corridor monitoring active."

};


states.forEach(state => {

    state.addEventListener("click", () => {

        const name =
            state.textContent.trim();

        const message =
            stateMessages[name] ||
            "Regional monitoring active.";

        showToast(message);

    });

});


/* ================= ALERT INTERACTION ================= */

document.querySelectorAll(".alert-item").forEach(alert => {

    alert.addEventListener("click", () => {

        const title =
            alert.querySelector("h4");

        if (title) {

            showToast(
                "Alert selected: " +
                title.textContent
            );

        }

    });

});


/* ================= VIEW ALL ================= */

document.querySelector(".view-all")?.addEventListener(
    "click",
    () => {

        showToast(
            "Showing all active regional alerts."
        );

    }
);


/* ================= FIELD REPORT ================= */

const reportForm =
    document.getElementById("reportForm");


if (reportForm) {

    reportForm.addEventListener("submit", event => {

        event.preventDefault();


        showToast(
            "✓ Field report submitted and queued for synchronization."
        );


        reportForm.reset();

    });

}


/* ================= DELIVERY SIMULATION ================= */

const deliveryCount =
    document.getElementById("deliveryCount");


const vehicleCount =
    document.getElementById("vehicleCount");


function updateLiveNumbers() {

    if (deliveryCount) {

        const value =
            320 +
            Math.floor(Math.random() * 15);

        deliveryCount.textContent =
            value;

    }


    if (vehicleCount) {

        const value =
            140 +
            Math.floor(Math.random() * 15);

        vehicleCount.textContent =
            value;

    }

}


setInterval(updateLiveNumbers, 7000);


/* ================= TOAST ================= */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {

        oldToast.remove();

    }


    const toast =
        document.createElement("div");


    toast.className =
        "toast";


    toast.textContent =
        message;


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 3200);

}


/* ================= PROFILE ================= */

const profileButton =
    document.querySelector(".profile-button");


if (profileButton) {

    profileButton.addEventListener("click", () => {

        showToast(
            "NER Operations Administrator"
        );

    });

}


/* ================= INITIAL DEMO MESSAGE ================= */

setTimeout(() => {

    showToast(
        "NER-LINK intelligence system online."
    );

}, 1000);


/* ================= CONSOLE ================= */

console.log(
    "%cNER-LINK",
    "color:#20e58a;font-size:24px;font-weight:bold;"
);

console.log(
    "AI Smart Logistics & Accessibility Intelligence Platform"
);

console.log(
    "Prototype simulation initialized successfully."
);
