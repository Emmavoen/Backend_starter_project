import { cleanEnv, str } from "envalid";

export const env = cleanEnv(Bun.env, {
  MONGO_URL: str(),
  ACCESS_SECRET: str(),
  REFRESH_SECRET: str(),
  NODE_ENV: str({ default: "development" }),
  JWT_SECRET: str(),
});
