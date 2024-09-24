// fetchIp.js
async function fetchData() {
    try {
        const response = await fetch('https://api.myip.com');
        const data = await response.json();

        // Display the message
        const message = `Hello from ${data.ip}, ${data.country}`;
        document.getElementById('api-message').innerText = message;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch data
fetchData();
