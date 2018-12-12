const url = 'https://reqres.in/api/users';
// لعرض الصفحة
const getPages = '?page=';

// declare Element
const 
    idBody = document.getElementById('body'),
    title = document.createElement('div'),
    render = document.createElement('div'),
    section = document.createElement('div'),
    footer = document.getElementById('foo')
    ;

    title.id = 'title';
    render.id = 'render';

    section.append(title,render);

    footer.parentNode.insertBefore(section,footer);



load (1);

document.getElementById('b2').addEventListener('click', function(){

    title.parentNode.removeChild(title);
    render.parentNode.removeChild(render);
    section.parentNode.removeChild(section);
    section.append(title,render);
    footer.parentNode.insertBefore(section,footer);

    load (2);
});
document.getElementById('b3').addEventListener('click', function(){
    load (3);
});
document.getElementById('b4').addEventListener('click', function(){
    load (4);
});
document.getElementById('b1').addEventListener('click', function(){
        load (1);
    });


function load (pageNum){
    let xReq = new XMLHttpRequest();
    // لاستدعاء البيانات تمام
    xReq.open('GET',url+getPages+pageNum);
    xReq.onload = function() {
        let xData = JSON.parse(xReq.response);
        // console.log(xReq.response);

        // decler Elements
        const divAdd = document.createElement('div'),
        addButton = document.createElement('button'),
        cancelButtonAdd =document.createElement('input'),
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
            inputFirstNameNew = document.createElement('input'),
            inputLastNameNew = document.createElement('input'),
            createButton = document.createElement('input'),
            cancelButtonAdd = document.createElement('input');
 
            let obj = {};
            // لتحديد الفئات في الديف
            Div.className = 'col-12 editingBox inline ';
            inputFirstNameNew.className = 'col-3 ';
            inputLastNameNew.className = 'col-2 ';
            cancelButtonAdd.className = 'buttons';
            createButton.className ='buttons';

            // set value
            createButton.value='Update';
            cancelButtonAdd.value = 'Cancel';
            //  set type
            createButton.type='submit';
            cancelButtonAdd.type='reset';
            inputFirstNameNew.setAttribute("required", "");  

            inputLastNameNew.required = true;
            // للصق العناصر داخل بعضها 
            form.append(inputFirstNameNew,inputLastNameNew,createButton,cancelButtonAdd);
            Div.appendChild(form);
            render.parentNode.insertBefore(Div,render);
// for cancel Button
            cancelButtonAdd.addEventListener('click',function (){
                Div.parentNode.removeChild(Div);
                divNav.parentNode.removeChild(divNav);
                divAdd.appendChild(addButton);
                title.appendChild(divNav);
            });
            
// for Create data
            createButton.addEventListener('click',function (){
                // set first & last name in obj and set value
                obj.first_name = inputFirstNameNew.value;
                obj.last_name = inputLastNameNew.value;
            // just for test 
                // document.write(JSON.stringify(obj));
                xReq.open('POST',url);
                // document.write(JSON.stringify(obj));
                xReq.send(JSON.stringify(obj));

            });
        })

//  loop for render
        for (let z=0; z< xData.data.length; z++){
        //  Create elements when run loop
            const Div = document.createElement('div'),
            firstNameDiv = document.createElement('div'),
            lastNameDiv = document.createElement('div'),
            idDiv = document.createElement('div'),
            form = document.createElement('form'),
            inputFirstName = document.createElement('input'),
            inputLastName = document.createElement('input'),
            editButton = document.createElement('button'),
            delButton = document.createElement('button'),
            ubdateButton = document.createElement('input'),
            cancelButton = document.createElement('input'),
            DivB =  document.createElement('div'),
            // FOR TEXT BUTTONS
            editButtonText = document.createTextNode('Edit'),
            delButtonText = document.createTextNode('Delete');


            ubdateButton.value = 'Ubdate';
            cancelButton.value = 'Cancel';
            ubdateButton.type ='submit';
            cancelButton.type = 'button';

            // لتحديد الفئات في الديف
            Div.className = 'col-12 editingBox inline ';
            firstNameDiv.className = 'col-3 first_name align';
            lastNameDiv.className = 'col-2 last_name align';
            idDiv.className = 'col-2 id align';
            inputFirstName.className = 'col-3 ';
            inputLastName.className = 'col-2 ';
            delButton.className ='buttons';
            editButton.className ='buttons';
            cancelButton.className = 'buttons';
            ubdateButton.className ='buttons';
            // للصق النصوص بداخل كل زر
            editButton.appendChild(editButtonText);
            delButton.appendChild(delButtonText);
            // ubdateButton.appendChild(ubdateButtonText);
            // cancelButton.appendChild(cancelButtonText);
            // للصق العناصر داخل بعضها 
            DivB.append(delButton,editButton);
            Div.append(firstNameDiv,lastNameDiv,idDiv,DivB);


// for cancel Button
            cancelButton.addEventListener('click',function (){
                form.parentNode.removeChild(form);
                DivB.append(delButton,editButton);
                Div.append(firstNameDiv,lastNameDiv,idDiv,DivB);
            });

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
                let obj = {};
                ubdateButton.addEventListener('click',function(){
                    obj.first_name = inputFirstName.value;
                    obj.last_name = inputLastName.value;
                    // document.write(JSON.stringify(obj));

                    xReq.open('PUT',url+'/'+xId);
                    // document.write(JSON.stringify(obj));

                    xReq.send(JSON.stringify(obj));
                    console.log(JSON.stringify(obj));
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
        };
    xReq.send();

}

// load (1);

// document.getElementById('b1').addEventListener('click', function(){
//     render.parentNode.removeChild(render);
//     title.parentNode.removeChild(title);
//         load (1);
// });

// document.getElementById('b2').addEventListener('click', function(){
//     render.parentNode.removeChild(render);
//     title.parentNode.removeChild(title);
//     document.appendChild(title);
//     document.appendChild(render);
//     load (2);
// });
// document.getElementById('b3').addEventListener('click', function(){
//     render.parentNode.removeChild(render);
//     load (3);
// });
// document.getElementById('b4').addEventListener('click', function(){
//     load (4);
// });

// https://apitester.com/
// https://gist.github.com/EtienneR/2f3ab345df502bd3d13e
// https://reqres.in/
//   https://demos.telerik.com/php-ui/grid/editing-inline
// https://stackoverflow.com/questions/3448831/store-return-json-value-in-input-hidden-field

// https://support.office.com/en-us/article/connect-to-a-json-file-f65207ab-d957-4bf0-bec3-a08bb53cd4c0
// https://www.w3schools.com/js/js_json_stringify.asp
// https://developer.mozilla.org/ar/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// file:///media/yarab/82D2CF69D2CF6051/Month%2012/Task/Index.html
// https://medium.com/ecmascript-2015/es6-classes-and-inheritance-607804080906
// https://nl.hideproxy.me/go.php?u=bBO22nXiIx4Z3BojJwfmi3iPBK7QoNFY%2FCveoWdtpYb4sl49aD6TKHh85hh%2BTQjMVwssAPAWBynHkYSK8jcqmHLJHTkidgA%3D&b=5&f=norefer