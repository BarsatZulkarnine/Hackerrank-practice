const year = 2100

if (year % 400 == 0 || (year % 4 == 0 && (year % 400 != 0))){
    console.log("works")
}
else{
    console.log("doesnt work")
}