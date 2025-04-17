async function fetchDataWithRetry(url, retryCount = 3, dealy = 1000) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (retryCount === 0) {
        throw new Error("Retry limit reached");
      } else {
        await new Promise((resolve) => setTimeout(resolve, dealy));
        return fetchDataWithRetry(url, retryCount - 1, dealy*2);
      }
    } else {
      return response.json();
    }
  } catch (error) {
    if(retryCount === 0) {
      throw new Error("Retry limit reached");
    }else{
        await new Promise((resolve) => setTimeout(resolve, dealy));
        return fetchDataWithRetry(url, retryCount - 1, dealy*2);
    }
  }
}l
