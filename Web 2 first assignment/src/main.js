"use strict";
var students = []; // internal array
var Target = document.getElementById("Target"); // displayed table
document.getElementById('add').addEventListener('click', () => {
	let addNameInputEl = document.getElementById('name');
	let addIdInputEl = document.getElementById('idNumber');
	let addgpaInputEl = document.getElementById('gpa');

	var F = 0;
		for(let i = 0; i < Target.childElementCount; i++){
			if(Target.children[i].children[0].innerText == addIdInputEl.value){
				F = 1;
			} // Error
		} // F is supposed to be a flag, if an id is repeated, it should give 1 and output "addError" message
		if (F == 0){
			insertStudent(addNameInputEl.value, addIdInputEl.value, addgpaInputEl.value);
			insertInstance(addNameInputEl.value, addIdInputEl.value, addgpaInputEl.value);
			showMessage('asuccess')
		}

		else{
			showMessage('addError');
		}
});

document.getElementById('delete').addEventListener('click', () => {
	let deleteIdInputEl = document.getElementById('idNumber');

		if(deleteInputValidation(deleteIdInputEl.value) == 1){
			deleteStudent(deleteIdInputEl.value);
			removeInstance(deleteIdInputEl.value);
			showMessage('dsuccess');
		}
	
		else{
			showMessage('dfailure');
		}
});

document.getElementById('update').addEventListener('click', () => {
	let updateIdInputEl = document.getElementById('idNumber');
	let updateNameInputEl = document.getElementById('name');
	let updategpaInputEl = document.getElementById('gpa');
	console.log(updateNameInputEl);
	let F = 0;

	for(let i = 0; i < Target.childElementCount; i++){
		if(Target.children[i].children[0].innerText == updateIdInputEl.value){
			F = 1;
		} // Error
	} // F is supposed to be a flag, if an id is repeated, it should give 1 and output "addError" message
	if (F == 1){
		updateStudent(updateNameInputEl.value, updateIdInputEl.value, updategpaInputEl.value);
		updateInstance(updateNameInputEl.value, updateIdInputEl.value, updategpaInputEl.value);
		showMessage('uusuccess')
	}

	else{
		showMessage('uufailure');
	}
});


function addInputValidation(name, id, gpa) {
	if (name == '') {
		alert('Please insert the student name');
		return 0;
	}

	else if (id == '') {
		alert('Please insert the student ID number');
		return 0;
	}

	else if (gpa == '') {
		alert('Please insert the student gpa');
		return 0;
	}

	else {
		return 1;
	}	
}

function deleteInputValidation(id){
	if (id == '') {
		alert('Please insert the student ID number');
		return 0;
	}

	else{
		return 1;
	}
}

function updateInfoValidation(id){
	if (id = '') {
		alert('Please insert the student ID number')
		return 0;
	}

	else{
		return 1;
	}
}

function insertStudent(name, id, gpa) {
	let student = {
		name: name,
		id: id,
		gpa: gpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function insertInstance(name, id, gpa){
	let student_row = document.createElement("div");
	student_row.classList = "row p-3";
	
	let student_ID = document.createElement("div"); 
	student_ID.classList = "d-flex justify-content-center align-items-center col-4";
	student_ID.innerText = id;

	let student_name = document.createElement("div");
	student_name.classList ="d-flex justify-content-center align-items-center col-4"; 
	student_name.innerText = name;

	let student_Gpa = document.createElement("div");
	student_Gpa.classList = "d-flex justify-content-center align-items-center col-4";
	student_Gpa.innerText = gpa; 

	student_row.append(student_ID ,student_name, student_Gpa );
	Target.append(student_row);
	return Target;
}

function deleteStudent(ID){
	for(let j = 0; j < students.length; j++){
		if (students[j].id == ID){
			students.splice(j, 1);
		}
	}
}

function removeInstance(ID){
	for (let i  =  0; i < Target.childElementCount; i++){
		if(Target.children[i].children[0].innerText == ID){
			Target.children[i].remove();
		}
	}
}

function updateInstance(name, id, gpa){
	for (let i  =  0; i < Target.childElementCount; i++){
		if(Target.children[i].children[0].innerText == id){
			console.log(Target)
			Target.children[i].children[0].innerText = id;
			Target.children[i].children[1].innerText = name;
			Target.children[i].children[2].innerText = gpa;
		}
	}
}

function updateStudent(name, id, gpa){
	for (let i = 0; i < students.length; i++){
		if(students[i].id == id){
			students[i].name = name;
			students[i].gpa = gpa;
		}
	}
}

function studentIndex(ID){
	for(j = 0; j < students.length; j++){
		if (students[j].id == ID){
			showMessage('uusuccess');
			return j;
		}
	}
	return -1;
}

function showMessage(event){
    if (event === 'asuccess') {
        alert('Student information has been added!');
    }
	if (event === 'addError'){
		alert('ID already exists');
	}
	else if (event === 'afailure'){
        alert('Failed to add student.');
    }
	else if (event === 'dsuccess') {
		alert ('Student information has been deleted!');
	}
	else if (event === 'dfailure'){
		alert ('Student ID does not exist.');
	}
	else if (event === 'uusuccess'){
		alert ('Student information has been updated!');
	}
	else if (event === 'uufailure'){
		alert ('Student with such information does not exist on the list.');
	}
}


// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2
// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.