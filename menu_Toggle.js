document.addEventListener("DOMContentLoaded", function () {
  const userMenuButton = document.getElementById("user-menu-button");
  const userMenu = document.getElementById("user-dropdown");
  const notificationButton = document.getElementById("notification-button");
  const notificationDropdown = document.getElementById("notification-dropdown");

  // Toggle user menu
  if (userMenuButton && userMenu) {
    userMenu.classList.add("hidden");

    userMenuButton.addEventListener("click", function (e) {
      e.stopPropagation();
      userMenu.classList.toggle("hidden");
      notificationDropdown?.classList.add("hidden");
    });

    document.addEventListener("click", function (event) {
      if (
        !userMenu.contains(event.target) &&
        !userMenuButton.contains(event.target)
      ) {
        userMenu.classList.add("hidden");
      }
    });
  }

  // Toggle notification dropdown
  if (notificationButton && notificationDropdown) {
    notificationDropdown.classList.add("hidden");

    notificationButton.addEventListener("click", function (e) {
      e.stopPropagation();
      notificationDropdown.classList.toggle("hidden");
      userMenu?.classList.add("hidden");
    });

    document.addEventListener("click", function (event) {
      if (
        !notificationDropdown.contains(event.target) &&
        !notificationButton.contains(event.target)
      ) {
        notificationDropdown.classList.add("hidden");
      }
    });
  }

  // Static Login Logic
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "admin@gmail.com" && password === "admin12345") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "Boilerplate Nav bar.html"; // redirect to dashboard
      } else {
        alert("Invalid email or password");
      }
    });
  }

  // Sign out
  const signOutLinks = document.querySelectorAll('a[href="Login.html"]');
  signOutLinks.forEach((link) => {
    link.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
    });
  });

  // Page Protection
  const protectedPages = [
    "Boilerplate Nav bar.html",
    "Team.html",
    "Reports.html",
  ];
  const currentPage = window.location.pathname.split("/").pop();
  if (protectedPages.includes(currentPage)) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      window.location.href = "Login.html";
    }
  }

  // Prevent back after logout
  if (currentPage === "Login.html") {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
});

const ctx = document.getElementById("statusChart").getContext("2d");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Resolved", "Pending", "In Progress"],
    datasets: [
      {
        data: [123, 31, 12],
        backgroundColor: ["#10B981", "#EF4444", "#FBBF24"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // ✅ This is required to make height work
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
