//GitHubCalendar(".calendar", "your-username");

// or enable responsive functionality:
GitHubCalendar(".calendar", "kynguyen98", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "kynguyen98", {
   proxy (username) {
     return fetch(`https://github.com/github?user=${username}`)
   }
}).then(r => r.text())