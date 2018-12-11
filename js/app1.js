const url = 'https://reqres.in/api/users';
// لعرض الصفحة
const getPages = '?page=';

// declare Element
// const col = document.getElementById('col0')
// const xcol = col;
// xcol.style.display='inline-flex;';
// document.getElementById('render').appendChild(xcol);
// const render = document.getElementById('render');

// declare Element
const render = document.getElementById('render'),
    title = document.getElementById('title');



// function delet(id) {
    // console.log(id);
    // console.log('ythghjkmgfh');
    //  xReq = new XMLHttpRequest();

    // let deletRequst = new XMLHttpRequest();
    // xReq.open('DELETE',url+'/'+id);
    // xReq.onload = function () {
    //     console.log(url+'/'+id);
    //     col.style.display='none';
    // }
    // xReq.send();
    
// }
// function addBar(){
    // const divAdd = document.createElement('div'),
    // addButton = document.createElement('button'),
    // addButtonText = document.createTextNode('+ ADD NEW RECORD')
    // ;
    // divAdd.className = 'add inline col-12';
    // addButton.className ='col-3';
    // render.appendChild(divAdd);
    // addButton.appendChild(addButtonText);
    // divAdd.appendChild(addButton);
    // addButton.addEventListener('click',function(){
        
//     })
// }
function navBar (){
// // decler Elements
//     const divNav = document.createElement('div'),
//     firstNameInNav= document.createElement('div'),
//     lastNameInNav = document.createElement('div'),
//     idInNav = document.createElement('div'),
// // add text 
//     firstNameInNavText = document.createTextNode('FIRST NAME'),
//     lastNameInNavText = document.createTextNode('LAST NAME'),
//     idInNavText = document.createTextNode('ID');
//     // set class
//     divNav.className = 'inline col-12 nav';
//     firstNameInNav.className ='col-3';
//     lastNameInNav.className ='col-2';
//     idInNav.className ='col-2';
// // Append first & last name & id
//     title.appendChild(divNav);
//     firstNameInNav.appendChild(firstNameInNavText);
//     lastNameInNav.appendChild(lastNameInNavText);
//     idInNav.appendChild(idInNavText);
//     divNav.append(firstNameInNav,lastNameInNav,idInNav);
}

function load (pageNum){
    let xReq = new XMLHttpRequest();
    // لاستدعاء البيانات تمام
    xReq.open('GET',url+getPages+pageNum);
    xReq.onload = function() {
        // addBar();
        // navBar ();
        let xData = JSON.parse(xReq.response);
        // console.log(xReq.response);

        // decler Elements
        const divAdd = document.createElement('div'),
        addButton = document.createElement('button'),
        cancelButtonAdd =document.createElement('button'),
        addButtonText = document.createTextNode('+ ADD NEW RECORD');

        divAdd.className = 'add inline col-12';
        addButton.className ='col-3';
        title.appendChild(divAdd);
        addButton.appendChild(addButtonText);
        divAdd.appendChild(addButton);

        const divNav = document.createElement('div'),
        firstNameInNav= document.createElement('div'),
        lastNameInNav = document.createElement('div'),
        idInNav = document.createElement('div'),
    // add text 
        firstNameInNavText = document.createTextNode('FIRST NAME'),
        lastNameInNavText = document.createTextNode('LAST NAME'),
        idInNavText = document.createTextNode('ID');
        // set class
        divNav.className = 'inline col-12 nav';
        firstNameInNav.className ='col-3';
        lastNameInNav.className ='col-2';
        idInNav.className ='col-2';
    // Append first & last name & id
        title.appendChild(divNav);
        firstNameInNav.appendChild(firstNameInNavText);
        lastNameInNav.appendChild(lastNameInNavText);
        idInNav.appendChild(idInNavText);
        divNav.append(firstNameInNav,lastNameInNav,idInNav);

// for Add User
        addButton.addEventListener('click',function(){
            addButton.parentNode.removeChild(addButton);

            const Div = document.createElement('div'),
            form = document.createElement('form'),
            inputFirstName = document.createElement('input'),
            inputLastName = document.createElement('input'),
            createButton = document.createElement('button'),
            cancelButton = document.createElement('button'),

            // FOR TEXT BUTTONS
            createButtonText = document.createTextNode('Ubdate'),
            cancelButtonAddText = document.createTextNode('Cancel');

            let inputFirstNameV = inputFirstName.value,
            inputLastNameV = inputLastName.value;
            inputFirstNameV = '';
            inputLastNameV = '';
            // لتحديد الفئات في الديف
            Div.className = 'col-12 editingBox inline ';
            inputFirstName.className = 'col-3 ';
            inputLastName.className = 'col-2 ';
            cancelButtonAdd.className = 'buttons';
            createButton.className ='buttons';
            // للصق النصوص بداخل كل زر
            createButton.appendChild(createButtonText);
            cancelButtonAdd.appendChild(cancelButtonAddText);
            // للصق العناصر داخل بعضها 
            form.append(inputFirstName,inputLastName,createButton,cancelButtonAdd);
            Div.appendChild(form);
            render.parentNode.insertBefore(Div,render);
// for cancel Button
            cancelButtonAdd.addEventListener('click',function (){
                Div.parentNode.removeChild(Div);
                divNav.parentNode.removeChild(divNav);
                cancelButtonAddText.parentNode.removeChild(cancelButtonAddText);
                divAdd.appendChild(addButton);
                title.appendChild(divNav);
            });
            
// for Create data
            createButton.addEventListener('click',function (){
                
                xReq.open('POST',url);
                inputFirstNameV = xData.first_name;
                inputLastNameV = xData.last_name;
                console.log(inputFirstNameV);
            });
        })
        
        navBar ();
// for loop
        for (let z=0; z< xData.data.length; z++){
            // for render first name
    // // for render last name
    //         let xLastName = xData.data[z].last_name,
    //         inputLastNameV = '';
    //         lastNameDiv.innerHTML = xLastName;
    //         inputLastNameV.value = xLastName;

    // // numeric and render id 
    //         let xId = xData.data[z].id;
    //         idDiv.innerHTML = xId;

    
            // بكريت ديف جديد مع كل لوب
            const Div = document.createElement('div'),
            firstNameDiv = document.createElement('div'),
            lastNameDiv = document.createElement('div'),
            idDiv = document.createElement('div'),
            form = document.createElement('form'),
            inputFirstName = document.createElement('input'),
            inputLastName = document.createElement('input'),
            editButton = document.createElement('button'),
            delButton = document.createElement('button'),
            ubdateButton = document.createElement('button'),
            cancelButton = document.createElement('button'),
            DivB =  document.createElement('div'),
            // FOR TEXT BUTTONS
            editButtonText = document.createTextNode('Edit'),
            delButtonText = document.createTextNode('Delete'),
            ubdateButtonText = document.createTextNode('Ubdate'),
            cancelButtonText = document.createTextNode('Cancel')
            ;

            // لتحديد الفئات في الديف
            Div.className = 'col-12 editingBox inline ';
            firstNameDiv.className = 'col-3 first_name align';
            lastNameDiv.className = 'col-2 last_name align';
            idDiv.className = 'col-2 id align';
            inputFirstName.className = 'col-3 ';
            inputLastName.className = 'col-2 ';
            delButton.className ='buttons ';
            editButton.className ='buttons';
            cancelButton.className = 'buttons';
            ubdateButton.className ='buttons';
            // للصق النصوص بداخل كل زر
            editButton.appendChild(editButtonText);
            delButton.appendChild(delButtonText);
            ubdateButton.appendChild(ubdateButtonText);
            cancelButton.appendChild(cancelButtonText);
            // للصق العناصر داخل بعضها 
            DivB.append(delButton,editButton);
            Div.append(firstNameDiv,lastNameDiv,idDiv,DivB);


// for cancel Button
            cancelButton.addEventListener('click',function (){
                form.parentNode.removeChild(form);
                DivB.append(delButton,editButton);
                Div.append(firstNameDiv,lastNameDiv,idDiv,DivB);
            });

// for Ubdate مكانها مش مظبوط
            // ubdateButton.addEventListener('click',function(){
            //     // remove firstNameDiv & lastNameDiv & idDiv & editButton & delButton
            //     firstNameDiv.parentNode.removeChild(firstNameDiv);
            //     lastNameDiv.parentNode.removeChild(lastNameDiv);
            //     idDiv.parentNode.removeChild(idDiv);
            //     delButton.parentNode.removeChild(delButton);
            //     editButton.parentNode.removeChild(editButton);
            //     // append inputFirstName,inputLastName,idDiv,cancelButton,ubdateButton
            //     Div.append(inputFirstName,inputLastName,idDiv,delButton,ubdateButton);

            //     xReq.open('UPDATE',url+'/'+xId);
            //     xReq.onload =function (){


            //     }
            //     xReq.send();
            // });

// For Edit button 
            editButton.addEventListener('click',function(){

    // remove firstNameDiv & lastNameDiv & idDiv & editButton & delButton
                firstNameDiv.parentNode.removeChild(firstNameDiv);
                lastNameDiv.parentNode.removeChild(lastNameDiv);
                idDiv.parentNode.removeChild(idDiv);
                delButton.parentNode.removeChild(delButton);
                editButton.parentNode.removeChild(editButton);
    // append Elements
                Div.className = 'col-12 editingBox inline';
                Div.appendChild(form);
                form.append(inputFirstName,inputLastName,cancelButton,ubdateButton);
    // add Event Listener for Update 
                ubdateButton.addEventListener('click',function(){
                    xReq.open('PUT',url+'/'+xId);
                    xReq.onload =function (){
                    
                    }
                    xReq.send();
                });
            });

// for delete button تمام
            delButton.addEventListener('click',function(){
                xReq.open('DELETE',url+'/'+xId);
                xReq.onload = function () {
                    console.log(url+'/'+xId);
                    Div.style.display='none';
                }
                xReq.send();
            });
// numeric and render id for Div
            // let x = 0;
            // x++;
            render.appendChild(Div).id=z;
// for render first name
            let xName = xData.data[z].first_name;
            firstNameDiv.innerHTML= xName;
            inputFirstName.value = xName;
// for render last name
            let xLastName = xData.data[z].last_name;
            lastNameDiv.innerHTML = xLastName;
            inputLastName.value = xLastName;

// numeric and render id 
            let xId = xData.data[z].id;
            idDiv.innerHTML = xId;
            // console.log(idDiv);
        }

        //    let per_page =  xData.per_page,
        //    total = xData.total
        //    page = total/per_page;

        //     const footer =document.getElementById('foo'),
        //     ul = document.createElement('ul');
        //     footer.appendChild(ul);

        //     console.log(page);
        //     // let iPage = 1;
        //     for(let iPage = 1; ipage <= page ; ipage++){
        //         const li = document.createElement('li'),
        //         liText = document.createTextNode(iPage);
        //         li.appendChild(liText);
        //         ul.appendChild(li);
        //     }

        };
    xReq.send();
}

load (1);

// xReq.open('GET',url+getPages+'1');
// xReq.onload = function zxy() {
//     let xData = JSON.parse(xReq.response);
//     let per_page =  xData.per_page,
//     total = xData.total
//     page = total/per_page;
//      console.log(page);
// }


document.getElementById('b1').addEventListener('click', function(){
    // Div.parentNode.removeChild(Div);
    load (1);
});

document.getElementById('b2').addEventListener('click', function(){
    load (2);
});
document.getElementById('b3').addEventListener('click', function(){
    load (3);
});
document.getElementById('b4').addEventListener('click', function(){
    load (4);
});
// let i =1;
// let xReq = new XMLHttpRequest();

// xReq.open('GET',url+getPages+i);
// xReq.onload = function() {
//     let xData = JSON.parse(xReq.response);
//      i = xData.page;
// // for (i =1; i>=null; i++){
//     load (i);
//     let string ='';
//     string = i;
//     const buttonPage = document.createElement('button'),
//     footer =document.getElementById('foo'),
//     buttonPageText = document.createTextNode(string)
//     ;
//     buttonPage.id = i;

//     footer.appendChild(buttonPage)
//     document.getElementById(string).addEventListener('click', function(){
//         load (i);
//     }); 
//     i++
// }




// https://apitester.com/
// https://gist.github.com/EtienneR/2f3ab345df502bd3d13e
// https://reqres.in/
//   https://demos.telerik.com/php-ui/grid/editing-inline
// https://stackoverflow.com/questions/3448831/store-return-json-value-in-input-hidden-field

// https://support.office.com/en-us/article/connect-to-a-json-file-f65207ab-d957-4bf0-bec3-a08bb53cd4c0
// https://www.w3schools.com/js/js_json_stringify.asp
// https://developer.mozilla.org/ar/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify