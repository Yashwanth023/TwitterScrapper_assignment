export async function getNewProxy(): Promise<string> {
    const proxyMeshApiKey = process.env.PROXYMESH_API_KEY;
    const proxyMeshEndpoint = 'http://api.proxymesh.com/proxy';
  
    try {
      const response = await fetch(proxyMeshEndpoint, {
        headers: {
          'X-ProxyMesh-Key': proxyMeshApiKey!
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to get proxy');
      }
  
      const data = await response.json();
      return data.proxy;
    } catch (error) {
      console.error('Error getting proxy:', error);
      throw error;
    }
  }
  
  