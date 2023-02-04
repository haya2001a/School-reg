var type=document.getElementById('select_type');
//classes : 
class person{
    constructor(Name,dob,gender,birthcity){
    this.Name=Name;
    this.dob=dob;
    this.gender=gender;
    this.birthcity=birthcity;
    }
}
class student extends person{
    constructor(Name,dob,gender,birthcity,studentclass){
        super(Name,dob,gender,birthcity);
        this.studentclass=studentclass;
    }
    
}
class empolyee extends person{
    constructor(Name,dob,gender,birthcity,empsalary){
        super(Name,dob,gender,birthcity);
        this.empsalary=empsalary;
    }
}
//To show and hide fields : 
function showField(){
    
    if(type.value=='s'){
        document.getElementById('e_salary').style.visibility="visible";
        document.getElementById('emp_sal').type="text";
        document.getElementById('emp_sal').placeholder="Current Class";
        
    }else{
        document.getElementById('e_salary').style.visibility="visible";
        document.getElementById('emp_sal').type="number";
        document.getElementById('emp_sal').placeholder="Salary";

    }
}
// add students to the table 
function studentAddToList(student){
   const st_tbl=document.getElementById('student_list');
   const row=document.createElement('tr');
   row.innerHTML=`
   <td>${student.Name}</td>
   <td>${student.dob}</td>
   <td>${student.gender}</td>
   <td>${student.birthcity}</td>
   <td>${student.studentclass}</td>
   `;
   st_tbl.appendChild(row);

}

function clearin(){
    document.getElementById('name').value='';
    document.getElementById('bod').value='';
    document.getElementById('emp_sal').value='';
    document.getElementById('emp_sal').value='';
    document.getElementById('gender_select').selectedIndex=0;
    document.getElementById('city_select').selectedIndex=0;
    document.getElementById('select_type').value='Choose Your type';
    document.getElementById('e_salary').style.visibility="hidden";


}

//add employee tables : 
function empAddToList(empolyee){
    const employee_tbl=document.getElementById('emp_tbl');
    const row=document.createElement('tr');
    row.innerHTML=`
    <td>${empolyee.Name}</td>
    <td>${empolyee.dob}</td>
    <td>${empolyee.gender}</td>
    <td>${empolyee.birthcity}</td>
    <td>${empolyee.empsalary}</td>
    `;
    employee_tbl.appendChild(row); 
 }
document.getElementById('insert_form').addEventListener('submit',function(e){
    let students=[];
    let empoloyees=[];
    const name=document.getElementById('name').value;
    const dob=document.getElementById('bod').value;
    //const gender=document.getElementById('gender_select').value;
   
    var g = document.getElementById('gender_select');
    const gender = g.options[g.selectedIndex].text; 
   
    var t = document.getElementById('city_select');
    const city = t.options[t.selectedIndex].text;
    var v = document.getElementById('select_type');
    const type = v.options[v.selectedIndex].text;
    const student_class=document.getElementById('emp_sal').value;
    const empolyee_sal=document.getElementById('emp_sal').value;
    
    

if(name==='' || dob==='' ||gender==='Gender' ||city==='Your Birth Cirty' ||type==='Person Type'){
    
    swal('oops...','you have to fill all fields !','error');  
    e.preventDefault(); 
}
else if(type==='Student' &&student_class===''){
    swal('oops...','you have to enter a Class name !','error');  
    e.preventDefault(); 
 }else if(type==='Employee' &&empolyee_sal===''){
    swal('oops...','U have to enter the Salary !','error');  
    e.preventDefault(); 
}else{
    if(type==='Student'){
        const student1=new student(name,dob,gender,city,student_class);
        studentAddToList(student1);
        students.push(student1);
        console.log(students);
    }else{
        const emp=new empolyee(name,dob,gender,city,empolyee_sal);
        //console.log(student1);
        //console.log(name,bod,gender,city,type,student_class);
        empAddToList(emp);
        empoloyees.push(emp);
        //console.log('im employeeeeeee');
    }
    clearin();
    e.preventDefault();
}
e.preventDefault();

})


