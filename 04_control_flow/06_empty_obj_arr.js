// TO DETERMINE IF ARRAYS AND OBJECTS ARE EMPTY 

const emp_arr = [1,2];
if (emp_arr.length === 0){
    console.log("array is empty");
}else{
    console.log("array is not empty");
}

// .lenth is used to check empty arrays 

const emp_obj = {parneet : "abhey"};
if (Object.keys(emp_obj).length === 0){
    console.log("object is empty");
}else{
    console.log("object is not empty")
}

// Object.keys().length is used to check empty objects 