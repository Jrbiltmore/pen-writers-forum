// Integrations - mediumIntegration.js
const axios = require('axios');
const apiUrl = 'https://api.medium.com/v1';
const accessToken = process.env.MEDIUM_ACCESS_TOKEN;

const publishToMedium = async (title, content) => {
    try {
        const response = await axios.post(\`\${apiUrl}/users/@userId/posts\`, {
            title: title,
            contentFormat: 'html',
            content: content,
            publishStatus: 'draft'
        }, {
            headers: {
                Authorization: \`Bearer \${accessToken}\`
            }
        });
        console.log('Successfully published to Medium:', response.data);
    } catch (error) {
        console.error('Failed to publish to Medium:', error);
    }
};

module.exports = { publishToMedium };