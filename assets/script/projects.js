const ProjectsData = [
  {
    name: "Excel Clone-logic",
    logo: "https://cdn-icons-png.flaticon.com/128/732/732220.png",

    description:
  
    "Java backend logic using a grid of cells which represent updatable values for mathematical expressions." ,
      link: "https://github.com/InesCadete/Computer-Science-IST/tree/main/PO",
  },
  {
    name: "Multiple Subscription Key-Value Store",
    logo: "https://cdn-icons-png.flaticon.com/128/3997/3997718.png",


    description:
    "IST-KVS: A parallellized key-value storage system with client-server communication, developed in C.",
    link: "https://github.com/InesCadete/Computer-Science-IST/tree/main/SO/projeto_2",
  },
  {
    name: "Typing Website",
    logo: "images/final_logo.png",
    description:
    "Minimalist typing website. Built using HTML, CSS, and JavaScript",
        link: "https://inescadete.github.io/NesTypes/",
  },
  {
    
    name: "Public Transportation Management System",
    logo: "https://cdn-icons-png.flaticon.com/128/1068/1068631.png",
    description:
      "System that manages lines, stops, and links using dynamic structures and advanced memory management",
    link: "https://github.com/InesCadete/Computer-Science-IST/tree/main/IAED/projetos",
  },
  {
    name: "Optimal Sheet Cutting",
    logo: "https://cdn-icons-png.flaticon.com/128/2162/2162348.png",
    description:
      "Maximizes the price of an M x N sheet by using dynamic programming and tabulation",
    link: "https://github.com/InesCadete/Computer-Science-IST/tree/main/ASA/proj1",
  },
  {
    name: "Much More",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Cpath d='M64 16v96M16 64h96' stroke='%23fff' stroke-width='12' stroke-linecap='round'/%3E%3C/svg%3E",
    description:
      "Explore my Computer Science repository",
    link: "https://github.com/InesCadete/Computer-Science-IST",
  }
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
