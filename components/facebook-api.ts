const API_BASE_URL = "https://graph.facebook.com";

const HEADERS = {
  "Content-Type": "application/json",
};

const ApiMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const FacebookApiService = {
  createPost: async (message: string) => {
    const url = `${API_BASE_URL}/v18.0/${process.env.NEXT_PUBLIC_APP_ID}/feed?message=${message}&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const options = {
      method: ApiMethods.POST,
      headers: HEADERS,
      body: JSON.stringify({ message }),
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },
};

export default FacebookApiService;
