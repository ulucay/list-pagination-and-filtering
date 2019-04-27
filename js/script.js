/******************************************
List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
const showPage = (studentList, page ) => {

   const startIndex = ( page * studentsPerPage ) - studentsPerPage;
   const endIndex = ( page * studentsPerPage );

   for( let i = 0 ; i < studentList.length ; i++){
      if( i >= startIndex && i < endIndex ){
         studentList[i].style.display = ''
      }
      else{
         studentList[i].style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (studentList) => {
   const pages = studentList.length / studentsPerPage;
   
   const pageDiv = document.querySelector('div.page');
   const paginationDiv = document.createElement('div');
   paginationDiv.className = "pagination";
   pageDiv.appendChild(paginationDiv);

   const paginationUl = document.createElement('ul');
   paginationDiv.appendChild(paginationUl);
   
   for(let i = 1 ; i < pages ; i++ ){
      let paginationList = document.createElement('li');
      let paginationNumbers = document.createElement('a');
      paginationNumbers.setAttribute('href','#');
      paginationNumbers.textContent = i;
      paginationList.appendChild(paginationNumbers);
      paginationUl.appendChild(paginationList);
   }

   
}

appendPageLinks(studentList);

