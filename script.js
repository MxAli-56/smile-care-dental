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
      imageUrl: "https://images.unsplash.com/photo-1606811919082-70981ad76a0d?auto=format&fit=crop&w=800&q=80",
        features: ["Instant Results", "Safe Process", "Long Lasting"],
    },
    {
      id: "implants",
      title: "Premium Dental Implants",
      description: "Permanent tooth replacement solutions.",
      priceRange: "PKR 50,000",
      icon: "anchor",
      imageUrl: "https://images.unsplash.com/photo-1609840112855-9ab5ad8f67e4?auto=format&fit=crop&w=800&q=80",
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
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
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
          <i data-lucide="${service.icon}" class="w-6 h-6 text-primary"></i>
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
          `
                  )
                  .join("")
              : ""
          }
        </div>
        <div class="flex items-center justify-between pt-6 border-t border-gray-100">
          <div>
            <p class="text-xs font-bold text-light uppercase tracking-wider mb-1">Starts From</p>
            <p class="font-display font-bold text-2xl text-primary">
              ${service.priceRange.split("-")[0].trim()}
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
        <h4 class="font-display font-bold text-xl mb-2">${doctor.name}</h4>
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
  window.open(
    "https://www.google.com/maps/search/Dental+Clinic+Gulshan+Karachi",
    "_blank"
  );
}

// FlexiBot integration
function openFlexiBot() {
  if (window.FlexiBot && typeof window.FlexiBot.toggle === "function") {
    window.FlexiBot.toggle();
  } else {
    const bubble =
      document.getElementById("flexibot-bubble") ||
      document.querySelector('[class*="flexibot"]');
    if (bubble) {
      bubble.click();
    } else {
      alert(
        "AI Assistant is currently unavailable. Please call us directly at 021-34XXXXXX"
      );
    }
  }
}

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

