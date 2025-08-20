import axios from "axios";

const api = axios.create({
  baseURL: "/api", 
});

// Attach token automatically if present
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// ---- AUTH API METHODS ----
export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data as {
    success: boolean;
    message: string;
    token: string;
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      isVerified: boolean;
      contact?: string;
      description?: string;
      disabled?: boolean;
      location?: string;
      profileImage?: string;
      createdAt: string;
      updatedAt: string;
      lastLogin?: string;
    };
  };
};

export const signup = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post("/auth/forgot-password", { email });
  return response.data;
};

export const resetPassword = async (token: string, password: string) => {
  const response = await api.post("/auth/reset-password", { token, password });
  return response.data;
};

export const verifyOTP = async (email: string, otp: string) => {
  const response = await api.post("/auth/verify-otp", { email, otp });
  return response.data;
};

export const googleAuth = async (token: string) => {
  const response = await api.post("/auth/google", { token });
  return response.data;
};
