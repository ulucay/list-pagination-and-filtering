/******************************************
List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
const headerDiv = document.querySelector('.page-header');
const studentNames = document.querySelectorAll('h3');

// Shows the number of students per page, hides the rest of them.
const showPage = (studentList, page ) => {
   //Defines startIndex and endIndex to define limit of students
   const startIndex = ( page * studentsPerPage ) - studentsPerPage;
   const endIndex = ( page * studentsPerPage );
   //Shows the list of students per page
   for( let i = 0 ; i < studentList.length ; i++){
      if( i >= startIndex && i < endIndex ){
         studentList[i].style.display = ''
      }
      else{
         studentList[i].style.display = 'none';
      }
   }
}

//Creates the pagination buttons and gives functionality in order to show certain students per page
const appendPageLinks = (studentList) => {
   const pages = (studentList.length / studentsPerPage) + 1;
   
   //Creates the pagination div and unorder list
   const pageDiv = document.querySelector('div.page');
   const paginationDiv = document.createElement('div');
   const paginationUl = document.createElement('ul');

   paginationDiv.className = "pagination";
   pageDiv.appendChild(paginationDiv);
   paginationDiv.appendChild(paginationUl);
   
   //Appends li, a and creates pagination 
   for(let i = 1 ; i < pages ; i++ ){
      const paginationList = document.createElement('li');
      const paginationNumbers = document.createElement('a');
      paginationNumbers.setAttribute('href','#');
      paginationNumbers.textContent = i;
      paginationList.appendChild(paginationNumbers);
      paginationUl.appendChild(paginationList);
   }

   paginationLi = paginationUl.childNodes;
   
   //Changes className of first pagination element
   paginationLi[0].firstChild.className = 'active';

   //Shows students per page and manipulates classes of pagination
   paginationUl.addEventListener('click', (e) => {
      for(let i = 0 ; i < paginationLi.length ; i++){
         paginationLi[i].firstChild.className = '';
      }
      e.target.className = 'active';
      clickedListNumber = e.target.textContent;
      showPage(studentList, clickedListNumber);
   });
};

const search = (studentNames,studentList) => {
   const searchDiv = document.createElement('div');
   const searchInput = document.createElement('input');
   const inputValue = searchInput.value.toLowerCase();
   const searchedList = [];

   headerDiv.appendChild(searchDiv);
   searchDiv.appendChild(searchInput);

   searchDiv.className = 'student-search';
   searchInput.placeholder = 'Search for students...';

   searchInput.addEventListener('keyup', (e) =>{
      for(let i = 0 ; i < studentList.length ; i++){
         if(studentNames[i].textContent.toLowerCase().includes(inputValue)){
            studentList[i].style.display = '';
            searchedList.push[studentList[i]];
         }
         else{
            studentList[i].style.display = 'none';
         }
      }
      appendPageLinks(searchedList);
      showPage(searchedList,1);
   })
}


//Loads the webpage with the first page of the pagination.
showPage(studentList,1);

search(studentNames, studentList);

appendPageLinks(studentList);

