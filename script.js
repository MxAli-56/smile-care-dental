// Clinic data (sanitized)
const CLINIC_DATA = {
  services: [
    {
      id: "scaling",
      title: "Professional Scaling & Polishing",
      description:
        "Get rid of stubborn stains and plaque for a healthy, shiny smile with our advanced ultrasonic scaling technology.",
      priceRange: "PKR 3,500 - 5,000",
      icon: "sparkles",
      imageUrl:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
      features: [
        "Painless Procedure",
        "Advanced Technology",
        "30 Minutes Session",
      ],
    },
    {
      id: "extraction",
      title: "Surgical Extractions",
      description:
        "Safe, painless removal of impacted wisdom teeth by our expert oral surgeon using minimally invasive techniques.",
      priceRange: "PKR 12,000 - 25,000",
      icon: "scissors",
      imageUrl:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
      features: ["Expert Surgeon", "Pain Management", "Post-Op Care"],
    },
    {
      id: "ortho",
      title: "Metal & Ceramic Braces",
      description:
        "Comprehensive orthodontic treatment with flexible installment plans for perfectly aligned teeth.",
      priceRange: "PKR 80,000 - 150,000",
      icon: "align-center",
      imageUrl:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
      features: [
        "Free Consultation",
        "Installment Plans",
        "Regular Adjustments",
      ],
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      description:
        "Professional teeth whitening treatments that deliver dramatic results in just one session.",
      priceRange: "PKR 8,000 - 15,000",
      icon: "sun",
      imageUrl:
        "https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?auto=format&fit=crop&q=80&w=600",
      features: ["Instant Results", "Safe Process", "Long Lasting"],
    },
    {
      id: "implants",
      title: "Premium Dental Implants",
      description: "Permanent tooth replacement solutions.",
      priceRange: "PKR 50,000",
      icon: "anchor",
      imageUrl:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
      features: ["Titanium Implants", "3D Planning", "Long-Term Stability"],
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      description:
        "Save your natural teeth with our pain-free root canal treatments using rotary technology.",
      priceRange: "PKR 7,000 - 12,000",
      icon: "droplet",
      imageUrl:
        "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=600",
      features: ["Pain-Free", "Single Visit", "Microscopic Precision"],
    },
  ],
  team: [
    {
      id: "dr-sameer",
      name: "Dr. Sameer Ahmed",
      title: "Lead General Dentist",
      specialty: "General Dentistry & Aesthetics",
      shifts: "Mon - Sat (09:00 AM - 02:00 PM)",
      imageUrl:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      experience: "15+ Years",
      education: "BDS, MDS",
    },
    {
      id: "dr-alizeh",
      name: "Dr. Alizeh Shah",
      title: "Senior Orthodontist",
      specialty: "Braces & Invisalign",
      shifts: "Tue, Thu, Sat (04:00 PM - 09:00 PM)",
      imageUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
      experience: "12+ Years",
      education: "M.Orth, FCPS",
    },
    {
      id: "dr-faraz",
      name: "Dr. Faraz Khan",
      title: "Consultant Oral Surgeon",
      specialty: "Wisdom Teeth & Implants",
      shifts: "Mon, Wed, Fri (05:00 PM - 10:00 PM)",
      imageUrl:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      experience: "18+ Years",
      education: "BDS, FDSRCS",
    },
    {
      id: "dr-sarah",
      name: "Dr. Sarah Mansoor",
      title: "Pediatric Dentist",
      specialty: "Kids Dentistry",
      shifts: "Mon - Fri (10:00 AM - 01:00 PM) | Sun (By Appointment)",
      imageUrl:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      experience: "10+ Years",
      education: "BDS, Pedo Cert",
    },
  ],
  amenities: [
    {
      title: "24/7 Generator Backup",
      detail: "Uninterrupted procedures, no load-shedding impact",
      icon: "zap",
    },
    {
      title: "Valet Parking Service",
      detail: "Professional staff to handle your vehicle",
      icon: "car",
    },
    {
      title: "RO Filtered Water",
      detail: "Pure drinking water for all patients",
      icon: "droplet",
    },
    {
      title: "Separate Prayer Area",
      detail: "Dedicated space for Salah",
      icon: "church",
    },
    {
      title: "Kid-Friendly Zone",
      detail: "Games and toys for our little champions",
      icon: "gamepad-2",
    },
    {
      title: "Digital X-Ray System",
      detail: "Low radiation, high precision imaging",
      icon: "scan",
    },
    {
      title: "Comfortable Lounge",
      detail: "Relaxing waiting area with refreshments",
      icon: "coffee",
    },
    {
      title: "Free Wi-Fi",
      detail: "High-speed internet for all visitors",
      icon: "wifi",
    },
  ],
  landmarks: [
    "Near Lucky One Mall",
    "Opposite Millenium Mall",
    "Main Rashid Minhas Road",
    "Next to Chase Up",
    "Behind Pizza Hut",
  ],
};

// Render Services
function renderServices() {
  const servicesGrid = document.getElementById("services-grid");
  if (!servicesGrid) return;

  servicesGrid.innerHTML = "";

  CLINIC_DATA.services.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.className =
      "bg-white rounded-3xl shadow-card card-hover overflow-hidden border border-gray-100";
    serviceCard.innerHTML = `
      <div class="relative h-64 overflow-hidden">
        <img
          src="${service.imageUrl}"
          alt="${service.title}"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          loading="lazy"
        >
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
          <i data-lucide="${service.icon || `sparkles`}" class="w-6 h-6 text-primary"></i>
        </div>
      </div>
      <div class="p-8">
        <h4 class="font-display font-bold text-xl mb-3">${service.title}</h4>
        <p class="text-light mb-6 leading-relaxed">${service.description}</p>
        <div class="mb-6">
          ${
            service.features
              ? service.features
                  .map(
                    (feature) => `
            <span class="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mr-2 mb-2">
              ${feature}
            </span>
          `,
                  )
                  .join("")
              : ""
          }
        </div>
        <div class="flex items-center justify-between pt-6 border-t border-gray-100">
          <div>
            <p class="text-xs font-bold text-light uppercase tracking-wider mb-1">Starts From</p>
            <p class="font-display font-bold text-2xl text-primary">
              ${service.priceRange.includes("-") ? service.priceRange.split("-")[0].trim() : service.priceRange}
            </p>
          </div>
          <button
            class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    `;
    servicesGrid.appendChild(serviceCard);
  });

  // Reinitialize icons for new elements
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// Render Team
function renderTeam() {
  const teamGrid = document.getElementById("team-grid");
  if (!teamGrid) return;

  teamGrid.innerHTML = "";

  CLINIC_DATA.team.forEach((doctor) => {
    const doctorCard = document.createElement("div");
    doctorCard.className =
      "bg-white rounded-3xl shadow-card card-hover overflow-hidden border border-gray-100";

    // 1. PLACE THE LOGIC HERE
    const nameMargin = doctor.name.includes("Alizeh") ? "mb-7" : "mb-2";

    // 2. USE THE VARIABLE IN THE TEMPLATE LITERAL BELOW
    doctorCard.innerHTML = `
      <div class="relative h-80 overflow-hidden">
        <img
          src="${doctor.imageUrl}"
          alt="${doctor.name}"
          class="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div class="absolute bottom-4 left-4">
          <span class="inline-block bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
            ${doctor.experience}
          </span>
        </div>
      </div>
      <div class="p-8">
        <p class="text-primary text-sm font-semibold uppercase tracking-wider mb-2">${doctor.title}</p>
        
        <h4 class="font-display font-bold text-xl ${nameMargin}">${doctor.name}</h4>
        
        <p class="text-light text-sm font-semibold uppercase mb-4">${doctor.specialty}</p>
        <div class="flex items-center space-x-3 text-sm bg-neutral p-4 rounded-xl mb-6">
          <i data-lucide="graduation-cap" class="w-4 h-4 text-primary flex-shrink-0"></i>
          <span class="text-dark font-medium">${doctor.education}</span>
        </div>
        <div class="flex items-center space-x-3 text-sm bg-primary/5 p-4 rounded-xl mb-6">
          <i data-lucide="clock" class="w-4 h-4 text-primary flex-shrink-0"></i>
          <span class="text-dark font-medium">${doctor.shifts}</span>
        </div>
        <button
          class="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-all"
        >
          Book Consultation
        </button>
      </div>
    `;
    teamGrid.appendChild(doctorCard);
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// Render Amenities
function renderAmenities() {
  const amenitiesList = document.getElementById("amenities-list");
  if (!amenitiesList) return;

  amenitiesList.innerHTML = "";

  CLINIC_DATA.amenities.forEach((amenity) => {
    const amenityItem = document.createElement("div");
    amenityItem.className =
      "flex items-start space-x-5 p-6 rounded-2xl bg-white shadow-card card-hover border border-gray-100";
    amenityItem.innerHTML = `
      <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
        <i data-lucide="${amenity.icon}" class="w-6 h-6 text-primary"></i>
      </div>
      <div>
        <h4 class="font-display font-bold text-lg mb-2">${amenity.title}</h4>
        <p class="text-light">${amenity.detail}</p>
      </div>
    `;
    amenitiesList.appendChild(amenityItem);
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// Render Landmarks
function renderLandmarks() {
  const landmarksList = document.getElementById("landmarks-list");
  if (!landmarksList) return;

  landmarksList.innerHTML = "";

  CLINIC_DATA.landmarks.forEach((landmark) => {
    const landmarkItem = document.createElement("div");
    landmarkItem.className = "flex items-center space-x-4 text-dark";
    landmarkItem.innerHTML = `
      <div class="w-3 h-3 rounded-full bg-primary"></div>
      <span class="font-medium">${landmark}</span>
    `;
    landmarksList.appendChild(landmarkItem);
  });
}

// Navigation scroll effect for sticky navbar
function setupNavigation() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("shadow-md", "bg-white");
      nav.classList.remove("bg-white/90");
    } else {
      nav.classList.remove("shadow-md", "bg-white");
      nav.classList.add("bg-white/90");
    }
  });
}

// Smooth scroll with offset for fixed navbar
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // extra offset for taller navbar
          behavior: "smooth",
        });
      }
    });
  });
}

// Open Google Maps in new tab
function openGoogleMaps() {
  // Direct link to Block 10, Gulshan-e-Iqbal, Karachi
  const mapUrl = "https://maps.app.goo.gl/8W3C4m7hP4FqFWNa8";
  window.open(mapUrl, "_blank");
}

// FlexiBot integration - Robust version with polling for dynamic injection
(function() {
  'use strict';

  // Global state
  let _flexibotReady = false;
  let _maxRetries = 50; // 5 seconds total (50 * 100ms)
  let _retryCount = 0;

  /**
   * Poll for FlexiBot elements to be injected by embed.js
   * This handles the race condition where user clicks before script loads
   */
  function pollForFlexiBot(callback) {
    const chatWindow = document.querySelector('.flexibot-window');
    const chatButton = document.querySelector('.flexibot-bubble');

    if (chatWindow && chatButton) {
      _flexibotReady = true;
      callback(null, { chatWindow, chatButton });
      return;
    }

    if (_retryCount < _maxRetries) {
      _retryCount++;
      setTimeout(() => pollForFlexiBot(callback), 100);
    } else {
      callback(new Error('FlexiBot elements not found after 5 seconds. Make sure embed.js is loaded.'));
    }
  }

  /**
   * Send initial greeting message (replicates embed.js sendGreeting behavior)
   * This is needed because sendGreeting is scoped inside embed.js
   */
  function sendInitialGreeting(messagesContainer, botName) {
    if (!messagesContainer || messagesContainer.children.length > 0) return;

    const name = botName || 'our clinic';
    const greetingText = `Hi there! Welcome to ${name}. How can I help you today?`;

    // Create bot message wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'bot-message-wrapper';
    wrapper.innerHTML = `
      <div class="bot-avatar-small">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;">
          <path d="M7 2C4 2 3 5 3 8C3 11 4 12 5 13C5 17 6 22 9 22C10.5 22 11 21 12 21C13 21 13.5 22 15 22C18 22 19 17 19 13C20 12 21 11 21 8C21 5 20 2 17 2H7Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="message-bubble bot-bubble">${greetingText}</div>
    `;

    messagesContainer.appendChild(wrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Add suggestion buttons
    const suggestions = [
      "Which dentist is available today?",
      "What services do you offer?",
      "I want to book an appointment"
    ];

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'suggestion-container';

    suggestions.forEach((text) => {
      const btn = document.createElement('button');
      btn.className = 'suggestion-btn';
      btn.textContent = text;
      btn.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const inputField = document.getElementById('flexibot-input');
        if (inputField) {
          inputField.value = text;
          // Trigger send by simulating Enter key
          const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
          inputField.dispatchEvent(enterEvent);
          buttonContainer.remove();
        }
      };
      buttonContainer.appendChild(btn);
    });

    messagesContainer.appendChild(buttonContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  /**
   * Main function to open FlexiBot chat
   * Uses global API if available, falls back to DOM manipulation
   */
  window.openFlexiBot = function openFlexiBot() {
    console.log('[FlexiBot] Opening chat...');

    // METHOD 1: Use global API if available (preferred)
    if (window.FlexiBot && typeof window.FlexiBot.open === 'function') {
      window.FlexiBot.open();
      console.log('[FlexiBot] Opened via global API');
      return;
    }

    // METHOD 2: Fallback to DOM polling
    pollForFlexiBot((err, elements) => {
      if (err) {
        console.error('[FlexiBot]', err.message);
        return;
      }

      const { chatWindow, chatButton } = elements;

      // Force show chat window with high z-index
      chatWindow.style.display = 'flex';
      chatWindow.style.flexDirection = 'column';
      chatWindow.style.zIndex = '2147483647'; // Max z-index to ensure visibility

      // Hide the bubble button
      chatButton.style.display = 'none';

      // Get references to internal elements
      const messages = document.getElementById('flexibot-messages');
      const input = document.getElementById('flexibot-input');

      // Scroll to bottom
      if (messages) {
        messages.scrollTop = messages.scrollHeight;

        // Send greeting if first time opening
        if (messages.children.length === 0) {
          setTimeout(() => {
            sendInitialGreeting(messages, 'Smile Care Dental');
          }, 300);
        }
      }

      // Focus input after transition
      if (input) {
        setTimeout(() => {
          try {
            input.focus();
          } catch (e) {
            // Silent fail for focus
          }
        }, 100);
      }

      console.log('[FlexiBot] Chat opened successfully');
    });
  };

  /**
   * Close FlexiBot chat programmatically
   */
  window.closeFlexiBot = function closeFlexiBot() {
    // Use global API if available
    if (window.FlexiBot && typeof window.FlexiBot.close === 'function') {
      window.FlexiBot.close();
      return;
    }

    // Fallback to DOM manipulation
    const chatWindow = document.querySelector('.flexibot-window');
    const chatButton = document.querySelector('.flexibot-bubble');

    if (chatWindow) {
      chatWindow.style.display = 'none';
    }

    if (chatButton) {
      chatButton.style.display = 'flex';
    }

    const input = document.getElementById('flexibot-input');
    if (input) input.blur();
  };

  /**
   * Toggle FlexiBot open/closed
   */
  window.toggleFlexiBot = function toggleFlexiBot() {
    // Use global API if available
    if (window.FlexiBot && typeof window.FlexiBot.toggle === 'function') {
      window.FlexiBot.toggle();
      return;
    }

    // Fallback to DOM manipulation
    const chatWindow = document.querySelector('.flexibot-window');

    if (!chatWindow) {
      window.openFlexiBot();
      return;
    }

    const isOpen = chatWindow.style.display === 'flex';
    if (isOpen) {
      window.closeFlexiBot();
    } else {
      window.openFlexiBot();
    }
  };

  // Listen for embed.js initialization complete
  window.addEventListener('flexibot:ready', () => {
    _flexibotReady = true;
    console.log('[FlexiBot] Ready event received');
  });
})();

// Intersection Observer for fade-in-up animation
function setupScrollAnimations() {
  const sections = document.querySelectorAll("section");
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// Initialize everything once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderTeam();
  renderAmenities();
  renderLandmarks();

  setupNavigation();
  setupSmoothScroll();
  setupScrollAnimations();

  console.log("Smile Care Dental Clinic website initialized successfully!");
});

