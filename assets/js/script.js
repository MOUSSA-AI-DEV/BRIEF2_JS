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

