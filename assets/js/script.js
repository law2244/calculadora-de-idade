let q = (q) => {
    return document.querySelector(q)
} 


let inputDay = q(".inputDay")

let inputMonth = q(".inputMonth")

let inputYear = q(".inputyear")

let arrowImg = q(".buttonResult img ")

let date = new Date

let fieldYear = q(".resultYears span") 

let fieldMonth = q(".resultMonths span")

let fieldDay = q(".redultDays span") 


inputDay.addEventListener("keypress" , (e) => {
        if(inputDay.value.length >= 2) {
            e.preventDefault()
        }
})
inputMonth.addEventListener("keypress" , (e) => {
    if(inputMonth.value.length >= 2) {
        e.preventDefault()
    }
})
inputYear.addEventListener("keypress" , (e) => {
    if(inputYear.value.length >= 4) {
        e.preventDefault()
    }
})


arrowImg.addEventListener("click" , () => {
    
    let calcYear =   parseInt( inputYear.value )

    let calcMonth =   parseInt( inputMonth.value)  -1

    let calcDay =  parseInt( inputDay.value )


    let dateAtual = new Date(calcYear , calcMonth , calcDay)

    let calcDifferenceYear =   parseInt( date.getFullYear()) -  parseInt(  dateAtual.getFullYear() )

    let calcDifferenceMonth =  parseInt( date.getMonth()  )  -  parseInt( dateAtual.getMonth() )

    let calcDifferenceday = parseInt( date.getDate()  )   -  parseInt( dateAtual.getDate() )



    if(inputDay.value == "" ){
        let spanTitle = document.querySelector(".span_title1")
       let campoEmpty = document.querySelector(".error_field_empty1")
       inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
       campoEmpty.style.display = "block"
       spanTitle.style.color = "hsl(0, 100%, 67%)"
        return
    }
    else{
        let spanTitle = document.querySelector(".span_title1")
        let campoEmpty = document.querySelector(".error_field_empty1")
        inputDay.style.border = " 1px solid  hsl(0, 0%, 94%) "
        campoEmpty.style.display = "none"
        spanTitle.style.color = "hsl(0, 1%, 44%)"
    }

    if(inputMonth.value  == ""){
        let spanTitle = document.querySelector(".span_title2")
        let campoEmpty = document.querySelector(".error_field_empty2")
        inputMonth.style.border =  " 1px solid  hsl(0, 100%, 67%)"
        campoEmpty.style.display = "block"
        spanTitle.style.color = "hsl(0, 100%, 67%)"
        return
    } else{
        let spanTitle = document.querySelector(".span_title2")
        let campoEmpty = document.querySelector(".error_field_empty2")
        inputMonth.style.border =  "1px solid  hsl(0, 0%, 94%)"
        campoEmpty.style.display = "none"
        spanTitle.style.color = "hsl(0, 1%, 44%)"
    }

  if(inputYear.value == ""){
        let spanTitle = document.querySelector(".span_title3")
        let campoEmpty = document.querySelector(".error_field_empty3")
        inputYear.style.border = " 1px solid  hsl(0, 100%, 67%)"
        campoEmpty.style.display = "block"
        spanTitle.style.color = "hsl(0, 100%, 67%)"
         return
    } else{
        let spanTitle = document.querySelector(".span_title3")
        let campoEmpty = document.querySelector(".error_field_empty3")
        campoEmpty.style.display = "none"
        inputYear.style.border = "1px solid  hsl(0, 0%, 94%)"
        spanTitle.style.color = "hsl(0, 1%, 44%)"
  }
  
    
  if(inputDay.value > 31 || inputDay.value <= 0 ){
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".error_valid_day1")
    campoEmpty.style.display = "block"
    inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
    spanTitle.style.color = "hsl(0, 100%, 67%)"
     return
 } else{
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".error_valid_day1")
    inputDay.style.border = " 1px solid  hsl(0, 0%, 94%) "
    campoEmpty.style.display = "none"
    spanTitle.style.color = "hsl(0, 1%, 44%)"
 }

  if(inputDay.value > 28 && inputMonth.value == 2){
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    campoEmpty.style.display = "block"
    inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
    spanTitle.style.color = "hsl(0, 100%, 67%)"
    return
  }  else{
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 0%, 94%) "
    campoEmpty.style.display = "none"
    spanTitle.style.color = "hsl(0, 1%, 44%)"
  }

  if(inputDay.value > 30 && inputMonth.value == 4){
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
    campoEmpty.style.display = "block"
    spanTitle.style.color = "hsl(0, 100%, 67%)"
    return
  } else{
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 0%, 94%) "
    campoEmpty.style.display = "none"
    spanTitle.style.color = "hsl(0, 1%, 44%)"

  }

  if(inputDay.value > 30 && inputMonth.value == 6){
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
    campoEmpty.style.display = "block"
    spanTitle.style.color = "hsl(0, 100%, 67%)"
    return
  } else{
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 0%, 94%) "
    campoEmpty.style.display = "none"
    spanTitle.style.color = "hsl(0, 1%, 44%)"
  }

  if(inputDay.value > 30 && inputMonth.value == 9){
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
    campoEmpty.style.display = "block"
    spanTitle.style.color = "hsl(0, 100%, 67%)"
    return
  }  else{
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 0%, 94%) "
    campoEmpty.style.display = "none"
    spanTitle.style.color = "hsl(0, 1%, 44%)"
  }

  if(inputDay.value > 30 && inputMonth.value == 11){
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 100%, 67%)"
    campoEmpty.style.display = "block"
    spanTitle.style.color = "hsl(0, 100%, 67%)"
    return
  }  else{
    let spanTitle = document.querySelector(".span_title1")
    let campoEmpty = document.querySelector(".day_inalid")
    inputDay.style.border = " 1px solid  hsl(0, 0%, 94%)"
    campoEmpty.style.display = "none"
    spanTitle.style.color = "hsl(0, 1%, 44%)"
  }




   if(inputMonth.value >=  13 || inputMonth.value <= 0) {
        let spanTitle = document.querySelector(".span_title2")
        let campoEmpty = document.querySelector(".error_valid_day2")
        inputMonth.style.border =  " 1px solid  hsl(0, 100%, 67%)"
        campoEmpty.style.display = "block"
        spanTitle.style.color = "hsl(0, 100%, 67%)"
        return
   }  else{
        let spanTitle = document.querySelector(".span_title2")
        let campoEmpty = document.querySelector(".error_valid_day2")
        inputMonth.style.border =  " 1px solid hsl(0, 0%, 94%)"
        campoEmpty.style.display = "none"
        spanTitle.style.color = "hsl(0, 1%, 44%)"
   }

   if( calcYear > date.getFullYear()){
        let spanTitle = document.querySelector(".span_title3")
        let campoEmpty = document.querySelector(".error_valid_day3")
        inputYear.style.border = " 1px solid  hsl(0, 100%, 67%)"
        campoEmpty.style.display = "block"
        spanTitle.style.color = "hsl(0, 100%, 67%)"
        return
   } else{
        let spanTitle = document.querySelector(".span_title3")
        let campoEmpty = document.querySelector(".error_valid_day3")
        inputYear.style.border =  " 1px solid hsl(0, 0%, 94%)"
        campoEmpty.style.display = "none"
        spanTitle.style.color = "hsl(0, 1%, 44%)"
   }

   if(inputYear.value.length < 4 || inputYear.value.length > 4 ){
        let spanTitle = document.querySelector(".span_title3")
        let campoEmpty = document.querySelector(".error_valid_day3")
        inputYear.style.border = " 1px solid  hsl(0, 100%, 67%)"
        campoEmpty.style.display = "block"
        spanTitle.style.color = "hsl(0, 100%, 67%)"
        return
   } else{
        let spanTitle = document.querySelector(".span_title3")
        let campoEmpty = document.querySelector(".error_valid_day3")
        inputYear.style.border =  " 1px solid hsl(0, 0%, 94%)"
        campoEmpty.style.display = "none"
        spanTitle.style.color = "hsl(0, 1%, 44%)"
   }



    fieldYear.innerHTML =  calcMonth > date.getMonth() -1  ?  calcDifferenceYear  -1 :  calcDifferenceYear

    fieldMonth.innerHTML =  Math.abs(calcDifferenceMonth )

    fieldDay.innerHTML = calcDifferenceday

    


    if(  parseInt( dateAtual.getMonth() )  >  parseInt( date.getMonth() -1 )  ) {
        fieldMonth.innerHTML = calcDay > date.getDate() ? 12 - ( Math.abs( calcDifferenceMonth-- )  ) : 12 -  Math.abs( calcDifferenceMonth ) 
    }
    
    if(calcDay > date.getDate() && parseInt( dateAtual.getMonth() )  <  parseInt( date.getMonth() -1 )){
      fieldMonth.innerHTML =   Math.abs( calcDifferenceMonth )  -1
    }


    if(calcDifferenceMonth < 0) {
        fieldMonth.innerHTML = 12 -  (Math.abs( calcDifferenceMonth )  )
    }

 
   
    if(calcDifferenceday < 0) {
        fieldDay.innerHTML = 30 - Math.abs(calcDifferenceday)
    }
})



