---

# LanguageLounge 🌐

**LanguageLounge** is an interactive web platform for live language practice. Users can join group conversation tables, book private 1-on-1 sessions, and invite friends to private rooms for collaborative learning. The platform is designed for learners of all levels and supports multiple languages including Marathi, Sanskrit, English, Spanish, French, and Japanese.

---

## 📌 Features

### 1. **Group Conversation Tables**

* Users can join tables for specific language levels (A1 to C1).
* Tables display:

  * Host name
  * Language level
  * Rating
  * Seat availability
* Seats are limited to 4 participants. If full, users can join a waiting list.
* Search functionality allows users to find tables by language.

### 2. **Private 1-on-1 Sessions**

* Book private sessions with a native speaker.
* Each session is language-specific and priced accordingly:

  * Beginner (A1) – ₹100
  * Elementary (A2) – ₹200
  * Intermediate (B1) – ₹300
  * Upper Intermediate (B2) – ₹400
  * Advanced (C1) – ₹500
  * Fluent (C2) – ₹600
* Secure payment modal integrated with validation for:

  * Card number (16 digits)
  * Expiry date (current year)
  * CVV (3–6 digits)

### 3. **Friend Invites & Private Rooms**

* Create a private conversation room.
* Generate unique invite links for friends.
* View participants in a dynamic grid.
* Toggle microphone for yourself.
* Copy invite link to share externally.

### 4. **Responsive UI**

* Fully responsive design for mobile and desktop.
* Clean and modern interface using CSS and Google Fonts.
* Interactive elements with hover effects and buttons.

---

## 🖥️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Icons:** [Font Awesome 6](https://fontawesome.com/)
* **Styling:** Google Fonts (Poppins)
* **No Backend:** All data is handled in-memory using JavaScript objects.

---

## 📂 Project Structure

LanguageLounge/
│
├─ booking.html        # Group table booking page
├─ friends.html        # Friend invites & private room page
├─ levels.html         # Home page with language levels
├─ private.html        # Private 1-on-1 session booking
├─ meeting.html        # Private conversation room
├─ script.js           # Shared JS logic for tables and invites
└─ README.md           # Project documentation



⚙️ How to Use

1. Clone the repository:

git clone https://github.com/yourusername/languagelounge.git


2. Open `levels.html` in your browser to start exploring.

3. Navigate to:

   * **Book Table** – join group conversation tables
   * **Friends** – create private rooms and invite friends
   * **Private Sessions** – book 1-on-1 sessions

4. For private sessions, enter payment details in the modal to confirm booking.

5. For group tables, click **Join Table** to book a seat or join a waiting list if the table is full.



## 🎨 UI Highlights

* Fixed navigation bar with Home, Book Table, Friends, Private Sessions.
* Interactive cards for tables and sessions with hover animations.
* Seat indicators: 🟢 Booked, ⚪ Available, ⏳ Waiting.
* Clean modal design for payments.



## 📌 Validation & Interactivity

* **Booking Tables:** Tracks seat availability and manages waiting lists.
* **Private Sessions:** Validates card number, CVV, and expiry date.
* **Friend Invites:** Generates unique room links and copies them to clipboard.
* **Mic Control:** Toggle mute in private meetings.



## 👩‍💻 Screenshots

*(Optional: Add screenshots of levels.html, booking.html, private.html, and meeting.html for GitHub preview.)*



## 🚀 Future Improvements

* Real-time WebRTC integration for actual video/audio conversation.
* Backend for persistent user sessions and payments.
* User authentication and profiles.
* Multi-language UI support.

---

## 📜 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

---

## 💬 Author

**Danesh Joishar** – Creator of LanguageLounge

---

