"use strict";
/*var p = [
    {firstName : "Harshit", MiddleName : "Mittal" , LastName : "xyz", Email : "abc", PhoneNo : 12345, Role : "pqr", Address: "address1"},
    {firstName : "Smaksh", MiddleName : "Goyal" , LastName : "xyz", Email : "abc", PhoneNo : 12345, Role : "pqr", Address: "address2"},
    {firstName : "Vansh", MiddleName : "Goyal" , LastName : "xyz", Email : "abc", PhoneNo : 12345, Role : "pqr", Address: "address3"}
     
 ];
var x = [
    {firstName : "Harshit", MiddleName : "Mittal" , LastName : "xyz", Email : "abc", PhoneNo : 12345, Role : "pqr", Address: "address1"},
    {firstName : "Smaksh", MiddleName : "Goyal" , LastName : "xyz", Email : "abc", PhoneNo : 12345, Role : "pqr", Address: "address2"},
    {FirstName : "Vansh", MiddleName : "Goyal" , LastName : "xyz", Email : "abc", PhoneNo : 12345, Role : "pqr", Address: "address3"}
     
 ];
*/
exports.__esModule = true;
exports.Role = void 0;
var post_js_1 = require("E:/Project/Assignments-main/post.js");
var editCell = /** @class */ (function () {
    function editCell(id) {
        this.elementId = id;
    }
    editCell.prototype.cellEditUtil = function () {
        var inputString = document.getElementById(this.elementId + "T").value;
        document.getElementById(this.elementId + "X").innerText = inputString;
        document.getElementById(this.elementId + "X").style.display = 'block';
        document.getElementById(this.elementId + "T").style.display = 'none';
        document.getElementById(this.elementId + "B").style.display = 'none';
    };
    return editCell;
}());
var deleteRow = /** @class */ (function () {
    function deleteRow(id) {
        this.elementId = id;
    }
    deleteRow.prototype.MyDelete = function () {
        var elementIdFirstChar = this.elementId[0];
        document.getElementById("First" + elementIdFirstChar + "X").innerHTML = "";
        document.getElementById("Middle" + elementIdFirstChar + "X").innerHTML = "";
        document.getElementById("Last" + elementIdFirstChar + "X").innerHTML = "";
        document.getElementById("Email" + elementIdFirstChar + "X").innerHTML = "";
        document.getElementById("PhoneNo" + elementIdFirstChar + "X").innerHTML = "";
        document.getElementById("Role" + elementIdFirstChar + "X").innerHTML = "";
        document.getElementById("Address" + elementIdFirstChar + "X").innerHTML = "";
    };
    return deleteRow;
}());
var editRow = /** @class */ (function () {
    function editRow(id) {
        this.elementId = id;
    }
    editRow.prototype.rowEditUtil = function () {
        document.getElementById(this.elementId.concat("BB")).style.display = 'block';
        document.getElementById(this.elementId.concat("BBB")).style.display = 'block';
        document.getElementById(this.elementId).style.display = 'none';
        document.getElementById(this.elementId.concat("B")).style.display = 'none';
        //document.getElementById("First1B").style.display ='block';
        //document.getElementById(str2).style.display='block';
        var elementIdFirstChar = this.elementId[0];
        //document.write("First" + elementIdFirstChar + "B");
        document.getElementById("First" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("First" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("First" + elementIdFirstChar + "X").style.display = 'none';
        document.getElementById("Middle" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("Middle" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("Middle" + elementIdFirstChar + "X").style.display = 'none';
        document.getElementById("Last" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("Last" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("Last" + elementIdFirstChar + "X").style.display = 'none';
        document.getElementById("Email" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("Email" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("Email" + elementIdFirstChar + "X").style.display = 'none';
        document.getElementById("PhoneNo" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("PhoneNo" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("PhoneNo" + elementIdFirstChar + "X").style.display = 'none';
        document.getElementById("Role" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("Role" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("Role" + elementIdFirstChar + "X").style.display = 'none';
        document.getElementById("Address" + elementIdFirstChar + "T").style.display = 'block';
        document.getElementById("Address" + elementIdFirstChar + "B").style.display = 'block';
        document.getElementById("Address" + elementIdFirstChar + "X").style.display = 'none';
    };
    return editRow;
}());
/*
myFunc : void;
    refreshData : void;
    Edit : void;
    cancel: void;
    save : void;
    Edit2 : void;
    Delete : void
*/
var Role;
(function (Role) {
    Role[Role["Harshit"] = 0] = "Harshit";
    Role[Role["Smaksh"] = 1] = "Smaksh";
    Role[Role["Vansh"] = 2] = "Vansh";
})(Role = exports.Role || (exports.Role = {}));
var User = /** @class */ (function () {
    function User(F, M, L, E, P, R, A) {
        this.FirstName = F;
        this.MiddleName = M;
        this.LastName = L;
        this.Email = E;
        this.PhoneNo = P;
        this.Role = R;
        this.Address = A;
    }
    return User;
}());
//console.log(arr);
var user1 = new User(post_js_1.myarr[1].firstname, "xyz", "Mittal", "pqr", 1234567890, "pqr", "shd");
var user2 = new User("Smaksh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var user3 = new User("Vansh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var originalUser1 = new User("Harshit", "xyz", "Mittal", "pqr", 1234567890, "pqr", "shd");
var originalUser2 = new User("Smaksh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var originalUser3 = new User("Vansh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var userDetailsArray = new Array();
userDetailsArray.push(user1);
userDetailsArray.push(user2);
userDetailsArray.push(user3);
console.log(userDetailsArray[0]);
var userDetailsOriginalArray = new Array();
userDetailsOriginalArray.push(originalUser1);
userDetailsOriginalArray.push(originalUser2);
userDetailsOriginalArray.push(originalUser3);
var btnClickedCount = 0;
function loadData() {
    if (btnClickedCount === 0) {
        document.getElementById("First0").innerHTML = "First Name";
        document.getElementById("Middle0").innerHTML = "Middle Name";
        document.getElementById("Last0").innerHTML = "Last Name";
        document.getElementById("Email0").innerHTML = "Email";
        document.getElementById("PhoneNo0").innerHTML = "PhoneNo";
        document.getElementById("Role0").innerHTML = "Role";
        document.getElementById("Address0").innerHTML = "Address";
        document.getElementById("0").innerHTML = "Modification";
        document.getElementById("First1X").innerText = userDetailsArray[0].FirstName;
        document.getElementById("Middle1X").innerText = userDetailsArray[0].MiddleName;
        document.getElementById("Last1X").innerHTML = userDetailsArray[0].LastName;
        document.getElementById("Email1X").innerHTML = userDetailsArray[0].Email;
        document.getElementById("PhoneNo1X").innerText = userDetailsArray[0].PhoneNo.toString();
        document.getElementById("Role1X").innerText = userDetailsArray[0].Role;
        document.getElementById("Address1X").innerHTML = userDetailsArray[0].Address;
        document.getElementById("1B").style.display = 'block';
        document.getElementById("1BB").style.display = 'block';
        //document.getElementById("1BBB").style.display='block';
        document.getElementById("1B").innerHTML = "Edit";
        document.getElementById("1BB").innerHTML = "Delete";
        document.getElementById("1BBB").innerHTML = "Save";
        document.getElementById("1BBBB").innerHTML = "Cancel";
        //document.getElementById("First1B").innerHTML = "pqr";
        document.getElementById("First2X").innerHTML = userDetailsArray[1].FirstName;
        document.getElementById("Middle2X").innerHTML = userDetailsArray[1].MiddleName;
        document.getElementById("Last2X").innerHTML = userDetailsArray[1].LastName;
        document.getElementById("Email2X").innerHTML = userDetailsArray[1].Email;
        document.getElementById("PhoneNo2X").innerText = userDetailsArray[1].PhoneNo.toString();
        document.getElementById("Role2X").innerText = userDetailsArray[1].Role;
        document.getElementById("Address2X").innerHTML = userDetailsArray[1].Address;
        document.getElementById("2B").style.display = 'block';
        document.getElementById("2BB").style.display = 'block';
        //document.getElementById("2BBB").style.display='block';
        document.getElementById("2B").innerHTML = "Edit";
        document.getElementById("2BB").innerHTML = "Delete";
        document.getElementById("2BBB").innerHTML = "Save";
        document.getElementById("2BBBB").innerHTML = "Cancel";
        document.getElementById("First3X").innerHTML = userDetailsArray[2].FirstName;
        document.getElementById("Middle3X").innerHTML = userDetailsArray[2].MiddleName;
        document.getElementById("Last3X").innerHTML = userDetailsArray[2].LastName;
        document.getElementById("Email3X").innerHTML = userDetailsArray[2].Email;
        document.getElementById("PhoneNo3X").innerText = userDetailsArray[2].PhoneNo.toString();
        document.getElementById("Role3X").innerText = userDetailsArray[2].Role;
        document.getElementById("Address3X").innerHTML = userDetailsArray[2].Address;
        document.getElementById("3B").style.display = 'block';
        document.getElementById("3BB").style.display = 'block';
        //document.getElementById("3BBB").style.display='block';
        document.getElementById("3B").innerHTML = "Edit";
        document.getElementById("3BB").innerHTML = "Delete";
        document.getElementById("3BBB").innerHTML = "Save";
        document.getElementById("3BBBB").innerHTML = "Cancel";
    }
    else {
        document.getElementById("First1X").innerText = userDetailsOriginalArray[0].FirstName;
        document.getElementById("Middle1X").innerText = userDetailsOriginalArray[0].MiddleName;
        document.getElementById("Last1X").innerHTML = userDetailsOriginalArray[0].LastName;
        document.getElementById("Email1X").innerHTML = userDetailsOriginalArray[0].Email;
        document.getElementById("PhoneNo1X").innerText = userDetailsOriginalArray[0].PhoneNo.toString();
        document.getElementById("Role1X").innerText = userDetailsOriginalArray[0].Role;
        document.getElementById("Address1X").innerHTML = userDetailsOriginalArray[0].Address;
        //document.getElementById("First1B").innerHTML = "pqr";
        document.getElementById("First2X").innerHTML = userDetailsOriginalArray[1].FirstName;
        document.getElementById("Middle2X").innerHTML = userDetailsOriginalArray[1].MiddleName;
        document.getElementById("Last2X").innerHTML = userDetailsOriginalArray[1].LastName;
        document.getElementById("Email2X").innerHTML = userDetailsOriginalArray[1].Email;
        document.getElementById("PhoneNo2X").innerText = userDetailsOriginalArray[1].PhoneNo.toString();
        document.getElementById("Role2X").innerText = userDetailsOriginalArray[1].Role;
        document.getElementById("Address2X").innerHTML = userDetailsOriginalArray[1].Address;
        document.getElementById("First3X").innerHTML = userDetailsOriginalArray[2].FirstName;
        document.getElementById("Middle3X").innerHTML = userDetailsOriginalArray[2].MiddleName;
        document.getElementById("Last3X").innerHTML = userDetailsOriginalArray[2].LastName;
        document.getElementById("Email3X").innerHTML = userDetailsOriginalArray[2].Email;
        document.getElementById("PhoneNo3X").innerText = userDetailsOriginalArray[2].PhoneNo.toString();
        document.getElementById("Role3X").innerText = userDetailsOriginalArray[2].Role;
        document.getElementById("Address3X").innerHTML = userDetailsOriginalArray[2].Address;
        document.getElementById("First1T").style.display = 'none';
        document.getElementById("First1B").style.display = 'none';
        document.getElementById("First2T").style.display = 'none';
        document.getElementById("First2B").style.display = 'none';
        document.getElementById("First3T").style.display = 'none';
        document.getElementById("First3B").style.display = 'none';
        document.getElementById("Middle1T").style.display = 'none';
        document.getElementById("Middle1B").style.display = 'none';
        document.getElementById("Middle2T").style.display = 'none';
        document.getElementById("Middle2B").style.display = 'none';
        document.getElementById("Middle3T").style.display = 'none';
        document.getElementById("Middle3B").style.display = 'none';
        document.getElementById("Last1T").style.display = 'none';
        document.getElementById("Last1B").style.display = 'none';
        document.getElementById("Last2T").style.display = 'none';
        document.getElementById("Last2B").style.display = 'none';
        document.getElementById("Last3T").style.display = 'none';
        document.getElementById("Last3B").style.display = 'none';
        document.getElementById("Email1T").style.display = 'none';
        document.getElementById("Email1B").style.display = 'none';
        document.getElementById("Email2T").style.display = 'none';
        document.getElementById("Email2B").style.display = 'none';
        document.getElementById("Email3T").style.display = 'none';
        document.getElementById("Email3B").style.display = 'none';
        document.getElementById("PhoneNo1T").style.display = 'none';
        document.getElementById("PhoneNo1B").style.display = 'none';
        document.getElementById("PhoneNo2T").style.display = 'none';
        document.getElementById("PhoneNo2B").style.display = 'none';
        document.getElementById("PhoneNo3T").style.display = 'none';
        document.getElementById("PhoneNo3B").style.display = 'none';
        document.getElementById("Role1T").style.display = 'none';
        document.getElementById("Role1B").style.display = 'none';
        document.getElementById("Role2T").style.display = 'none';
        document.getElementById("Role2B").style.display = 'none';
        document.getElementById("Role3T").style.display = 'none';
        document.getElementById("Role3B").style.display = 'none';
        document.getElementById("Address1T").style.display = 'none';
        document.getElementById("Address1B").style.display = 'none';
        document.getElementById("Address2T").style.display = 'none';
        document.getElementById("Address2B").style.display = 'none';
        document.getElementById("Address3T").style.display = 'none';
        document.getElementById("Address3B").style.display = 'none';
    }
    btnClickedCount++;
}
document.getElementById("1B").style.display = 'none';
document.getElementById("1BB").style.display = 'none';
document.getElementById("2B").style.display = 'none';
document.getElementById("2BB").style.display = 'none';
document.getElementById("3B").style.display = 'none';
document.getElementById("3BB").style.display = 'none';
document.getElementById("1BBB").style.display = 'none';
document.getElementById("2BBB").style.display = 'none';
document.getElementById("3BBB").style.display = 'none';
document.getElementById("1BBBB").style.display = 'none';
document.getElementById("2BBBB").style.display = 'none';
document.getElementById("3BBBB").style.display = 'none';
//document.write(document.getElementById("First1T"));
document.getElementById("First1T").style.display = 'none';
document.getElementById("First1B").style.display = 'none';
document.getElementById("Middle1T").style.display = 'none';
document.getElementById("Middle1B").style.display = 'none';
document.getElementById("Last1T").style.display = 'none';
document.getElementById("Last1B").style.display = 'none';
document.getElementById("Email1T").style.display = 'none';
document.getElementById("Email1B").style.display = 'none';
document.getElementById("PhoneNo1T").style.display = 'none';
document.getElementById("PhoneNo1B").style.display = 'none';
document.getElementById("Role1T").style.display = 'none';
document.getElementById("Role1B").style.display = 'none';
document.getElementById("Address1T").style.display = 'none';
document.getElementById("Address1B").style.display = 'none';
document.getElementById("First2T").style.display = 'none';
document.getElementById("First2B").style.display = 'none';
document.getElementById("Middle2T").style.display = 'none';
document.getElementById("Middle2B").style.display = 'none';
document.getElementById("Last2T").style.display = 'none';
document.getElementById("Last2B").style.display = 'none';
document.getElementById("Email2T").style.display = 'none';
document.getElementById("Email2B").style.display = 'none';
document.getElementById("PhoneNo2T").style.display = 'none';
document.getElementById("PhoneNo2B").style.display = 'none';
document.getElementById("Role2T").style.display = 'none';
document.getElementById("Role2B").style.display = 'none';
document.getElementById("Address2T").style.display = 'none';
document.getElementById("Address2B").style.display = 'none';
document.getElementById("First3T").style.display = 'none';
document.getElementById("First3B").style.display = 'none';
document.getElementById("Middle3T").style.display = 'none';
document.getElementById("Middle3B").style.display = 'none';
document.getElementById("Last3T").style.display = 'none';
document.getElementById("Last3B").style.display = 'none';
document.getElementById("Email3T").style.display = 'none';
document.getElementById("Email3B").style.display = 'none';
document.getElementById("PhoneNo3T").style.display = 'none';
document.getElementById("PhoneNo3B").style.display = 'none';
document.getElementById("Role3T").style.display = 'none';
document.getElementById("Role3B").style.display = 'none';
document.getElementById("Address3T").style.display = 'none';
document.getElementById("Address3B").style.display = 'none';
function refreshData() {
    document.getElementById("btn").innerHTML = "Refresh Data";
}
function Edit(elementId) {
    //document.write(id);
    /*let str1 = elementId.concat("B");
    let str2 = elementId.concat("BB");
    let str3 = elementId.concat("BBB");
    
    document.getElementById(str2)!.style.display='block';
    document.getElementById(str3)!.style.display='block';
    document.getElementById(elementId)!.style.display='none';
    document.getElementById(str1)!.style.display='none';
    //document.getElementById("First1B").style.display ='block';
    //document.getElementById(str2).style.display='block';
    var elementIdFirstChar:string  = elementId[0];
    
    //document.write("First" + elementIdFirstChar + "B");
    
    document.getElementById("First" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("First" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("First" + elementIdFirstChar + "X")!.style.display = 'none';
    
    document.getElementById("Middle" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("Middle" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("Middle" + elementIdFirstChar + "X")!.style.display = 'none';
    
    document.getElementById("Last" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("Last" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("Last" + elementIdFirstChar + "X")!.style.display = 'none';
    
    document.getElementById("Email" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("Email" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("Email" + elementIdFirstChar + "X")!.style.display = 'none';
    
    document.getElementById("PhoneNo" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("PhoneNo" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("PhoneNo" + elementIdFirstChar + "X")!.style.display = 'none';
    
    document.getElementById("Role" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("Role" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("Role" + elementIdFirstChar + "X")!.style.display = 'none';
    
    document.getElementById("Address" + elementIdFirstChar + "T")!.style.display = 'block';
    document.getElementById("Address" + elementIdFirstChar + "B")!.style.display = 'block';
    document.getElementById("Address" + elementIdFirstChar + "X")!.style.display = 'none';
    //document.getElementById("First1T").innerHTML = "xyz";
    // document.getElementById("First1T").style.display ='none';
    // document.write(document.getElementById("First1T"));
    
    
    */
    var newRow = new editRow(elementId);
    newRow.rowEditUtil();
}
//document.write(document.getElementById("First" + str1));
function Delete(elementId) {
    //document.write(document.getElementById("First" + str1));
    var dltRow = new deleteRow(elementId);
    dltRow.MyDelete();
}
function editCellFunc(elementId) {
    var newCell = new editCell(elementId);
    newCell.cellEditUtil();
}
function save(elementId) {
    var elementIdLastChar = +elementId.slice(-1);
    userDetailsArray[elementIdLastChar - 1].FirstName = document.getElementById("First" + elementIdLastChar + "X").innerText;
    userDetailsArray[elementIdLastChar - 1].MiddleName = document.getElementById("Middle" + elementIdLastChar + "X").innerText;
    userDetailsArray[elementIdLastChar - 1].LastName = document.getElementById("Last" + elementIdLastChar + "X").innerText;
    userDetailsArray[elementIdLastChar - 1].Email = document.getElementById("Email" + elementIdLastChar + "X").innerText;
    userDetailsArray[elementIdLastChar - 1].PhoneNo = +document.getElementById("PhoneNo" + elementIdLastChar + "X").innerText;
    userDetailsArray[elementIdLastChar - 1].Role = document.getElementById("Role" + elementIdLastChar + "X").innerText;
    userDetailsArray[elementIdLastChar - 1].Address = document.getElementById("Address" + elementIdLastChar + "X").innerText;
    document.getElementById("First" + elementId + "X").style.display = 'block';
    document.getElementById("First" + elementId + "T").style.display = 'none';
    document.getElementById("First" + elementId + "B").style.display = 'none';
    document.getElementById("Middle" + elementId + "X").style.display = 'block';
    document.getElementById("Middle" + elementId + "T").style.display = 'none';
    document.getElementById("Middle" + elementId + "B").style.display = 'none';
    document.getElementById("Last" + elementId + "X").style.display = 'block';
    document.getElementById("Last" + elementId + "T").style.display = 'none';
    document.getElementById("Last" + elementId + "B").style.display = 'none';
    document.getElementById("Email" + elementId + "X").style.display = 'block';
    document.getElementById("Email" + elementId + "T").style.display = 'none';
    document.getElementById("Email" + elementId + "B").style.display = 'none';
    document.getElementById("PhoneNo" + elementId + "X").style.display = 'block';
    document.getElementById("PhoneNo" + elementId + "T").style.display = 'none';
    document.getElementById("PhoneNo" + elementId + "B").style.display = 'none';
    document.getElementById("Role" + elementId + "X").style.display = 'block';
    document.getElementById("Role" + elementId + "T").style.display = 'none';
    document.getElementById("Role" + elementId + "B").style.display = 'none';
    document.getElementById("Address" + elementId + "X").style.display = 'block';
    document.getElementById("Address" + elementId + "T").style.display = 'none';
    document.getElementById("Address" + elementId + "B").style.display = 'none';
    document.getElementById(elementIdLastChar + "B").style.display = 'block';
    document.getElementById(elementIdLastChar + "BB").style.display = 'block';
    document.getElementById(elementIdLastChar + "BBB").style.display = 'none';
    document.getElementById(elementIdLastChar + "BBBB").style.display = 'none';
    //document.write()
}
function cancel(elementId) {
    var elementIdLastChar = +elementId.slice(-1);
    document.getElementById("First" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].FirstName;
    document.getElementById("Middle" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].MiddleName;
    document.getElementById("Last" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].LastName;
    document.getElementById("Email" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].Email;
    document.getElementById("PhoneNo" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].PhoneNo.toString();
    document.getElementById("Role" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].Role;
    document.getElementById("Address" + elementIdLastChar + "X").innerText = userDetailsArray[elementIdLastChar - 1].Address;
    document.getElementById("First" + elementId + "X").style.display = 'block';
    document.getElementById("First" + elementId + "T").style.display = 'none';
    document.getElementById("First" + elementId + "B").style.display = 'none';
    document.getElementById("Middle" + elementId + "X").style.display = 'block';
    document.getElementById("Middle" + elementId + "T").style.display = 'none';
    document.getElementById("Middle" + elementId + "B").style.display = 'none';
    document.getElementById("Last" + elementId + "X").style.display = 'block';
    document.getElementById("Last" + elementId + "T").style.display = 'none';
    document.getElementById("Last" + elementId + "B").style.display = 'none';
    document.getElementById("Email" + elementId + "X").style.display = 'block';
    document.getElementById("Email" + elementId + "T").style.display = 'none';
    document.getElementById("Email" + elementId + "B").style.display = 'none';
    document.getElementById("PhoneNo" + elementId + "X").style.display = 'block';
    document.getElementById("PhoneNo" + elementId + "T").style.display = 'none';
    document.getElementById("PhoneNo" + elementId + "B").style.display = 'none';
    document.getElementById("Role" + elementId + "X").style.display = 'block';
    document.getElementById("Role" + elementId + "T").style.display = 'none';
    document.getElementById("Role" + elementId + "B").style.display = 'none';
    document.getElementById("Address" + elementId + "X").style.display = 'block';
    document.getElementById("Address" + elementId + "T").style.display = 'none';
    document.getElementById("Address" + elementId + "B").style.display = 'none';
    document.getElementById(elementIdLastChar + "B").style.display = 'block';
    document.getElementById(elementIdLastChar + "BB").style.display = 'block';
    document.getElementById(elementIdLastChar + "BBB").style.display = 'none';
    document.getElementById(elementIdLastChar + "BBBB").style.display = 'none';
}
document.getElementById("btn").addEventListener("click", refreshData);
//document.getElementById("1B").addEventListener("click", Edit2);
//document.getElementById("1B").addEventListener("click", Edit("1B"));
//document.getElementById("1BB").addEventListener("click", Delete("1BB"));*/
