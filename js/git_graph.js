//GitHubCalendar(".calendar", "your-username");

// or enable responsive functionality:
GitHubCalendar(".calendar", "svenikea", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "svenikea", {
   proxy (username) {
     return fetch(`https://github.com/github?user=${username}`)
   }
}).then(r => r.text())
