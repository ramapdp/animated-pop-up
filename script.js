const section = document.querySelector("section"),
      sendBtn = section.querySelector("#sendBtn"),
      closeBtn = section.querySelectorAll("#close");

      sendBtn.addEventListener("click", () =>{
          section.classList.add("show");
      })

      closeBtn.forEach(closeBtn =>{
          closeBtn.addEventListener("click", ()=>{
              section.classList.remove("show");
          })
      })