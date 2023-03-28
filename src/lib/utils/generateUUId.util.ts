import { v4 as uuidv4 } from "uuid";

export function generateUUId(): string {
  return uuidv4();
}
