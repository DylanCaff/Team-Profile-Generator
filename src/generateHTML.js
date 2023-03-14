const managerCard = data => {
    return `
    <div id="${data.name}-card" class="box card">
      <div class="box name-role manager-name">
        <h2>Manager</h2>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
          <li class="list-group-item">Office Number: ${data.officeNumber}</li>
        </ul>
      </div>
    </div>
  `
}

const engineerCard = data => {
  return `
  <div id="${data.name}-card" class="box card">
    <div class="box name-role engineer-name">
      <h2>Engineer</h2>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">Name: ${data.name}</li>
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">Github: ${data.github}</li>
      </ul>
    </div>
  </div>
`
}

const internCard = data => {
  return `
  <div id="${data.name}-card" class="box card">
    <div class="box name-role intern-name">
      <h2>Intern</h2>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">Name: ${data.name}</li>
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">School: ${data.school}</li>
      </ul>
    </div>
  </div>
`
}

const build = (data) => {
  const htmlArr = []
  for(let i = 0; i < data.length; i++) {
    if(data[i].getRole() == "Manager"){
      htmlArr.push(managerCard(data[i]))
    } 
    if(data[i].getRole() == "Engineer"){
      htmlArr.push(engineerCard(data[i]))
    } 
    if(data[i].getRole() == "Intern"){
      htmlArr.push(internCard(data[i]))
    } 
  }

  const html = htmlArr.join('')
  return html
}


const template = (data) => {
  return  `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\
  <link rel="stylesheet" href="style.css" />
  <title>Team</title>
</head>
<body>
<div class="header">
  <h1>Team Profile<h1>
  </div>
  <div class="card-container>
  ${build(data)}
    </div>
</body>
</html>
    `
}

module.exports = template

