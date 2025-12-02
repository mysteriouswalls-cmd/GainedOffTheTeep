document.addEventListener("DOMContentLoaded",function () {
    document.getElementById("show-login").addEventListener("click",function(){
        document.querySelector(".popup").classList.add("active");
    })
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

/* import {createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient (
    "https://oxidikugtxyakkxktkoa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aWRpa3VndHh5YWtreGt0a29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjMyMzMsImV4cCI6MjA3OTU5OTIzM30.bAwbPwERLcHflwRPtMqzhNM2ZWGpdgKVxKKI2vzAa4U"
);

window.supabase = supabase;


// fix below??? 

const googleBtn = document.getElementById("google-login");
  document.addEventListener("DOMContentLoaded", function() { 
    googleBtn.addEventListener("click", async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.href // redirect back to current page
        }
      });

      if (error) console.error("OAuth login error:", error);
    });
  });

  // Logout
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", async () => {
    await supabase.auth.signOut();
    window.location.reload();
  });

  // Listen for auth state changes
  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      console.log("User logged in:", session.user);
      googleBtn.style.display = "none"; // hide Google login button if logged in
    } else {
      console.log("User not logged in");
      googleBtn.style.display = "block";
    }
  });
  */