import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'yaml';

export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

export const getConfig = () => {
  const environment = getEnv();
  const yamlPath = join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = readFileSync(yamlPath, 'utf-8');
  const config = parse(file);
  return config;
};
