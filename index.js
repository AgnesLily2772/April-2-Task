// let resume;
// fetch('./resume.json')
//   .then(res => 
//     {
//       resume = res.json()
//     })
//   console.log(resume)



import resume from './resume';
console.log(resume)

const pageSetup = document.createElement("div");
pageSetup.className = "container mydiv";
let ResumeDetails,ResumeElement,ResumeCategory,ResumeDiv,ResumeHr;
for(let i in resume)
{ 
    const detail = document.createElement("div");
    detail.className = "box";
    ResumeDetails = document.createElement("h3");
    ResumeDetails.innerText = i;
    detail.append(ResumeDetails);
    if(Array.isArray(resume[i]))
    {
      ResumeDiv = document.createElement("div");
      ResumeDiv.className="idiv";
            resume[i].forEach((k=>{
                for(let key in k)
                {
                    ResumeAligh = document.createElement("tr");
                    ResumeAligh.className = "mytr";
                    ResumeCategory = document.createElement("td");
                    ResumeCategory.className = "mytd"
                    ResumeCategory.innerText = key;
                    ResumeElement = document.createElement("td");
                    ResumeElement.className="mytd"
                    ResumeElement.innerText = k[key];
                    ResumeDiv.append(ResumeAligh,ResumeCategory,ResumeElement)
                }
                ResumeHr = document.createElement("hr");
                
            }))
            detail.append(ResumeDiv)
          }
pageSetup.append(detail);
}

document.body.append(pageSetup);