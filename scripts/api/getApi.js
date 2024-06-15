export const getApi = async (endpoint) => {
    const url = `http://localhost:3000/${endpoint}`
  
    try {
      const response = await fetch(url)
      const data = await response.json()
  
      return data
    } catch(e) {
      console.error(e);
      return [];
    }
  }