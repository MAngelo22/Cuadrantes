export interface User {
  id: string;
  name: string;
}

export const MOCK_USERS: User[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  name: `Usuario ${i + 1}`
}));