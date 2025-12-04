 // const supabase = supabase.createClient('https://oxidikugtxyakkxktkoa.supabase.co', 'sb_publishable_JYbDErJUwIzYn6U42ecZYQ_X7gJrrpc')
document.addEventListener("DOMContentLoaded",function () {
  document.getElementById("show-login").addEventListener("click",function(){
      document.querySelector(".popup").classList.add("active");
    })

  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });

  // document.getElementById("google-login").addEventListener("click", async function () {
  //   console.log("Google login clicked");
  

  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: window.location.origin // redirect back to home page
  //     }
  //   });
  // });
});


