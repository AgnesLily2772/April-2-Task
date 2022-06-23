import resume from './resume.json' assert { type: "json" };
console.log(resume)

const pageSetup = document.createElement("div");
pageSetup.className = "container mydiv";
const isLength = (val) =>{
  let cnt = 0;
  //for loop
  for(let p=0;p<val.length;p++)
  {
    cnt++;
  }
  if(cnt === val.length)
  {
    return true;
  }
  else{
    return false;
  }
}
let ResumeDetails,ResumeElement,ResumeCategory,ResumeDiv,ResumeAligh;
//for in loop
for(let i in resume)
{ 
    const detail = document.createElement("div");
    detail.className = "box";
    ResumeDetails = document.createElement("h3");
    ResumeDetails.innerText = i;
    detail.append(ResumeDetails);
    if(Array.isArray(resume[i]) && isLength(resume[i]))
    {
      ResumeDiv = document.createElement("div");
      ResumeDiv.className="idiv";
      //foEach loop
            resume[i].forEach((k=>{
              //for of loop
                for(let [key,value] of Object.entries(k))
                {
                    ResumeAligh = document.createElement("tr");
                    ResumeAligh.className = "mytr";
                    ResumeCategory = document.createElement("td");
                    ResumeCategory.className = "mytd"
                    ResumeCategory.innerText = key;
                    ResumeElement = document.createElement("td");
                    ResumeElement.className="mytd"
                    ResumeElement.innerText = k[key];
                    ResumeAligh.append(ResumeCategory,ResumeElement);
                    ResumeDiv.append(ResumeAligh);
                }
                
            }))
            detail.append(ResumeDiv)
          }
pageSetup.append(detail);
}

document.body.append(pageSetup);