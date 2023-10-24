

let menuButton = document.querySelector('.menu__button');

let cancel = document.querySelector('.sidebar .cancelButton');
 let sidebar = document.querySelector('.sidebar');

  let aside =  document.querySelector('aside');

 function openSidebar ( ){
           sidebar.classList.add('active');
       
 };

 menuButton.addEventListener('click' ,openSidebar);




      function cancelBtn(event)
  {
    if( event.target.classList.contains('sidebar') || event.target.classList.contains('cancelButton'))
         {
    sidebar.classList.remove('active');
 }

  
  }


   
        
          
      
     

        cancel.addEventListener('click' , cancelBtn);

        sidebar.addEventListener('click' ,cancelBtn);
    



        // // if(event.target.classList.contains('sidebar') || event.target.classList.contains('cancel')  )  {
        //     sidebar.classList.remove('active');
        //   // }