'use client'

import { useState } from 'react'
import { TrendingData } from '../types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ScraperResults() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<TrendingData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const runScraper = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/api/scrape', {
        method: 'POST'
      })
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to scrape data')
      }
      
      setResults(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Twitter Trending Topics Scraper</CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={runScraper}
          disabled={isLoading}
          className="w-full mb-4"
        >
          {isLoading ? 'Scraping...' : 'Click here to run the script'}
        </Button>

        {error && (
          <div className="text-red-500 mb-4">
            Error: {error}
          </div>
        )}

        {results && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              These are the most happening topics as on {new Date(results.timestamp).toLocaleString()}
            </h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>{results.nameoftrend1}</li>
              <li>{results.nameoftrend2}</li>
              <li>{results.nameoftrend3}</li>
              <li>{results.nameoftrend4}</li>
              <li>{results.nameoftrend5}</li>
            </ul>
            
            <p className="text-sm text-gray-600">
              The IP address used for this query was {results.ipAddress}
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-sm font-semibold mb-2">JSON extract from MongoDB:</h3>
              <pre className="text-xs overflow-x-auto">
                {JSON.stringify(results, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

