class CreateElements {
    constructor (div,buttonAdd,form,inputFirst,inputLast,inputCreateButton,inputRemovButton,editButton,deleteButton,pageNumber,divFName,divLName,divId){
        this.div = document.createElement('div');
        this.buttonAdd = document.createElement('button');
        this.form = document.createElement('form');
        this.inputFirst = document.createElement('input');
        this.inputLast = document.createElement('input');
        this.inputCreateButton = document.createElement('input');
        this.inputRemovButton = document.createElement('input');
        this.editButton = document.createElement('button');
        this.deleteButton = document.createElement('button');
        this.pageNumber = document.createElement('button');
        this.divFName =  document.createElement('div');
        this.divLName =  document.createElement('div');
        this.divId =  document.createElement('div');
    }
    getDiv(){
        return this.div;
    }
    getButtonAdd(){
        return this.buttonAdd;
    } 
    getForm(){
        return this.form;
    } 
    getInputFirst(){
        return this.inputFirst;
    } 
    getInputLast(){
        return this.inputLast;
    } 
    getInputCreateButton(){
        return this.inputCreateButton;
    } 
    getInputRemovButton(){
        return this.inputRemovButton;
    } 
    getEditButton(){
        return this.editButton;
    } 
    getDeleteButton(){
        return this.deleteButton;
    }
    getPageNumber(){
        return this.pageNumber;
    }
    getDivFName () {
        return this.divFName
    }
    getDivLName () {
        return this.divLName;
    }
    getDivId(){
        return this.divId;
    }
}
// CreateElements.getDivFName().className = 'col-3 align';

const body = document.getElementById('body'),
    addButtonText = document.createTextNode('+ ADD NEW RECORD'),
    textFName = document.createTextNode('First Name'),
    textLName = document.createTextNode('Last Name'),
    textId = document.createTextNode('ID')
    ;
// decler barCreate Component
    let barCreate = new CreateElements();

    body.appendChild(barCreate.getDiv());
    // add class for barCreate
    barCreate.getDiv().className ='inline col-12 add' ;
    barCreate.getButtonAdd().className = 'col-3';
    //  append elements in barCreate
    barCreate.getDiv().appendChild(barCreate.getButtonAdd());
    barCreate.getButtonAdd().appendChild(addButtonText);

// decler navBar Component
    let navBar = new CreateElements();
    // add class for navBar
    navBar.getDiv().className = 'inline col-12 nav ';
    navBar.getDivFName().className = 'col-3 align';
    navBar.getDivLName().className = 'col-2 align';
    navBar.getDivId().className = 'col-2 align';
    //  append elements in navBar
    body.appendChild(navBar.getDiv());
    navBar.getDiv().appendChild(navBar.getDivFName());
    navBar.getDiv().appendChild(navBar.getDivLName());
    navBar.getDiv().appendChild(navBar.getDivId());
    navBar.getDivFName().appendChild(textFName);
    navBar.getDivLName().appendChild(textLName);
    navBar.getDivId().appendChild(textId);
    // navBar.getDiv().appendChild()
