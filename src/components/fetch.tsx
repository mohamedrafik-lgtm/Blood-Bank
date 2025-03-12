
interface Data {
    id: number;
    name: string;
    
  }
  
  
 export const fetchData = async (url: string): Promise<Data> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error fetch`);
      }
      const data: Data = await response.json(); 
      return data; 
    } catch (error) {
      throw error; 
    }
  };
  