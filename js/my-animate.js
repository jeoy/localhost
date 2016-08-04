   
   

// js淡入淡出

$(function(){
           $("#pg5-1").hover(function () {
                $("#pg5-title").fadeIn(2000);
          });  
           
        }); 
  
 
 $(function () {
           $("#pg5-1").hover(function () {
                $("#pro-text1").fadeIn(3000);
            }, //mouseenter
                function () {
                     $("#pro-text1").fadeOut(3000);
                });//mouseleave
        }); 
 
 $(function () {
           $("#pg5-2").hover(function () {
                $("#pro-text2").fadeIn(2000);
            }, //mouseenter
                function () {
                     $("#pro-text2").fadeOut(2000);
                });//mouseleave
        }); 
 $(function () {
           $("#pg5-2").hover(function () {
                $("#pro-text3").fadeIn(2000);
            }, //mouseenter
                function () {
                     $("#pro-text3").fadeOut(2000);
                });//mouseleave
        }); 
    $(function () {
           $("#pg5-3").hover(function () {
                $("#pro-text4").fadeIn(2000);
            }, //mouseenter
                function () {
                     $("#pro-text4").fadeOut(2000);
                });//mouseleave
        }); 
   
    // <!-- hover动态添加类 -->
    $(function () {
           $("#page3").hover(function () {
            
           
            }, //mouseenter
                function () {
                
                });//mouseleave
        }); 



    $(function () {
           $("#page3-box1").hover(function () {
                 $("#metro1").addClass("metro-right");
            
                
            }, //mouseenter
                function () {
                 $("#metro1").removeClass("metro-right");    
                });//mouseleave
        }); 
    $(function () {
           $("#page3-box2").hover(function () {
            
                $("#metro2").addClass("metro-bottom");
           
            }, //mouseenter
                function () {
                 $("#metro2").removeClass("metro-bottom");    
                });//mouseleave
        }); 
 

    $(function () {
           $("#page3-box3").hover(function () {
               
                $("#metro3").addClass("metro-bottom");
                event.preventDefault();
            }, //mouseenter
                function () {
                 $("#metro3").removeClass("metro-bottom");    
                });//mouseleave
        }); 

    $(function () {
            $("#page3-box4").hover(function () {
            
                $("#metro4").addClass("metro-right");
           
            }, //mouseenter
                function () {
                 $("#metro4").removeClass("metro-right");    
                });//mouseleave
        }); 
    $(function () {
            $("#page3-box5").hover(function () {
            
                $("#metro5").addClass("metro-bottom");
           
            }, //mouseenter
                function () {
                 $("#metro5").removeClass("metro-bottom");    
                });//mouseleave
        }); 

    $(function () {
           $("#pg5-11").hover(function () {
                $("#pg5-title").addClass("in-title");
            }, //mouseenter
                function () {
                     $("#pg5-title").removeClass("in-title");
                });//mouseleave
        }); 
 

     $(function () {
           $("#light").hover(function () {
                $("#pg6-bg").addClass("in-bg");
              
            }, //mouseenter
                function () {
                       
                     $("#pg6-bg").filter(':not(:animated)').removeClass("in-bg");
                });//mouseleave
        }); 


 $(function () {
           $("#index-pic1").hover(function () {
                $(this).addClass("in-index-pic1");
            }, //mouseenter
                function () {
                     $(this).removeClass("in-index-pic1");
                });//mouseleave
        }); 
  $(function () {
           $("#index-pic2").hover(function () {
                $(this).addClass("in-index-pic2");
            }, //mouseenter
                function () {
                     $(this).removeClass("in-index-pic2");
                });//mouseleave
        }); 
   $(function () {
           $("#index-pic3").hover(function () {
                $(this).addClass("in-index-pic3");
            }, //mouseenter
                function () {
                     $(this).removeClass("in-index-pic3");
                });//mouseleave
        }); 

 


//  $(function () {
//   $("#light").toggle(
//     function(){
//     $("#pg6-bg").addClass("in-bg");},
   
//     function(){
//     $("#pg6-bg").removeClass("in-bg"); }
//   );
// });