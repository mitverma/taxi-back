import { compareSync, hashSync } from 'bcrypt';

const SALT_ROUND = 10;
export const hash: any = (data: string) => {
  return hashSync(data, SALT_ROUND);
};

export const compareHash = (exisiting: string, current: string) => {
  return compareSync(exisiting, current);
};
