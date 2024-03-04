type UserData = {
  username: string; // 사용자 닉네임 (아이디)
  password: string; // 사용자 비밀번호
  name: string; // 사용자 이름
  email: string; // 사용자 이메일
  url: string; // 사용자 프로파일 사진 URL
};

type User = UserData & {
  id: string;
};

// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
let users: User[] = [
  {
    id: "1",
    username: "bob",
    password: "$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function findByUsername(username: string): Promise<User | null> {
  const found = users.find((user) => user.username === username);
  if (!found) {
    return null;
  }
  return found;
}

export async function findById(id: string): Promise<User | null> {
  const found = users.find((user) => user.id === id);
  if (!found) {
    return null;
  }
  return found;
}

export async function createUser(user: UserData): Promise<string> {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id!;
}
