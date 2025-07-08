const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Zoho credentials
const CLIENT_ID = '1000.QMTMW3WLBRLEPSNGL90TA6V6LL90ML';
const CLIENT_SECRET = 'd77a516761f18d7c867c176d0b89a309cb97b59195';
const REFRESH_TOKEN = '1000.534f7560aae9668eb12598a508738cb0.ebc297fe3786f80cfb132e530c932390';

app.get('/zoho/token', async (req, res) => {
  try {
    const resp = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN
      })
    });
    const data = await resp.json();
    res.header('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
