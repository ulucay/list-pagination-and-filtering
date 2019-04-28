/******************************************
List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
const headerDiv = document.querySelector('.page-header');

// Shows the number of students per page, hides the rest of them.
const showPage = (list, page ) => {
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
const appendPageLinks = (list) => {
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

const search = () => {
   const searchDiv = document.createElement('div');
   const searchInput = document.createElement('input');
   const button = document.createElement('button');
   const studentNames = document.querySelectorAll('h3');
   const filterStudentsArray = [];
   const pageDiv = document.querySelector('.page');
   const paginationDiv = document.querySelector('.pagination');

   headerDiv.appendChild(searchDiv);
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(button);

   searchDiv.className = 'student-search';
   searchInput.placeholder = 'Search for students...';
   button.innerText = 'Search';

   const filter = () => {
      for(let i = 0 ; i < studentList.length ; i++){
         if(studentNames[i].textContent.includes(searchInput.value)){
            studentList[i].style.display = ''
            filterStudentsArray.push(studentList[i]);
         }
         else{
            studentList[i].style.display = 'none'
         }
      }
   }

   searchInput.addEventListener('keyup', () =>{
      for(let i = 0 ; i < studentList.length ; i++){
         filter();
      }
   })
   
   button.addEventListener('click', () => {
      for(let i = 0 ; i < studentList.length ; i++){
         filter();
      }
   })

};


//Loads the webpage with the first page of the pagination.
showPage(studentList,1);

search(studentList);
appendPageLinks(studentList);

