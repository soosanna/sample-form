function lables(tagname,attrname,attrvalue,content){

    var ele=document.createElement("div");
    //ele.innerHTML="this is div";
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute("class","sam");
    ele.innerHTML=content;
    return ele;
    

}
function linebreak(tagname){
    var br=document.createElement("tagname");
    return br;
}
function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    ele1.setAttribute(attrname3,attrvalue3);
    //ele1.setAttribute(attrname4,attrvalue4);
  
    return ele1;
}

//function radio(tagname,atrname,atrvalue,atrname1,atrvalue1,atrname2,atrvalue2)
//{
  //  var radio=document.createElement(tagname);
    //radio.setAttribute(atrname,atrvalue);
    //radio.setAttribute(atrname1,atrvalue1);
   // radio.setAttribute(atrname2,atrvalue2);
    //radio.setAttribute(atrname3,atrvalue3);
   

    //return radio;
//}

var container=document.createElement("div");
container.className="container box";
//container.innerText="Form";
var row=document.createElement("div");
row.className="row";

var col4=document.createElement("div");
col4.innerText="Form";
col4.className="col-4 main";

// col4.setAttribute("class","main");
var col8=document.createElement("div");
col8.className="col-8";
// row.append(col4,col8);
// container.append(row);

var firstname=lables("lable","for","firstname","Firstname");
col4.append(firstname);
var br1=linebreak(br);
col4.append(br1);
var input1=input("input","type","firstname","name","firstname","id","firstname","placeholder","firstname");
col4.append(input1);

var lastname=lables("lable","for","lastname","Lastname");
col4.append(lastname);
var br2=linebreak(br);
col4.append(br2);
var input2=input("input","type","lastname","lastname","lastname","id","lastname","placeholder","secoundname");
col4.append(input2);

var address1=lables("lable","for","address1","Address1");
col4.append(address1);
var br=linebreak(br);
col4.append(br);
var input5=input("input","type","address1","name","adress1","id","address1","placeholder","address1");
col4.append(input5);

var address2=lables("lable","for","address2","address2");
col4.append(address2);
var br3=linebreak(br);
col4.append(br3);
var input3=input("input","type","address2","name","address2","id","address2","placeholder","emaddress2");
col4.append(input3);

var pin=lables("lable","for","pin","pin");
col4.append(pin);
var br4=linebreak(br);
col4.append(br4);
var input4=input("input","type","pin","name","pin","id","pin","placeholder","pin");
col4.append(input4);

var gender=lables("lable","for","gender","Gender");
col4.append(gender);
var br5=linebreak(br);
col4.append(br5);

//var radio=document.getElementById("male").value;
var input6=document.createElement("radio");
input6.innerHTML+=`<input type="radio" id="male" name="gender" value="male">Male`
col4.append(input6);
var input7=document.createElement("radio");
input7.innerHTML+=`<input type="radio" id="female" name="gender" value="female">Female `
col4.append(input7);

var button=document.createElement("button");
button.innerHTML="Click me";
button.addEventListener("click",addrow);
col4.append(button);
//row.append(col4);

//table
let table_div = createtable("div");
table_div.setAttribute("class", "table-responsive");

let table_tag = createtable("table");
table_tag.classList.add("table", "table-bordered");

let table_body = createtable("tbody");
table_body.setAttribute("id", "t-body");

let table_head = createtable("thead");
table_head.setAttribute("id", "table-head");
let table_tr = createtable("tr");

let table_th1 = createtable("th");
table_th1.innerText = "Firstname";

let table_th2 = createtable("th");
table_th2.innerText = "lastname";

let table_th3 = createtable("th");
table_th3.innerText = "Address";

let table_th4 = createtable("th");
table_th4.innerText = "pin";

let table_th5 = createtable("th");
table_th5.innerText = "gender";



function createtable(taganme) {
  let elements = document.createElement(taganme);
  return elements;
}


    function addrow(){
        // var res=prompt("enter valid key");

        let table_body=document.getElementById("t-body");

        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerHTML=document.getElementById("firstname").value;

        let td2=document.createElement("td");
        td2.innerHTML=document.getElementById("lastname").value;

        let td3=document.createElement("td");
        td3.innerHTML=document.getElementById("address1").value;

        let td4=document.createElement("td");
        td4.innerHTML=document.getElementById("pin").value;

        let td5=document.createElement("td");
        let x=document.getElementsByName("gender");
        for (var i=0; i<x.length; i++) {
            if (x[i].checked) {
                td5.innerHTML = x[i].value
            }
        }
        trow.append(td1,td2,td3,td4,td5);
        table_body.append(trow);


    }



   

// table.append(thead);
// col8.append(table);
// container.append(col8);
//col8.append(table);


//row.append(col4,col8);


//container.append(col4)
//document.body.append(container);
//document.body.append(container,lastname,br2,input2,address1,br,input5,address2,br3,input3,pin,br4,input4);
// document.body.append(container,firstname,br1,input1,lastname,br2,input2,address1,br,input5,address2,br3,input3,pin,br4,input4);


table_div.append(table_tag);
table_tag.append(table_head, table_body);
table_head.append(table_tr);

table_tr.append(table_th1, table_th2, table_th3,table_th4,table_th5);
col8.append(table_div);
container.append(col4,col8);
document.body.append(container);