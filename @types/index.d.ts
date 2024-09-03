declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "production" | "test";
      DRIZZLE_DATABASE_URL?: string;
    }
  }
}

export {};
