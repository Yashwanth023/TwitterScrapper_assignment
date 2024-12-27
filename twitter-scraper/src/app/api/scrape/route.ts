import { NextResponse } from 'next/server'
import { scrapeTrendingTopics } from '../../../lib/selenium'
import { ScraperResponse } from '../../../types'

export async function POST() {
  try {
    const data = await scrapeTrendingTopics()
    
    const response: ScraperResponse = {
      success: true,
      data
    }
    
    return NextResponse.json(response)
  } catch (error) {
    const response: ScraperResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred'
    }
    
    return NextResponse.json(response)
  }
}

