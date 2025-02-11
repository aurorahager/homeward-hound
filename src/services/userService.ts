
interface Credientials {
    name: string,
    email: string,
}

export const setUserLogin = async ({name, email}: Credientials) =>{
  try {
    const res = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    console.log('boo', res)
    if (!res.ok) {
      throw new Error("Login failed");
    }
  } catch (error) {
    return 'error'
  }
}

export const setUserLogout = async () =>{
    try {
      const res = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error("Login failed");
      }
      console.log('bie')
      return res
    } catch (error) {
      return 'error'
    }
  }