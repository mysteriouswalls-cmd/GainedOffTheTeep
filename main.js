const supabase = createClient('https://oxidikugtxyakkxktkoa.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aWRpa3VndHh5YWtreGt0a29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjMyMzMsImV4cCI6MjA3OTU5OTIzM30.bAwbPwERLcHflwRPtMqzhNM2ZWGpdgKVxKKI2vzAa4U')

document.addEventListener("DOMContentLoaded",function () {
  
  document.getElementById("show-login").addEventListener("click",function(){
      document.querySelector(".popup").classList.add("active");
    })

  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });

  document.getElementById("google-login").addEventListener("click", async function () {
    console.log("Google login clicked");
  

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin // redirect back to home page
      }
    });
  });
});


