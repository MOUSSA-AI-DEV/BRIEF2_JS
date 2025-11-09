
const experience_objectife_pro = {
    //Informations personnelles
    informations: {
       
        langues: [
            {
                
            }
        ],
 //plusieurs langues possibles
    },

    //Image personnelle
    photo: "",

    //Parcours Éducatif
    formation: [
        {
           
            depuis: {
               
            },
            jusqua: {
               
            }
        }
    ],

    //Compétences multiple
    competences: [
        {
           
        }
    ],

    
   
    //oisirs multiple
    loisirs: [],

    //supplémentaire
    extraSection: {
        titre: "",
        description: ""
    },

    //  8 — Expériences
    experiences: {
        projets: [
            {
            }
        ],
        certifications: [
            {
               
            }
        ],
        references: [
            {
                poste_ou_relation: ""
            }
        ]
    }
};

let stepper_Data__competence = document.getElementById("stepper_Data__competence")
let stepper_Data__experience = document.getElementById("stepper_Data__experience")
let stepper_Data__Personnel = document.getElementById("stepper_Data__Personnel")
let btn_previece = document.getElementById("previeuce")
let btn_next = document.getElementById("next")

let counter=0
let array_position = [stepper_Data__Personnel,stepper_Data__competence, stepper_Data__experience]
stepper_Data__Personnel.style.display ="block"//block
stepper_Data__experience.style.display = "none"
stepper_Data__competence.style.display = "none"
console.log(array_position[0])
// document.getElementById(`cercel__1`).style.backgroundColor="blue"; //cercel 1
// document.getElementById(`line__2`).style.backgroundColor = "blue" ;//line 2
// document.getElementById(`cercel__2`).style.backgroundColor = "blue"; //cercel 2


btn_next.addEventListener("click" ,(e)=>{

if(counter<=1 )
{
    counter+=1
    console.log(counter)}
   for(let i=0 ;i>=0 && i<=2; i++){
        console.log(array_position[i])
       if (counter == 2) {
           document.getElementById(`line__2`).style.backgroundColor = "blue";//line 2
           document.getElementById(`cercel__2`).style.backgroundColor = "blue"; //cercel 2


       }
       else{
           document.getElementById(`line__2`).style.backgroundColor = "gray";//line 2
           document.getElementById(`cercel__2`).style.backgroundColor = "gray"; //cercel 2
       }

        if (counter>=1 ){
            document.getElementById(`cercel__1`).style.backgroundColor = "blue"; //cercel 1

        }
        

        else{
            document.getElementById(`cercel__1`).style.backgroundColor = "gray"; //cercel 1
            console.log("xhjbvc")
        }
        if(i!== counter){

            
            array_position[i].style.display="none"
        }else{
            array_position[i].style.display = "block"
        }
    }
   
})

btn_previece.addEventListener("click", (e) => {
    if (counter >0) {
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

stepper_Data__Personnel.addEventListener("input" ,(e)=>{

    
console.log(counter)
        console.log(stepper_Data__Personnel.querySelectorAll("input"))
        let inputs_value = stepper_Data__Personnel.querySelectorAll("input , textarea,select")
        inputs_value.forEach((el)=>{
            if(el.value){
// console.log(el.name)
                experience_objectife_pro.informations[el.name] =el.value

            }
        })
    
        console.log(personnel_information)

    })
stepper_Data__competence.addEventListener("input", (e)=>{
    
        console.log(stepper_Data__competence.querySelectorAll("input"))
        let inpute_competence = stepper_Data__competence.querySelectorAll("input , textarea, select")
        inpute_competence.forEach((el) => {
            // let el=e.target
            if (el.value) {

                experience_objectife_pro.competences[0][el.name] = el.value

            }
            else{
                return
            }

        })
    console.log(parcours_educatif)

    }
)

stepper_Data__experience.addEventListener("input", (e) => {
    console.log(stepper_Data__experience.querySelectorAll("input, textarea ,select"))
    let input_experience = stepper_Data__experience.querySelectorAll("input, textarea ,select")
    // let el = e.target

 
        // console.log(element.name)

    input_experience.forEach(element => {
            if (element.value) {
                experience_objectife_pro.experiences[element.name] = element.value
            } else {
                return
            }
        });

    

    console.log(experience_objectife_pro)
    
    console.log(experience_objectife_pro.experiences)
})  
 
    



// btn_next.addEventListener("click", (e) => { console.log("hello"+counter) })

const inputs = document.getElementsByClassName("input"); // NodeList
// inputs.forEach(input => console.log(input));
// console.log(inputs)
