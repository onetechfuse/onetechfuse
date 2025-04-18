import axios from 'axios';

const DOMAIN = 'https://onetechfuse.in';
const SITEMAP_URL = `${DOMAIN}/sitemap.xml`;

async function submitSitemapToSearchEngines() {
  try {
    // Submit to Google
    const googleResponse = await axios.get(
      `https://www.google.com/ping?sitemap=${SITEMAP_URL}`
    );
    console.log('Submitted to Google:', googleResponse.status === 200 ? 'Success' : 'Failed');

    // Submit to Bing
    const bingResponse = await axios.get(
      `https://www.bing.com/ping?sitemap=${SITEMAP_URL}`
    );
    console.log('Submitted to Bing:', bingResponse.status === 200 ? 'Success' : 'Failed');

  } catch (error) {
    console.error('Error submitting sitemap:', error);
  }
}

export default submitSitemapToSearchEngines; 