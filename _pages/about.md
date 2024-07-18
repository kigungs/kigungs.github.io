---
permalink: /
title: "Oh, Hello There :)"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }}</title>
</head>
<body>
  <h1 id="welcome"></h1>

  <script>
    // Array of 'Welcome' in different languages
    const welcomes = [
      "Welcome", // English
      "Bienvenido", // Spanish
      "Bienvenue", // French
      "Willkommen", // German
      "Benvenuto", // Italian
      "Bem-vindo", // Portuguese
      "Добро пожаловать", // Russian
      "مرحبا", // Arabic
      "欢迎", // Chinese
      "ようこそ", // Japanese
      "환영합니다", // Korean
      "स्वागत है", // Hindi
      "Hoşgeldiniz", // Turkish
      "Welkom", // Dutch
      "Välkommen", // Swedish
      "Velkommen", // Norwegian
      "Velkommen", // Danish
      "Tervetuloa", // Finnish
      "Καλώς ήρθατε", // Greek
      "ยินดีต้อนรับ", // Thai
    ];

    // Select a random welcome message
    const randomWelcome = welcomes[Math.floor(Math.random() * welcomes.length)];

    // Display the welcome message
    document.getElementById("welcome").innerText = randomWelcome;
  </script>
</body>
</html>
