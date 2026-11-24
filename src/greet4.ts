export function greet4(name: string): string {
  const message = `Hello, ${name}!`;
  const shout = message.toUpperCase();
  const length = message.length;
  console.log(message, shout, length);
  return message;
}

export const VERSION = "0.1.0";
export const FEATURES = ["vesting", "rewards", "attestation"];
