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
  $(".destination--slider .owl-carousel").owlCarousel({
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
  $(".blogs--slider .owl-carousel").owlCarousel({
    loop: true, // Enable looping
    margin: 40, // Set margin between items
    nav: true, // Show navigation arrows
    responsive: {
      0: {
        items: 1, // Number of items for screens up to 600px wide
      },
      768: {
        items: 1, // Number of items for screens up to 1000px wide
      },
      1000: {
        items: 1, // Number of items for screens wider than 1000px
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
  const screen = window.innerWidth;

  play?.addEventListener("click", () => {
    video?.play();
    play?.classList.add("hidden");
    pause?.classList.remove("hidden");
    video?.setAttribute("loop", "");
  });
  pause?.addEventListener("click", () => {
    video?.pause();
    play?.classList.remove("hidden");
    pause?.classList.add("hidden");
    video?.removeAttribute("loop", "");
  });

  if (screen) {
    if (screen > 319 && screen < 768) {
      video?.play();
      video?.setAttribute("loop", "");
    } else if (screen > 767) {
      video?.pause();
      video?.removeAttribute("loop", "");
    }
  }
  // Play Video::End

  // Accordion::Start

  const accordionBtn = document.getElementById("accordion-btn");
  const content = document.getElementById("content");
  const accordionBeach = document.getElementById("accordion-btn-beach");
  const contentBeach = document.getElementById("content-beach");
  const accordionCity = document.getElementById("city");
  const contentCity = document.getElementById("content-city");
  const accordionMountain = document.getElementById("mountain");
  const contentMountain = document.getElementById("content-mountain");
  const accordionNews = document.getElementById("news");
  const contentNews = document.getElementById("content-news");

  // accordionBtn?.addEventListener("click", () => {
  //   if (content.style.maxHeight) {
  //     content.style.maxHeight = null;
  //   } else {
  //     content.style.maxHeight = content.scrollHeight + "px";
  //   }
  // });

  // accordionBeach?.addEventListener("click", () => {
  //   if (contentBeach.style.maxHeight) {
  //     contentBeach.style.maxHeight = null;
  //   } else {
  //     contentBeach.style.maxHeight = contentBeach.scrollHeight + "px";
  //   }
  // });

  // accordionCity?.addEventListener("click", () => {
  //   if (contentCity.style.maxHeight) {
  //     contentCity.style.maxHeight = null;
  //   } else {
  //     contentCity.style.maxHeight = contentCity.scrollHeight + "px";
  //   }
  // });

  // accordionMountain?.addEventListener("click", () => {
  //   if (contentMountain.style.maxHeight) {
  //     contentMountain.style.maxHeight = null;
  //   } else {
  //     contentMountain.style.maxHeight = contentMountain.scrollHeight + "px";
  //   }
  // });

  // accordionNews?.addEventListener("click", () => {
  //   if (contentNews.style.maxHeight) {
  //     contentNews.style.maxHeight = null;
  //   } else {
  //     contentNews.style.maxHeight = contentNews.scrollHeight + "px";
  //   }
  // });

  const accordionButtons = document.querySelectorAll(".accordion-btn");
  accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener("click", () => {
      const currentAccordionContent =
        accordionButton.querySelector(".accordion-content");
      const isOpen =
        currentAccordionContent.style.maxHeight &&
        currentAccordionContent.style.maxHeight !== "0px";

      const accordionContents = document.querySelectorAll(".accordion-content");
      accordionContents.forEach((accordionContent) => {
        accordionContent.style.maxHeight = "0";
      });

      if (isOpen) {
        currentAccordionContent.style.maxHeight = "0";
      } else {
        currentAccordionContent.style.maxHeight =
          currentAccordionContent.scrollHeight + "px";
      }
    });
  });
  // Accordion::End
});

// ====Solaimain====
// sort svg color change
const sortSvg1 = document.getElementById("filtering-click-sort-svg1");
const sortSvg2 = document.getElementById("filtering-click-sort-svg2");

function changeLayout(svg1, svg2) {
  svg1.classList.add("svg-active");
  svg2.classList.remove("svg-active");
}

sortSvg1?.addEventListener("click", () => {
  changeLayout(sortSvg1, sortSvg2);
});

sortSvg2?.addEventListener("click", () => {
  changeLayout(sortSvg2, sortSvg1);
});

// change favIcon fill
const favIcon = document.querySelectorAll(".filtering-card-fav-icon");
let toggle = true;

function changeSvgFill(svg) {
  if (toggle) {
    svg.children[0].style.fill = "#1CA8CB";
    toggle = false;
  } else {
    svg.children[0].style.fill = "white";
    toggle = true;
  }
}

favIcon?.forEach((item) => {
  item.addEventListener("click", () => {
    changeSvgFill(item);
  });
});

$(".destination-filtering-card-carousel .owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
});

// accordion
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const section = this.parentElement;
    const content = section.querySelector(".accordion-content");
    const allContents = document.querySelectorAll(".accordion-content");

    allContents.forEach((c) => {
      if (c !== content) {
        c.style.maxHeight = null;
        c.style.padding = "0 15px";
        c.parentElement.classList.remove("active");
      }
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 15px";
      section.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "15px";
      section.classList.add("active");
    }
  });
});

// duration range input
const durationRange = document.getElementById("duration-range-input");
const durationRangeMax = document.getElementById("duration-range-max-value");
const priceRange = document.getElementById("price-range-input");
const priceRangeMax = document.getElementById("price-range-max-value");

function priceRangeSlide(a) {
  priceRangeMax.innerText = `$ ${a}`;
}

function durationRangeSlide(a) {
  durationRangeMax.innerText = ` ${a} Days`;
}

// date range picker

$('input[name="daterange"]').daterangepicker({
  ranges: {
    Today: [moment(), moment()],
  },
});

$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
      minYear: 2024,
      maxYear: parseInt(moment().format("YYYY"), 10),
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD"),
      );
    },
  );
});

$(function () {
  $('input[name="birthday"]').daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 2024,
      maxYear: parseInt(moment().format("YYYY"), 10),
    },
    function (start, end, label) {
      var years = moment().diff(start, "years");
    },
  );
});

// ====Solaimain====
