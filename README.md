# ZeptoApps Dashboard – README

This project is a basic multi-page dashboard with authentication and UI features, styled using Tailwind CSS. Below is a summary of the key features and functionalities implemented:

---

### 🔧 Features Implemented

1. ✅ **Boilerplate Navbar with Toggle Profile Menu**  
   - Clicking the profile picture toggles a dropdown user menu (show/hide functionality).

2. ✅ **Sign Out Functionality from Menu Bar**  
   - Clicking "Sign out" clears login state and redirects the user to the login page.

3. ✅ **Login Page with Static Authentication**  
   - A dedicated login page is added.  
   - Only valid credentials can access the protected pages.  
     ```
     Email: admin@gmail.com  
     Password: admin12345
     ```

4. ✅ **Notification Bell Button Working**  
   - Bell icon opens a dropdown with notifications like "New message", "Task completed", etc.

5. ✅ **Dashboard, Team, and Reports Pages Updated**  
   - Each page includes layout improvements and added interactive features (charts, tables, summaries).

6. ✅ **ZeptoApps Logo Working**  
   - Logo in the top-left links to the official ZeptoApps homepage.

7. ✅ **Footer Section Added**  
   - All pages now include a consistent footer with:
     - Company info  
     - Contact address  
     - Payment icons (Apple Pay, MasterCard, PayPal, Visa)  
     - Center-aligned copyright

---

### 📁 Files Overview

- `Boilerplate Nav bar.html` – Main dashboard
- `Team.html` – Team page
- `Reports.html` – Report dashboard with chart and table
- `Login.html` – Authentication page
- `menu_Toggle.js` – Contains all JavaScript for login, logout, dropdowns, and page protection

---

### ⚠️ Note
All protected pages require login. If logged out, the back button won't return you to a secure page without valid credentials.

---

> Developed for assignment / internal demo purposes only.  
> Tailwind CDN used for styling and Chart.js for visualization.
