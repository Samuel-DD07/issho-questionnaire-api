const express = require('express')
const app = express()
const port = 5001

app.get('/api', (req, res) => {
    res.send('Hello World!')
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));