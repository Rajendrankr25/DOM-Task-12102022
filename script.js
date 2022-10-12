//Assignemt 01: Create a HTML Form Using DOM
//1.firstname,2.Middlename,3.lastname,4.Phone number
function flabel(tgname, attrname, attrvalue, content){
    var ele=document.createElement(tgname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML=content;
    return ele;
}

function cinput(tgname, attrname, attrvalue, attrname1, attrvalue1){
    var ele=document.createElement(tgname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
}

function cbr(tgname){
    var ele=document.createElement(tgname);
    return ele;
}

var label=flabel("label","for","fname","First Name");
var br1=cbr("br");
var inp1=cinput("input","type","text","id","fname");
var br2=cbr("br");
var label2=flabel("label","for","mname","Middle Name");
var br3=cbr("br");
var inp2=cinput("input","type","text","id","mname");
var br4=cbr("br");
var label3=flabel("label","for","lname","Last Name");
var br5=cbr("br");
var inp3=cinput("input","type","text","id","lname");
var br6=cbr("br");
var label4=flabel("label","for","pnumber","Phone Number");
var br7=cbr("br");
var inp4=cinput("input","type","number","id","pnumber");
var br8=cbr("br");

document.body.append(label,br1,inp1,br2,label2,br3,inp2,br4,label3,br5,inp3,br6,label4,br7,inp4,br8);
