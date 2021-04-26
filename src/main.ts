export const delayMilliseconds = (delayMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delayMs));

export const greet = (name: string): string => `Hello ${name}`;

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'));
  await delayMilliseconds(1000);
  console.log('===> done');
  return true;
};
