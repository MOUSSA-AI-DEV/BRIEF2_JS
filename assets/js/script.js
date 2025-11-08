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
let general_data_object={}
let personnel_information={}
let parcours_educatif={}
let experience_objectife_pro={}
stepper_Data__Personnel.addEventListener("input" ,(e)=>{

    
console.log(counter)
        console.log(stepper_Data__Personnel.querySelectorAll("input"))
        let inputs_value = stepper_Data__Personnel.querySelectorAll("input , textarea,select")
        inputs_value.forEach((el)=>{
            if(el.value){
// console.log(el.name)
                personnel_information[el.name] =el.value

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

                parcours_educatif[el.name] = el.value

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
            experience_objectife_pro[element.name] = element.value
            } else {
                return
            }
        });

    

    console.log(experience_objectife_pro)
     general_data_object = {
        ...personnel_information,
        ...parcours_educatif,
        ...experience_objectife_pro
    };
console.log(general_data_object)
})  
 
  
      



// btn_next.addEventListener("click", (e) => { console.log("hello"+counter) })

const inputs = document.getElementsByClassName("input"); // NodeList
// inputs.forEach(input => console.log(input));
// console.log(inputs)
