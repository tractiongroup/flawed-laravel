const express = require('express');
const app = express();
const port = 1337;

app.use(express.json());

app.post('/send', (req, res) => {
    const random = Math.random() * 100;
    
    if (random <= 30) {
        // 30% chance of rate limit
        return res.status(429).json({
            error: 'Too Many Requests',
            message: 'Rate limit exceeded'
        });
    }
    
    if (random > 30 && random <= 35) {
        // 5% chance of server error
        return res.status(500).json({
            error: 'Internal Server Error',
            message: 'Something went wrong'
        });
    }
    
    if (random > 35 && random <= 55) {
        // 20% chance of timeout (5 seconds)
        setTimeout(() => {
            res.json({
                success: true,
                message: 'Delayed response'
            });
        }, 5000);
        return;
    }
    
    // Normal response
    res.json({
        success: true,
        message: 'Newsletter processed successfully'
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Mock API running on port ${port}`);
});
