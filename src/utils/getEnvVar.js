import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultValue) {
  // const value = process.env[name];
  // if (value) return value;
  // if (defaultValue) return defaultValue;
  // throw new Error(`Missing: process.env['${name}'].`);

  const value = process.env[name];
    if (!value) {
        throw new Error(`Missing: process.env['${name}'].`);
    }
    return value;
}
