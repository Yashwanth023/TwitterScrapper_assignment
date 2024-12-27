# Twitter Trending Topics Scraper

A web application that scrapes Twitter's trending topics using Selenium WebDriver, stores the data in MongoDB, and displays it through a Next.js web interface.

## Features

- 🤖 Automated Twitter login and trending topics scraping
- 🔄 IP rotation using ProxyMesh
- 💾 MongoDB integration for data storage
- 🌐 Web interface to trigger scraping and view results
- 📊 Display of trending topics with timestamps
- 🔍 Detailed JSON data view
- ⚡ Built with Next.js 13 App Router
- 🎨 Modern UI with Tailwind CSS and shadcn/ui

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.0 or later
- npm or yarn
- Google Chrome browser
- MongoDB account
- ProxyMesh account
- Twitter account

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Yashwanth023/TwitterScrapper_assignment.git
cd twitter-scraper
```

### 2. Install Dependencies

```shellscript
npm install
# or
yarn install
```

### 3. Set Up ChromeDriver

1. Check your Chrome version:

1. Open Chrome
2. Go to Menu (three dots) → Help → About Google Chrome
3. Note your Chrome version (e.g., 119.0.6045.124)


2. Download ChromeDriver:

1. Visit [https://chromedriver.chromium.org/downloads](https://chromedriver.chromium.org/downloads)
2. Download the version matching your Chrome version


3. Install ChromeDriver:

#### Windows:

```shellscript
# Create directory
mkdir C:\WebDriver

# Move chromedriver.exe to C:\WebDriver

# Add to System PATH:
# 1. Open System Properties (Win + Pause|Break)
# 2. Click "Advanced system settings"
# 3. Click "Environment Variables"
# 4. Under "System Variables", find "Path"
# 5. Click "Edit"
# 6. Add "C:\WebDriver"
# 7. Click "OK"
```


### 4. Set Up ProxyMesh

1. Sign up for ProxyMesh:

1. Visit [https://proxymesh.com/](https://proxymesh.com/)
2. Click "Sign Up"
3. Choose a plan (free trial available)
4. Complete registration


2. Get API Key:

1. Log in to ProxyMesh dashboard
2. Navigate to API section
3. Copy your API key


### 5. Set Up MongoDB

1. Create MongoDB Account:

1. Visit [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster


2. Get Connection String:

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace <password> with your database user password


### 6. Configure Environment Variables

Create a `.env.local` file in the project root:

```plaintext
MONGODB_URI=your_mongodb_connection_string
PROXYMESH_API_KEY=your_proxymesh_api_key
TWITTER_USERNAME=your_twitter_username
TWITTER_PASSWORD=your_twitter_password
```

### 7. Run the Application

```shellscript
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```plaintext
twitter-scraper/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── lib/
│   │   ├── selenium.ts        # Selenium scraping logic
│   │   ├── mongodb.ts         # MongoDB connection
│   │   └── proxy.ts          # ProxyMesh integration
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   └── components/
│       └── scraper-results.tsx # Results display component
├── public/
└── package.json
```

## Usage

1. Start the development server
2. Visit [http://localhost:3000](http://localhost:3000)
3. Click the "Run Script" button
4. Wait for the scraping process to complete
5. View the trending topics, timestamp, and IP address
6. Check the MongoDB JSON extract for raw data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
