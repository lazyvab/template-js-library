export interface User {
  name: string;
}

export const greet = (user: User): void => {
  console.log(`Welcome ${user.name}`);
};
