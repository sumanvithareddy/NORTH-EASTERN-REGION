/* =========================================================
   NER-LINK
   Smart Logistics & Accessibility Intelligence Platform
   Dashboard JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LIVE CLOCK
    ===================================================== */

    const clock = document.getElementById("currentTime");

    function updateClock() {

        if (!clock) return;

        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateClock();

    setInterval(updateClock, 1000);


    /* =====================================================
       SIDEBAR NAVIGATION
    ===================================================== */

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", event => {

            event.preventDefault();

            navItems.forEach(nav => {
                nav.classList.remove("active");
            });

            item.classList.add("active");

        });

    });


    /* =====================================================
       MAP FILTERS
    ===================================================== */

    const mapFilters = document.querySelectorAll(".map-filter");

    mapFilters.forEach(filter => {

        filter.addEventListener("click", () => {

            mapFilters.forEach(button => {
                button.classList.remove("active-filter");
            });

            filter.classList.add("active-filter");

            const selected = filter.textContent.trim();

            showToast(`${selected} map layer selected`);

        });

    });


    /* =====================================================
       VEHICLE MOVEMENT
    ===================================================== */

    const vehicleOne = document.querySelector(".vehicle-one");
    const vehicleTwo = document.querySelector(".vehicle-two");

    let vehicleOnePosition = 0;
    let vehicleTwoPosition = 0;

    function moveVehicles() {

        if (vehicleOne) {

            vehicleOnePosition += 0.35;

            if (vehicleOnePosition > 12) {
                vehicleOnePosition = 0;
            }

            vehicleOne.style.transform =
                `translateX(${vehicleOnePosition}px)`;
        }


        if (vehicleTwo) {

            vehicleTwoPosition += 0.25;

            if (vehicleTwoPosition > 10) {
                vehicleTwoPosition = 0;
            }

            vehicleTwo.style.transform =
                `translateX(${vehicleTwoPosition}px)`;
        }

    }

    setInterval(moveVehicles, 100);


    /* =====================================================
       ALERT INTERACTIONS
    ===================================================== */

    const alerts = document.querySelectorAll(".alert-item");

    alerts.forEach(alert => {

        alert.style.cursor = "pointer";

        alert.addEventListener("click", () => {

            const title =
                alert.querySelector(".alert-content strong");

            if (title) {
                showToast(`Opening alert: ${title.textContent}`);
            }

        });

    });


    /* =====================================================
       PRIMARY ROUTE BUTTON
    ===================================================== */

    const routeButton =
        document.querySelector(".primary-button");

    if (routeButton) {

        routeButton.addEventListener("click", () => {

            showToast(
                "AI is calculating the safest alternate route..."
            );

            routeButton.innerHTML =
                "CALCULATING ROUTE <span>⟳</span>";

            routeButton.disabled = true;

            setTimeout(() => {

                routeButton.innerHTML =
                    "ALTERNATE ROUTE FOUND <span>✓</span>";

                routeButton.style.background =
                    "linear-gradient(135deg, #18d26e, #0b9e4c)";

                routeButton.style.color =
                    "#031009";

                showToast(
                    "Safe alternate route identified"
                );

            }, 1800);

        });

    }


    /* =====================================================
       NOTIFICATION BUTTON
    ===================================================== */

    const notificationButton =
        document.querySelector(".notification-button");

    if (notificationButton) {

        notificationButton.addEventListener("click", () => {

            showNotificationPanel();

        });

    }


    /* =====================================================
       PROFILE BUTTON
    ===================================================== */

    const profileButton =
        document.querySelector(".profile-button");

    if (profileButton) {

        profileButton.addEventListener("click", () => {

            showToast("Administrator profile");

        });

    }


    /* =====================================================
       VIEW ALL ALERTS
    ===================================================== */

    const viewAllButtons =
        document.querySelectorAll(".view-all");

    viewAllButtons.forEach(button => {

        button.addEventListener("click", () => {

            showToast("Loading detailed information...");

        });

    });


    /* =====================================================
       STATE HOVER INFORMATION
    ===================================================== */

    const states =
        document.querySelectorAll(".state");

    states.forEach(state => {

        state.addEventListener("click", () => {

            const stateName =
                state.textContent.trim();

            showStateInfo(stateName);

        });

    });


    /* =====================================================
       LIVE DATA SIMULATION
    ===================================================== */

    const connectivityCard =
        document.querySelector(
            ".stat-card:nth-child(1) .stat-value"
        );

    const riskCard =
        document.querySelector(
            ".stat-card:nth-child(2) .stat-value"
        );

    const vehicleCard =
        document.querySelector(
            ".stat-card:nth-child(3) .stat-value"
        );

    function simulateLiveData() {

        if (connectivityCard) {

            const value =
                (82 + Math.random() * 1.2).toFixed(1);

            connectivityCard.innerHTML =
                `${value}<span>%</span>`;
        }


        if (riskCard) {

            const risk =
                Math.floor(13 + Math.random() * 3);

            riskCard.textContent = risk;

        }


        if (vehicleCard) {

            const vehicles =
                Math.floor(124 + Math.random() * 6);

            vehicleCard.textContent = vehicles;

        }

    }

    setInterval(simulateLiveData, 8000);


    /* =====================================================
       TOOLTIP FOR MAP POINTS
    ===================================================== */

    const mapPoints =
        document.querySelectorAll(".map-point");

    mapPoints.forEach(point => {

        point.addEventListener("click", () => {

            let status = "Accessible";

            if (point.classList.contains("point-orange")) {
                status = "At Risk";
            }

            if (point.classList.contains("point-red")) {
                status = "Blocked";
            }

            showToast(`Route status: ${status}`);

        });

    });


    /* =====================================================
       SYSTEM ONLINE MESSAGE
    ===================================================== */

    setTimeout(() => {

        showToast(
            "NER-LINK intelligence system connected"
        );

    }, 1200);

});


/* =========================================================
   TOAST MESSAGE
========================================================= */

function showToast(message) {

    const existing =
        document.querySelector(".ner-toast");

    if (existing) {
        existing.remove();
    }


    const toast =
        document.createElement("div");

    toast.className = "ner-toast";

    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span>${message}</span>
    `;


    document.body.appendChild(toast);


    requestAnimationFrame(() => {

        toast.classList.add("show");

    });


    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2800);

}


/* =========================================================
   NOTIFICATION PANEL
========================================================= */

function showNotificationPanel() {

    const oldPanel =
        document.querySelector(".notification-panel");

    if (oldPanel) {

        oldPanel.remove();

        return;
    }


    const panel =
        document.createElement("div");

    panel.className =
        "notification-panel";


    panel.innerHTML = `

        <div class="notification-header">

            <div>

                <strong>Notifications</strong>

                <small>3 new updates</small>

            </div>

            <button class="close-notifications">
                ×
            </button>

        </div>


        <div class="notification-item">

            <span class="notification-dot critical-dot"></span>

            <div>

                <strong>Road blockage detected</strong>

                <small>NH-2 · Manipur · 8 min ago</small>

            </div>

        </div>


        <div class="notification-item">

            <span class="notification-dot warning-dot"></span>

            <div>

                <strong>Heavy rainfall warning</strong>

                <small>Meghalaya · 21 min ago</small>

            </div>

        </div>


        <div class="notification-item">

            <span class="notification-dot info-dot"></span>

            <div>

                <strong>Delivery delay predicted</strong>

                <small>Mizoram · 34 min ago</small>

            </div>

        </div>

    `;


    document.body.appendChild(panel);


    const close =
        panel.querySelector(
            ".close-notifications"
        );

    close.addEventListener("click", () => {

        panel.remove();

    });

}


/* =========================================================
   STATE INFORMATION
========================================================= */

function showStateInfo(stateName) {

    const information = {

        "ASSAM": "Connectivity: 92% · 4 active alerts",

        "ARUNACHAL":
            "Connectivity: 52% · 8 high-risk corridors",

        "MANIPUR":
            "Connectivity: 61% · 4 blocked routes",

        "MEGHALAYA":
            "Connectivity: 79% · Heavy rainfall",

        "MIZORAM":
            "Connectivity: 57% · 3 delivery delays",

        "NAGALAND":
            "Connectivity: 68% · 5 monitored routes",

        "TRIPURA":
            "Connectivity: 84% · Network stable",

        "SIKKIM":
            "Connectivity: 76% · Weather monitoring active"

    };


    const message =
        information[stateName] ||
        `${stateName} · Monitoring active`;


    showToast(message);

}


/* =========================================================
   ADDITIONAL UI STYLES
========================================================= */

const dynamicStyles =
document.createElement("style");

dynamicStyles.textContent = `

    .ner-toast {

        position: fixed;

        right: 28px;
        bottom: 25px;

        z-index: 9999;

        display: flex;

        align-items: center;

        gap: 9px;

        padding: 11px 15px;

        border-radius: 9px;

        background: #111b16;

        border: 1px solid rgba(24,210,110,0.2);

        color: #dce8e1;

        font-size: 9px;

        box-shadow:
            0 12px 40px rgba(0,0,0,0.45);

        transform:
            translateY(20px);

        opacity: 0;

        transition:
            all 0.3s ease;

    }


    .ner-toast.show {

        transform:
            translateY(0);

        opacity: 1;

    }


    .toast-icon {

        width: 20px;
        height: 20px;

        display: flex;

        align-items: center;
        justify-content: center;

        border-radius: 50%;

        background: rgba(24,210,110,0.12);

        color: #18d26e;

        font-size: 9px;

    }


    .notification-panel {

        position: fixed;

        top: 80px;
        right: 30px;

        z-index: 9998;

        width: 315px;

        background:
            linear-gradient(
                145deg,
                #111b16,
                #0a110d
            );

        border:
            1px solid rgba(255,255,255,0.08);

        border-radius: 14px;

        box-shadow:
            0 20px 60px rgba(0,0,0,0.55);

        overflow: hidden;

        animation:
            notificationOpen
            0.25s ease;

    }


    .notification-header {

        display: flex;

        justify-content:
            space-between;

        align-items: center;

        padding: 16px;

        border-bottom:
            1px solid rgba(255,255,255,0.06);

    }


    .notification-header strong {

        display: block;

        font-size: 11px;

    }


    .notification-header small {

        display: block;

        margin-top: 3px;

        color: #5e7167;

        font-size: 8px;

    }


    .close-notifications {

        width: 25px;
        height: 25px;

        border: none;

        border-radius: 6px;

        background:
            rgba(255,255,255,0.04);

        color: #91a39a;

        font-size: 16px;

    }


    .notification-item {

        display: flex;

        align-items: flex-start;

        gap: 10px;

        padding: 13px 16px;

        border-bottom:
            1px solid rgba(255,255,255,0.04);

    }


    .notification-item:last-child {

        border-bottom: none;

    }


    .notification-item strong {

        display: block;

        font-size: 8px;

        color: #f2f7f4;

    }


    .notification-item small {

        display: block;

        color: #5e7167;

        font-size: 7px;

        margin-top: 4px;

    }


    .notification-dot {

        width: 7px;
        height: 7px;

        flex-shrink: 0;

        border-radius: 50%;

        margin-top: 3px;

    }


    .critical-dot {

        background: #ff4d5a;

        box-shadow:
            0 0 8px rgba(255,77,90,0.5);

    }


    .warning-dot {

        background: #ff8a24;

        box-shadow:
            0 0 8px rgba(255,138,36,0.5);

    }


    .info-dot {

        background: #38a8ff;

        box-shadow:
            0 0 8px rgba(56,168,255,0.5);

    }


    @keyframes notificationOpen {

        from {

            opacity: 0;

            transform:
                translateY(-8px)
                scale(0.98);

        }

        to {

            opacity: 1;

            transform:
                translateY(0)
                scale(1);

        }

    }

`;

document.head.appendChild(dynamicStyles);
