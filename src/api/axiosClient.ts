import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface AxiosApiClientOptions {
  baseUrl?: string;
  getToken?: () => string | Promise<string>;
}

export class AxiosApiClient {
  private axiosInstance: AxiosInstance;
  private getToken?: () => string | Promise<string>;

  constructor(options: AxiosApiClientOptions) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl || process.env.NEXT_PUBLIC_API_BASE_URL,
    });
    this.getToken = options.getToken;

    // Add request interceptor for bearer token
    this.axiosInstance.interceptors.request.use(async (config) => {
      if (this.getToken) {
        const token = await this.getToken();
        if (token) {
          config.headers = config.headers || {};
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }
      return config;
    });
  }

  async request<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.request<T>({
      url: path,
      ...config,
    });
    return response.data;
  }
}
