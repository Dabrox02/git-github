let d = document;

let desc = d.querySelectorAll(".border-hover")

desc.forEach(el => {
    el.addEventListener("mouseover", (e)=>{
        e.target.style.border = "1px solid white";
        e.target.style.padding = "1rem";
    })

    el.addEventListener("mouseleave", (e)=>{
        e.target.style.border = "none";
    })
});

