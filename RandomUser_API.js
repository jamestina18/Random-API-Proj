$(document).ready(function(){
     $("#button").click(function(){
          var number = $("input").val();
          $("input").val(" "); 
          console.log("top")
          $("#buttonDEL").click(function(event) {
               $("table").hide(2000)
          }) 
         
          // api call 
          $.ajax({
               url: `https://randomuser.me/api/?results=${number}`,
               dataType: "json",
               success: function (res){
                    var data = res.results;
                    console.log(data)

                    
                    var HtmlStr1 = ""
                    var HtmlStr2 = ""
                    var HtmlStr3 = ""
                    var HtmlStr4 = ""

                    for(var i =0; i < data.length; i++) {
                         console.log([i])
                         console.log("hellooooo")
                    HtmlStr1 += `<h2>${data[i].name.first} ${data[i].name.last}</h2>`
                    HtmlStr2 += `<h4>${data[i].dob.age}</h4>`
                    HtmlStr3 += ` <h4>${data[i].email} </h4>`
                    HtmlStr4 += `<h4>
                    ${data[i].location.city}
                    ${data[i].location.street.number}
                    ${data[i].location.street.name}
                    </h4>`  

                   
                    }
               $('#name').append(HtmlStr1)
               $('#age').append(HtmlStr2)
               $('#email').append(HtmlStr3)
               $('#address').append(HtmlStr4)

               
               }
              
                
          })
         
     })
     
})

