let employeePayrollList;

window.addEventListener('DOMContentLoaded',(event) =>{
    console.log("Called Event");
    employeePayrollList = getDataFromLocalStorage();
    document.querySelector('.emp-count').textContent=employeePayrollList.length;
    createInnerHtml();
})

const createInnerHtml = () =>{
    console.log("loading inner html");
    const headerHtml= "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th<th>Actions</th></tr>";
    //const employeePayrollDataList=createEmployeePayrollJSON()
    let innerHtml=`${headerHtml}`;
    for ( empPayrollData of employeePayrollList)
       { 
        innerHtml = `
        ${innerHtml}
        <tr>
            <td><img src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                ${getDepartmentHtml(empPayrollData._department)}   
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td><img name="${empPayrollData._id}" src="../assets/icons/delete-black-18dp.svg" alt="Delete" onClick="remove(this)">
                <img name="${empPayrollData._id}" src="../assets/icons/create-black-18dp.svg" alt="Edit" onClick="update(this)">
            </td>
            </tr>
        `;
        document.querySelector('#display').innerHTML=innerHtml;
}
}

const getDepartmentHtml=(data)=>{
    let deptHtml = '';
    for (let dept of data) {
        deptHtml =`${deptHtml}<div class="dept-label">${dept}</div>`;
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () =>{
    const empPayrollListLocal=[
        {
            _id : new Date().getDate(),
            _name : "Narayan Mahadevn",
            _gender : 'Male',
            _department : [
                'Engineering', 'Finance'
            ],
            _salary : 50000,
            _startDate : '29 Oct 2019',
            _note : 'Good one',
            _profilePic : "../assets/profile-images/Ellipse -2.png"
        },
        {
            _id : new Date().getDate()+1,
            _name : "Amar Pawra",
            _gender : 'Male',
            _department : [
                'Engineering'
            ],
            _salary : 50000,
            _startDate : '29 Oct 2019',
            _note : 'Good one',
            _profilePic : "../assets/profile-images/Ellipse -1.png"
        }
    ]
    return empPayrollListLocal;
}

const getDataFromLocalStorage= () => {
    return localStorage.getItem('EmployeePayrollList')? 
           JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

