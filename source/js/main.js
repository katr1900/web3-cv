
const serviceUrl = "http://localhost:8080/web3-api/";

function loadData() {
  fetch(serviceUrl, { 
  mode: "cors",
  method: "GET",
  credentials: "omit" })
  .then(response => response.json())
  .then(data => {
      setPersonalInfo(data.personalInfo);
      setAddress(data.address);
      setLanguages(data.languages);
      setSkills(data.skills);
      setInterests(data.interests);
      setEducations(data.educations);
      setExperiences(data.workExperiences);
      setReferences(data.workReferences);
      setWebsites(data.websites);
  })
  .catch((err) => {
      console.log('fetch Error :-S', err)
  });
}
loadData();

function setPersonalInfo(personalInfo) {
    const names = document.getElementsByClassName("cv-name");
    for (let i = 0; i < names.length; i++) {
      names[i].innerHTML = `${personalInfo.firstname} ${personalInfo.lastname}`;
    }

    const phone = document.getElementById("phone");
    phone.innerText = personalInfo.phone;

    const email = document.getElementById("email");
    email.innerText = personalInfo.email;
    email.setAttribute("href", `mailto:${personalInfo.email}`);

    const drivingLicense = document.getElementById("driving-license");
    drivingLicense.innerText = personalInfo.drivingLicense;

    const about = document.getElementById("about");
    about.innerText = personalInfo.about;

    const linkedin = document.getElementById("linkedin");
    linkedin.innerText = personalInfo.linkedin;
    linkedin.setAttribute("href", personalInfo.linkedin);
}

function setAddress(address) {
  const street = document.getElementById("street");
  street.innerText = address.street;
  const zip = document.getElementById("zip");
  zip.innerText = address.zip;
  const city = document.getElementById("city");
  city.innerText = address.city;
  const country = document.getElementById("country");
  country.innerText = address.country;
}

function setLanguages(languages) {
    const list = document.getElementById("languages");

    languages.forEach(language => {
        const li = document.createElement("li");
        const div = document.createElement("div");
  
        const name = document.createElement("span");
        name.textContent = language.name;
        div.appendChild(name);
  
        const levelSpan = document.createElement("span");

        for(let i = 0; i < language.level; i++) {
          addStar(levelSpan);
        }
        div.appendChild(levelSpan);
        li.appendChild(div);
        list.appendChild(li);
      });
}

function setSkills(skills) {
  const list = document.getElementById("skills");

  skills.forEach(skill => {
      const li = document.createElement("li");
      const div = document.createElement("div");

      const name = document.createElement("span");
      name.textContent = skill.name;
      div.appendChild(name);

      const levelSpan = document.createElement("span");

      for(let i = 0; i < skill.level; i++) {
        addStar(levelSpan);
      }
      div.appendChild(levelSpan);
      li.appendChild(div);
      list.appendChild(li);
    });
}

function setInterests(interests) {
    const list = document.getElementById("interests");

    interests.forEach(interest => {
        const li = document.createElement("li");
        li.textContent = interest.name;  
        list.appendChild(li);
      });
}

function setEducations(educations) {
    const list = document.getElementById("educations");

    educations.forEach(education => {
      const enddate = education.endDate ? education.endDate.substring(0, 4) : "present";

        const div = document.createElement("div");
        div.innerHTML = `${education.startDate.substring(0, 4)} - ${enddate} ${education.course}`;
  
        list.appendChild(div);
      });
}

function setExperiences(experiences) {
  const list = document.getElementById("experiences");

  experiences.forEach(experince => {
    const enddate = experince.endDate ? experince.endDate.substring(0, 4) : "present";

      const div = document.createElement("div");
      div.innerHTML = `${experince.startDate.substring(0, 4)} - ${enddate} ${experince.role}`;

      list.appendChild(div);
    });
}

function setReferences(references) {
    const list = document.getElementById("references");

    references.forEach(references => {
        const li = document.createElement("li");
        li.innerHTML = references.name + "<br>" + references.phone;
        list.appendChild(li);
      });
}

function setWebsites(websites) {
  const list = document.getElementById("websites");

  websites.forEach(website => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", website.url);
      a.innerText = website.title;
      li.appendChild(a);
      li.innerHTML += "<br>" + website.description;
      list.appendChild(li);
    });
}

function addStar(container) {
  const star = document.createElement("i");
  star.classList.add("fas");
  star.classList.add("fa-star");
  container.appendChild(star);
}
  