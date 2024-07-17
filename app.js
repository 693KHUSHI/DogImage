let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
let im= await generateImage();
let image=document.querySelector("#image");
image.setAttribute("src",im);
let s="800px";
image.setAttribute("height",s);
image.setAttribute("width",s);


}) 
async function generateImage(){
    try{
    let res=await axios.get("https://dog.ceo/api/breeds/image/random");
    return res.data.message;
    }
    catch(error)
    {
        return "No Image Generated";
    }
}