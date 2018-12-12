class CreateElements {
    constructor (div,buttonAdd,form,inputFirst,inputLast,inputCreateButton,inputRemovButton,editButton,deleteButton,pageNumber,divFName,divLName,divId,inputUbdateButton){
        this.div = document.createElement('div');
        this.buttonAdd = document.createElement('button');
        this.form = document.createElement('form');
        this.inputFirst = document.createElement('input');
        this.inputLast = document.createElement('input');
        this.inputCreateButton = document.createElement('input');
        this.inputUbdateButton = document.createElement('input');
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
    getInputUbdateButton () {
        return this.inputUbdateButton;
    }
}
// CreateElements.getDivFName().className = 'col-3 align';

const body = document.getElementById('body'),
    addButtonText = document.createTextNode('+ ADD NEW RECORD'),
    textFName = document.createTextNode('First Name'),
    textLName = document.createTextNode('Last Name'),
    textId = document.createTextNode('ID'),
    textUbdate = document.createTextNode('Ubdate'),
    textDelete = document.createTextNode('Delete')
    ;
// decler barCreate Component
    let barCreate = new CreateElements(),
    ButtonAdd = barCreate.getButtonAdd()
    ;

    body.appendChild(barCreate.getDiv());
    // add class for barCreate
    barCreate.getDiv().className ='inline col-12 add' ;
    barCreate.getButtonAdd().className = 'col-3';
    //  append elements in barCreate
    barCreate.getDiv().appendChild(barCreate.getButtonAdd());
    barCreate.getButtonAdd().appendChild(addButtonText);
    ButtonAdd.addEventListener('click',()=>{
        let inputFiledNew = new CreateElements();
        inputFiledNew.getDiv().className = 'col-12 editingBox inline';
        // إضافة الريندار
    });
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
// decler render Component
    const render = new CreateElements();
    // add class for render
    render.getDiv().className = 'col-12 editingBox inline ';
    render.getDivFName().className = 'col-3 align';
    render.getDivLName().className = 'col-2 align';
    render.getDivId().className = 'col-2 align';
    render.getEditButton().className = 'buttons';
    render.getDeleteButton().className = 'buttons';
    //  append elements in render
    body.appendChild(render.getDiv());
    render.getDiv().append(render.getDivFName(),render.getDivLName(),render.getDivId(),render.getEditButton(),render.getDeleteButton());
    // append text & value In elements
    // render.getDivFName().appendChild(textFName);
    // render.getDivLName().appendChild(textLName);
    // render.getDivId().appendChild(textId);
    render.getEditButton().appendChild(textUbdate);
    render.getDeleteButton().appendChild(textDelete);
    //  Event listener for Edit
    render.getEditButton().addEventListener('click',()=>{

        render.getDivFName().parentNode.removeChild(render.getDivFName());
        render.getDivLName().parentNode.removeChild(render.getDivLName());
        render.getDivId().parentNode.removeChild(render.getDivId());
        render.getEditButton().parentNode.removeChild(render.getEditButton());
        render.getDeleteButton().parentNode.removeChild(render.getDeleteButton());
        // firstNameDiv.parentNode.removeChild(firstNameDiv);
        // lastNameDiv.parentNode.removeChild(lastNameDiv);
        // idDiv.parentNode.removeChild(idDiv);
        // delButton.parentNode.removeChild(delButton);
        // editButton.parentNode.removeChild(editButton);

        const editBox = new CreateElements;

        editBox.getDiv().className = 'col-12 editingBox inline';
        editBox.getInputFirst().className = 'col-3';
        editBox.getInputLast().className = 'col-2';
        editBox.getInputRemovButton().className = 'buttons';
        editBox.getInputUbdateButton().className = 'buttons';

        editBox.getInputRemovButton().type = 'button'
        editBox.getInputUbdateButton().type = 'submit';
        editBox.getDiv().appendChild(editBox.getForm());
        editBox.getForm().append(editBox.getInputFirst(),editBox.getInputLast(),editBox.getInputRemovButton(),editBox.getInputUbdateButton());
    })