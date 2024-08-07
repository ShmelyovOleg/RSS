import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export const getPosts = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/posts?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
