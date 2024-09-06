const closeMenu = document.getElementById("close--menu");
const openMenu = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
document.getElementById("hamburger")?.addEventListener("click", function () {
  closeMenu.classList.remove("hidden");
  sidebar.classList.remove("-translate-x-full");
  openMenu.classList.add("hidden");
});
document.getElementById("close--menu")?.addEventListener("click", function () {
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  sidebar.classList.add("-translate-x-full");
});

// Check In
$(document).ready(function () {
  $("select").niceSelect();

  // Initialize Flatpickr for Check-In Date
  flatpickr("#check-in-date-picker", {
    enableTime: false,
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
      const checkInDate = document.getElementById("check-in-selected-date");
      const updateCheckInDateText = document.getElementById(
        "check-in-updated-date",
      );
      updateCheckInDateText.textContent = dateStr;
      checkInDate.style.display = "none";
    },
  });

  // Initialize Flatpickr for Check-Out Date
  flatpickr("#check-out-date-picker", {
    enableTime: false,
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
      const checkOutDate = document.getElementById("check-out-selected-date");
      const updateCheckOutDateText = document.getElementById(
        "check-out-updated-date",
      );
      updateCheckOutDateText.textContent = dateStr;
      checkOutDate.style.display = "none";
    },
  });

  // // Select all tab elements
  // const tabs = document.querySelectorAll(".tab");

  // // Function to handle tab switching
  // function switchTab(event) {
  //   // Remove active styles from all tabs
  //   tabs.forEach((tab) => {
  //     tab.classList.remove(
  //       "text-primary",
  //       "border",
  //       "border-primary",
  //       "rounded-[20px]",
  //       "px-6",
  //       "py-1",
  //     );
  //   });

  //   // Add active styles to the clicked tab
  //   event.target.classList.add(
  //     "text-primary",
  //     "border",
  //     "border-primary",
  //     "rounded-[20px]",
  //     "px-6",
  //     "py-1",
  //   );
  // }

  // // Add click event listeners to all tabs
  // tabs.forEach((tab) => {
  //   tab.addEventListener("click", switchTab);
  // });

  // Tabs:

  const tabs = document.querySelectorAll(".tab");
  const indicator = document.querySelector(".indicator");

  const moveIndicator = (tab) => {
    const tabRect = tab?.getBoundingClientRect();
    const parentRect = tab?.parentElement?.getBoundingClientRect();

    const leftPosition = tabRect?.left - parentRect?.left;
    const topPosition = tabRect?.top - parentRect?.top;

    if (indicator) {
      indicator.style.width = tabRect.width + "px";
      indicator.style.height = tabRect.height + "px";
      indicator.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
    } else {
      console.log("indicator not found");
    }
  };

  // Initialize with the first tab
  moveIndicator(tabs[0]);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      moveIndicator(tab);

      // Update selected state for accessibility and styling
      tabs.forEach((t) => {
        t.setAttribute("aria-selected", "false");
        t.classList.remove("text-primary");
      });

      tab.setAttribute("aria-selected", "true");
      tab.classList.add("text-primary");

      // Manage tab index for keyboard navigation
      tabs.forEach((t) => t.setAttribute("tabindex", "-1"));
      tab.setAttribute("tabindex", "0");
    });
  });

  // Tabs:End

  // Owl Carousel::Start
  $(".owl-carousel").owlCarousel({
    loop: true, // Enable looping
    margin: 40, // Set margin between items
    nav: true, // Show navigation arrows
    responsive: {
      0: {
        items: 1, // Number of items for screens up to 600px wide
      },
      768: {
        items: 2, // Number of items for screens up to 1000px wide
      },
      1000: {
        items: 3, // Number of items for screens wider than 1000px
      },
    },
  });

  // Owl Carousel::End

  // Best Deals Card Title::Start
  const dealsCardTitles = document.querySelectorAll(".deals-title");
  dealsCardTitles.forEach((dealsCardTitle) => {
    dealsCardTitle.textContent =
      dealsCardTitle.textContent.slice(0, 52) + "...";
  });
  // Best Deals Card Title::End

  // Filter Section::Start
  const filterText = document.querySelector(".filter-text");
  const filterButton = document.querySelector(".filter-btn");
  const allFilters = document.querySelector(".all-filters");
  if (filterText) {
    filterButton.addEventListener("click", () => {
      if (filterText.textContent === "Hide filters") {
        filterText.textContent = "Show Filters";
        allFilters.classList.add("opacity-0", "max-h-0");
        allFilters.classList.remove(
          "opacity-100",
          "xl:max-h-[500px]",
          "md:py-12",
          "lg:py-16",
          "py-7",
        );
      } else {
        filterText.textContent = "Hide filters";
        allFilters.classList.remove("opacity-0", "max-h-0");
        allFilters.classList.add(
          "opacity-100",
          "xl:max-h-[500px]",
          "md:py-12",
          "lg:py-16",
          "py-7",
        );
      }
    });
  }
  // Filter Section::End

  // Play Video::Start
  const video = document.getElementById("video");
  const play = document.getElementById("play-btn");
  const pause = document.getElementById("pause-btn");
  const screen=window.innerWidth;

  play?.addEventListener("click", () => {
    video.play();
    play.classList.add("hidden");
    pause.classList.remove("hidden");
    video.setAttribute("loop", "");
  });
  pause?.addEventListener("click", () => {
    video.pause();
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    video.removeAttribute("loop", "");
  });

  if(screen){
    if(screen>319 && screen<768){
      video.play();
      video.setAttribute("loop", "");
    }else if(screen>767){
      video.pause();
      video.removeAttribute("loop", "");
    }
  }
  // Play Video::End
});
