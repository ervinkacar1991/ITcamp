let accountsTableBody = document.querySelector('#accounts-table-body');
// let accountViewBtn = document.querySelector('[href="account-view"]');
// let addAccountViewBtn = document.querySelector('[href="add-account-view"]');
let allLinks = document.querySelectorAll('.nav-link');
let accountView = document.querySelector('#account-view');
let addAccountView = document.querySelector('#add-account-view');
let views = document.querySelectorAll('.view');

for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].addEventListener('click', showView);   
}

function showView(e){
    e.preventDefault()
    for (let i = 0; i < views.length; i++) {
        views[i].style.display = 'none'; 
    }
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display='block';
}


// addAccountViewBtn.addEventListener('click', function(e){
//     e.preventDefault()
//   addAccountView.style.display = 'block';
//   accountView.style.display = 'none';
// } )
// accountViewBtn.addEventListener('click', function(e){
//     e.preventDefault()
//   accountView.style.display = 'block';
//   addAccountView.style.display = 'none';
// } )



createAccountsTable ();

function createAccountsTable (){
     let htmlAccounts = '';
     for (let i = 0; i < db.length; i++) {
         const account = db[i];
         htmlAccounts += `
     <tr>
         <td>${account.id}</td>
         <td>${account.name}</td>
         <td>${account.lastname}</td>
         <td>${account.email}</td>
         <td>${account.phone}</td>
     </tr>
     `
     }
     accountsTableBody.innerHTML = htmlAccounts;
}