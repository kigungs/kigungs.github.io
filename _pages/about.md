---
permalink: /
title: "Oh, Hello There :)"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
# Welcome

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
  document.write(`<h1>${randomWelcome}</h1>`);
</script>
========
