import fs from 'fs';
import axios, { AxiosError } from 'axios';

const images = {
  hero: 'https://storage.googleapis.com/mixo-files/illustrations/undraw_software_engineer_re_tnjc.svg',
  pattern: 'https://storage.googleapis.com/mixo-files/patterns/circuit-board.svg',
  industries: {
    'financial-services': 'https://storage.googleapis.com/mixo-files/illustrations/undraw_finance_re_gnv2.svg',
    'healthcare': 'https://storage.googleapis.com/mixo-files/illustrations/undraw_medicine_b-1-ol.svg',
    'retail': 'https://storage.googleapis.com/mixo-files/illustrations/undraw_shopping_re_3wst.svg',
    'education': 'https://storage.googleapis.com/mixo-files/illustrations/undraw_education_f8ru.svg',
    'manufacturing': 'https://storage.googleapis.com/mixo-files/illustrations/undraw_factory_re_c4ay.svg',
    'business-services': 'https://storage.googleapis.com/mixo-files/illustrations/undraw_business_deal_re_up4u.svg'
  }
};

async function downloadImage(url: string, filepath: string): Promise<void> {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
      writer.on('error', reject);
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error downloading ${url}:`, error.message);
    } else {
      console.error(`Unknown error downloading ${url}:`, error);
    }
  }
}

async function downloadAllImages() {
  // Create directories if they don't exist
  const dirs = ['public/images', 'public/images/industries'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Download hero illustration
  await downloadImage(images.hero, 'public/images/hero-illustration.svg');
  
  // Download pattern
  await downloadImage(images.pattern, 'public/images/hero-pattern.svg');

  // Download industry illustrations
  for (const [industry, url] of Object.entries(images.industries)) {
    await downloadImage(url, `public/images/industries/${industry}.svg`);
  }

  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 