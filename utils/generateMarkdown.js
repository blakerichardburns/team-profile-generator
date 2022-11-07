function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>The Team</title>
  </head>

    <body>
        <header>
            <h1 class="navbar" style="background-color: #e3f2fd;">The Team</h1>
        </header>
            <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Manager</div>
                <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${data.id}</li>
                    <li class="list-group-item"><a href="mailto:${data.email}">Email: ${data.email}</a></li>
                    <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                  </ul>
                </div>
            </div>
            <div class="card text-bg-success mb-3" style="max-width: 18rem;">
                <div class="card-header">Engineer</div>
                <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${data.id}</li>
                    <li class="list-group-item"><a href="mailto:${data.email}">Email: ${data.email}</a></li>
                    <li class="list-group-item"><a href="https://github.com/${data.github}" target="blank">Github: ${data.github}</a></li>
                  </ul>
                </div>
            </div>
            <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
                <div class="card-header">Intern</div>
                <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${data.id}</li>
                    <li class="list-group-item"><a href="mailto:${data.email}">Email: ${data.email}</a></li>
                    <li class="list-group-item">School: ${data.school}</li>
                  </ul>
                </div>
            </div>
    </body>
</html>
    `;
}

module.exports = generateMarkdown;