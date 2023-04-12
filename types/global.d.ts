declare global {
  interface ProcessEnv {
    SECRET: string;
    API_URI: string;
    URL: string;
  }
}
