import { redirect } from "next/navigation";
import { isLoggedIn } from "@/lib/auth"



export default async function Home() {
  const isUser = await isLoggedIn()
  if (isUser) {
    redirect("/search")
  } else {
    redirect("/login")
  }
  
}
 