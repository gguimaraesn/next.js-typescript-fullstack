"use server";
import { readFile, writeFile, promises as fs } from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
export const createUser = async (prevState: any, formData: FormData) => {
  "use server";
  // console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "user created successfully";
  } catch (error) {
    console.error(error);
    return "failed to create user";
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await fs.readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await fs.writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const user = await fetchUsers();
  const updatedUser = user.filter((user) => user.id !== id);
  await fs.writeFile("users.json", JSON.stringify(updatedUser));
  revalidatePath("/actions");
};
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);
  const user = await fetchUsers();
  const updatedUser = user.filter((user) => user.id !== id);
  await fs.writeFile("users.json", JSON.stringify(updatedUser));
  revalidatePath("/actions");
};
