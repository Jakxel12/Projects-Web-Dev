let employeesHTML='';

employees.forEach((employee) => {
  employeesHTML += `<div class="employee">
  <div class="employee-img">
     <img src="resources/img/user.jpg" alt="">
  </div>
  <div class="employee-information">
    <p class="employee-name">Name: ${employee.name}</p>
    <p class="employee-age">Age: ${employee.age}</p>
    <p class="employee-description">${employee.description}</p>
  </div>
  <div class="options">
  <input id="btn" type="button" value="delete">
  </div>
</div>`
});
document.querySelector('.display-employee').innerHTML = employeesHTML;

