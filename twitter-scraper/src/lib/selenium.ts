import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { v4 as uuidv4 } from 'uuid';
import { getNewProxy } from './proxy';
import clientPromise from './mongodb';
import { TrendingData } from '../types';

export async function scrapeTrendingTopics(): Promise<TrendingData> {
  let driver: WebDriver | null = null;
  const proxy = await getNewProxy();

  try {
    // Set up Chrome options with proxy
    const options = new chrome.Options();
    options.addArguments(`--proxy-server=${proxy}`);

    // Build the driver
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    // Navigate to Twitter
    await driver.get('https://twitter.com/login');

    // Login to Twitter
    await driver.findElement(By.name('text')).sendKeys(process.env.TWITTER_USERNAME!);
    await driver.findElement(By.xpath("//span[text()='Next']")).click();
    await driver.wait(until.elementLocated(By.name('password')), 10000);
    await driver.findElement(By.name('password')).sendKeys(process.env.TWITTER_PASSWORD!);
    await driver.findElement(By.xpath("//span[text()='Log in']")).click();

    // Wait for trending section
    await driver.wait(
      until.elementLocated(By.css('[data-testid="trend"]')),
      10000
    );

    // Get trending topics
    const trends = await driver.findElements(By.css('[data-testid="trend"]'));
    const trendTexts = await Promise.all(
      trends.slice(0, 5).map(trend => trend.getText())
    );

    // Create trending data object
    const trendingData: TrendingData = {
      _id: uuidv4(),
      nameoftrend1: trendTexts[0] || '',
      nameoftrend2: trendTexts[1] || '',
      nameoftrend3: trendTexts[2] || '',
      nameoftrend4: trendTexts[3] || '',
      nameoftrend5: trendTexts[4] || '',
      timestamp: new Date().toISOString(),
      ipAddress: proxy
    };

    // Store in MongoDB
    const client = await clientPromise;
    const db = client.db('twitter-trends');
    await db.collection('trends').insertOne(trendingData);

    return trendingData;
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

