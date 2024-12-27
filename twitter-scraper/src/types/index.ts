export interface TrendingData {
    _id: string;
    nameoftrend1: string;
    nameoftrend2: string;
    nameoftrend3: string;
    nameoftrend4: string;
    nameoftrend5: string;
    timestamp: string;
    ipAddress: string;
  }
  
  export interface ScraperResponse {
    success: boolean;
    data?: TrendingData;
    error?: string;
  }
  
  