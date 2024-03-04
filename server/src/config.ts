import dotenv from "dotenv";
dotenv.config();

function required(key: string, defaultValue: undefined | number = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

type Config = {
  jwt: {
    secretKey: string;
    expiresInSec: number;
  };
  bcrypt: {
    saltRounds: number;
  };
  host: {
    port: number;
  };
};

export const config: Config = {
  jwt: {
    secretKey: String(required("JWT_SECRET")),
    expiresInSec: Number(required("JWT_EXPIRES_SEC", 86400)),
  },
  bcrypt: {
    saltRounds: Number(required("BCRYPT_SALT_ROUNDS", 12)),
  },
  host: {
    port: Number(required("HOST_PORT", 8080)),
  },
};
