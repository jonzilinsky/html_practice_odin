const container = document.querySelector("#container");

const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
    para.classList.add("para");
    para.style.color = "red";
    para.textContent = "Hey I'm red!";

const head3 = document.createElement("h3");
    head3.classList.add("head3");
    head3.style.color = "blue";
    head3.textContent = "I'm a blue h3!";

const content2 = document.createElement("div");
    content2.classList.add("content2");
    content2.style.cssText = "background: pink; border-style: solid;";

const head1 = document.createElement("p");
    head1.textContent = "I'm in a div";

const newPara = document.createElement("p");
    newPara.textContent = "ME TOO";


content2.appendChild(head1);
content2.appendChild(newPara);


container.appendChild(content);
container.appendChild(para);
container.appendChild(head3);
container.appendChild(content2);
