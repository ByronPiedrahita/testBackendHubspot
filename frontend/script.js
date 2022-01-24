const formRegister = document.getElementById("saveUser")

formRegister.addEventListener("submit", (event)=>{
    event.preventDefault()
    let register_name = document.getElementById("register_name").value
    let register_last_name = document.getElementById("register_last_name").value
    let register_document_id = document.getElementById("register_document_id").value
    let registration = {
        name: register_name,
        last_name: register_last_name,
        document_id: register_document_id
    }
    let registrationJson = JSON.stringify(registration)
    console.log(registrationJson)
    fetch('http://localhost:8080/user',{
        method: 'Post',
        body: registrationJson
    })

    setTimeout(()=>{
        window.location.reload(true)
    }, 1000)
    
    formRegister.focus()
})

fetch('http://localhost:8080/user')
.then(response => response.json())
.then(data =>{
    let html = '';
    let i = 1;
    let j = i + 1;
    data.forEach((user) => {
        nameBottomAct = "botom"+i
        nameBottomDel = "botom"+j
        html += `
        <fieldset>
            <div class="form-user p-1">
                ID <h7>${user.id}</h7><br>
            </div>
            <form class="form-user p-1">
                <div class="form-group p-1">
                    Identificación<h2>${user.document_id}</h2><br>
                </div>
                <div class="form-user p-1">
                    Cliente<h2>${user.name} ${user.last_name}</h2><br>
                </div>
                <div class="form-user p-1">
                    <button class="btn btn-success btn-block mx-auto" id=${nameBottomAct} onclick="updateUser(${user.id})">
                        ACTUALIZAR
                    </button>
                    <button class="btn btn-success btn-block mx-auto" id=${nameBottomDel} onclick="deleteUser(${user.id})">
                        ELIMINAR
                    </button>
                </div>
            </form>
        </fieldset>
        `
        i=j+1
        j=i+1
        // Insert into the HTML
        document.getElementById('showUser').innerHTML = html
    })
})

function updateUser(id){
    formRegister.focus()
    console.log(id)
    buttomUpdate = `
        <button class="btn btn-success btn-block mx-auto" id="Update" onclick="update(${id})">
            ACTUALIZAR
        </button>
    `
    document.getElementById("bottomSave").innerHTML = buttomUpdate
}

function update (id) {
    let register_name = document.getElementById("register_name").value
    let register_last_name = document.getElementById("register_last_name").value
    let register_document_id = document.getElementById("register_document_id").value
    let registration = {
        name: register_name,
        last_name: register_last_name,
        document_id: register_document_id
    }
    let registrationJson = JSON.stringify(registration)
    console.log(registrationJson)
    console.log(id)
    fetch(`http://localhost:8080/user/${id}`,{
        method: 'no-cors',
        body: registrationJson
    })
    setTimeout(()=>{
        window.location.reload(true)
    }, 1000)
    
    formRegister.focus()
}

function deleteUser(id){
    fetch(`http://localhost:8080/user/${id}`,{
        method: 'Delete',
        params: id
    })

    setTimeout(()=>{
        window.location.reload(true)
    }, 1000)
    
    formRegister.focus()
}

