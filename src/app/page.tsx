import { redirect } from "next/navigation";

// temp function for auth
const isLoggedIn = () => false

export default function Home() {
  if (isLoggedIn()) {
    redirect("/search")
  } else {
    redirect("/login")
  }
  
}
 