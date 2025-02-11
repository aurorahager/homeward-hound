// check if auth
'use server'
import { cookies } from "next/headers";

export const isLoggedIn = async () => {
  const cookieStore = await cookies();
  return cookieStore.has("fetch-access-token");
}
