
const experience_objectife_pro = {
    informations: {},
    photo: "",
    formation: [{ depuis: {}, jusqua: {} }],
    parcours_educatif: {},
    competences: [],
    langues: [],
    loisirs: [],
    extraSection: { titre: "", description: "" },
    experiences: { projets: [], certifications: [], references: {} }
};

let stepper_Data__competence = document.getElementById("stepper_Data__competence")
let stepper_Data__experience = document.getElementById("stepper_Data__experience")
let stepper_Data__Personnel = document.getElementById("stepper_Data__Personnel")
let btn_previece = document.getElementById("previeuce")
let btn_next = document.getElementById("next")
let enregistrement_btn = document.getElementById("Enregistrer")
let template__cv = document.getAnimations("template__cv")

let counter = 0
let array_position = [stepper_Data__Personnel, stepper_Data__competence, stepper_Data__experience]
stepper_Data__Personnel.style.display = "block"//block
stepper_Data__experience.style.display = "none"
stepper_Data__competence.style.display = "none"
console.log(array_position[0])
// document.getElementById(`cercel__1`).style.backgroundColor="blue"; //cercel 1
// document.getElementById(`line__2`).style.backgroundColor = "blue" ;//line 2
// document.getElementById(`cercel__2`).style.backgroundColor = "blue"; //cercel 2


btn_next.addEventListener("click", (e) => {

    if (counter <= 1) {
        counter += 1
        console.log(counter)
    }
    for (let i = 0; i >= 0 && i <= 2; i++) {
        console.log(array_position[i])
        if (counter == 2) {
            document.getElementById(`line__2`).style.backgroundColor = "blue";//line 2
            document.getElementById(`cercel__2`).style.backgroundColor = "blue"; //cercel 2


        }
        else {
            document.getElementById(`line__2`).style.backgroundColor = "gray";//line 2
            document.getElementById(`cercel__2`).style.backgroundColor = "gray"; //cercel 2
        }

        if (counter >= 1) {
            document.getElementById(`cercel__1`).style.backgroundColor = "blue"; //cercel 1

        }


        else {
            document.getElementById(`cercel__1`).style.backgroundColor = "gray"; //cercel 1
            // console.log("xhjbvc")
        }
        if (i !== counter) {


            array_position[i].style.display = "none"
        } else {
            array_position[i].style.display = "block"
        }
    }

})

btn_previece.addEventListener("click", (e) => {
    if (counter > 0) {
        counter -= 1
        console.log(counter)
    }


    for (let i = 0; i >= 0 && i <= 2; i++) {
        if (counter == 2) {
            document.getElementById(`line__2`).style.backgroundColor = "blue";//line 2
            document.getElementById(`cercel__2`).style.backgroundColor = "blue"; //cercel 2


        }
        else {
            document.getElementById(`line__2`).style.backgroundColor = "gray";//line 2
            document.getElementById(`cercel__2`).style.backgroundColor = "gray"; //cercel 2
        }
        if (counter >= 1) {
            document.getElementById(`cercel__1`).style.backgroundColor = "blue"; //cercel 1

        }

        else {
            document.getElementById(`cercel__1`).style.backgroundColor = "gray"; //cercel 1

        }
        console.log(array_position[i])
        if (i !== counter) {
            array_position[i].style.display = "none"
        } else {
            array_position[i].style.display = "block"
        }
    }




}
)
// validation 

// personnel information 
stepper_Data__Personnel.addEventListener("input", () => {
    const inputs = stepper_Data__Personnel.querySelectorAll("input, textarea, select");
    inputs.forEach(el => {
        if (el.name && el.value.trim() !== "") {
            experience_objectife_pro.informations[el.name] = el.value.trim("");
        }
    });
    console.log(" Informations :", experience_objectife_pro.informations);
    localStorage.setItem("Informations", JSON.stringify(experience_objectife_pro.informations));
});

// parcours
stepper_Data__competence.addEventListener("input", () => {
    const inputs = stepper_Data__competence.querySelectorAll("input, textarea, select");

    inputs.forEach(el => {
        if (!el.name || el.value.trim() === "") return;
        const val = el.value.trim();

        if (["month_depuis", "year_depuis"].includes(el.name)) {
            experience_objectife_pro.formation[0].depuis[el.name] = val;
        } else if (["month_jusqua", "year_jusqua"].includes(el.name)) {
            experience_objectife_pro.formation[0].jusqua[el.name] = val;
        }
        else if (["Formation_scolaire", "Etablissement", "localite"].includes(el.name)) {
            experience_objectife_pro.parcours_educatif[el.name] = val;
        }

        else if (el.name === "Loisirs") {
            experience_objectife_pro.loisirs = val.split(",").map(v => v.trim());
        }

        else if (el.name === "section_suplementaire") {
            experience_objectife_pro.extraSection.titre = val;
        } else if (el.name === "text_section_suplementaire") {
            experience_objectife_pro.extraSection.description = val;
        }
    });

    // localstorage
    localStorage.setItem("experience_formation", JSON.stringify(experience_objectife_pro.formation));
    localStorage.setItem("Langues", JSON.stringify(experience_objectife_pro.langues));
    localStorage.setItem("loisirs", JSON.stringify(experience_objectife_pro.loisirs));
    localStorage.setItem("section_suplementaire", JSON.stringify(experience_objectife_pro.extraSection));
    localStorage.setItem("Parcours éducatif :", JSON.stringify(experience_objectife_pro.parcours_educatif))

    console.log("Compétences :", experience_objectife_pro.competences);
    console.log("Langues :", experience_objectife_pro.langues);
    console.log("Loisirs :", experience_objectife_pro.loisirs);
    console.log("Parcours éducatif :", experience_objectife_pro.parcours_educatif);
});

// add languge and  competence 
const btn = document.getElementById("addcompetenceBtn")
btn.addEventListener("click", (e) => {

    const competencenom = document.querySelector('[name="competence"]').value;
    const niveau = document.querySelector('[name="niveaux_competence"]').value;
    if (competencenom != "") {
        experience_objectife_pro.competences.push({
            label: competencenom,
            niveau: niveau
        });
        document.querySelector('[name="competence"]').value = ""
        console.log(experience_objectife_pro.competences)

        localStorage.setItem("Competences", JSON.stringify(experience_objectife_pro.competences));
    }

})
// langauge
const addLanguageBtn = document.getElementById("addLanguageBtn")
addLanguageBtn.addEventListener("click", (e) => {
    const langue = document.querySelector('[name="Langue"]').value;
    const niveau = document.querySelector('[name="niveaux_langue"]').value;
    if (langue != "") {
        experience_objectife_pro.langues.push({
            label: langue,
            niveau: niveau
        });
        document.querySelector('[name="Langue"]').value = ""

        console.log(experience_objectife_pro.langues)

        localStorage.setItem("langue", JSON.stringify(experience_objectife_pro.langues));
    }

})




/* experience*/
stepper_Data__experience.addEventListener("input", () => {
    const inputs = stepper_Data__experience.querySelectorAll("input, textarea, select");
    inputs.forEach(el => {
        if (!el.name || el.value.trim() === "") return;
        const val = el.value.trim();

        if (el.name === "objectif_professionelle")
            experience_objectife_pro[el.name] = val;

        else if (el.name === "projects")
            experience_objectife_pro.experiences.projets[0] = { titre: val };

        else if (el.name === "projects_description")
            experience_objectife_pro.experiences.projets[0].description = val;

        else if (el.name === "certification")
            experience_objectife_pro.experiences.certifications[0] = { titre: val };

        else if (el.name === "certification_institus")
            experience_objectife_pro.experiences.certifications[0].institution = val;

        else if (el.name === "Reference_poste")
            experience_objectife_pro.experiences.references.poste = val;
    });

    localStorage.setItem("Experiences", JSON.stringify(experience_objectife_pro.experiences));

    

});

// IMPLEMENTER LE TEMPLTAE
enregistrement_btn.addEventListener("click", (e) => {
    localStorage.setItem("cvData", JSON.stringify(experience_objectife_pro)); 
    window.location.href = "./template.html"
});
// document.getElementById("extra-titre").style.backgroundColor="red"