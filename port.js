// form validation

let submit = document.getElementById("submit");
let newdiv = document.getElementById("attach")
let input = document.querySelectorAll(".input")


let validation = function () {
    let username = document.getElementById("name").value;
    let useremail = document.getElementById("email").value;
    let message=document.getElementById("message").value;
    // let newdiv=document.createElement('div')
    let text = document.getElementById('textnode')
    newdiv.classList.add('newdiv')
    //attach.appendChild(newdiv)


    if (username.length < 2) {

        text.innerHTML = "please enter a valid name"
        //let textnode=document.createTextNode("please enter a valid name")
        newdiv.appendChild(text)
        return;
    }
    else if (useremail.indexOf("@") == -1 || useremail.length < 6) {
        text.innerHTML = "please enter a valid email"
        //textnode=document.createTextNode("please enter a valid e-mail")
        newdiv.appendChild(text)
    }
    else {
        text.innerHTML = "success"
        //textnode=document.createTextNode("Success!!")
        newdiv.classList.add('newdivsuccess')
        newdiv.appendChild(text)


        //--------------- form submission--------------//
        //  var form = document.getElementById("my-form");

        // async function handleSubmit(event) {
        //     event.preventDefault();
        //     //var status = document.getElementById("my-form-status");
        //     var data = new FormData(event.target);
        //     fetch(event.target.action, {
        //         method: form.method,
        //         body: data,
        //         headers: {
        //             'Accept': 'application/json'
        //         }
        //     }).then(response => {
        //         text.innerHTML ="Thanks for your submission!";
        //         form.reset()
        //     }).catch(error => {
        //         text.innerHTML = "Oops! There was a problem submitting your form"
        //     });
        // }
        // // form.addEventListener("submit", handleSubmit)

        let myarr = []
        myarr.push({
            "name": username,
            "email": useremail,
            "message":message
        })
        let myarrstring=JSON.stringify(myarr)
        console.log(myarrstring)


        function onclick() {
            console.log("submit clicked")
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://formspree.io/f/xnqllyyv", true);
            xhr.setRequestHeader("Content-type", 'application/JSON');
            xhr.onprogress = function () {
                console.log('on progress');
            }
            xhr.send(myarrstring);
        }
        onclick()
        // submit.addEventListener("click", onclick());
    }
}

// function onclick() {
//     console.log("submit clicked")
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', "https://formspree.io/f/xnqllyyv", true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.onprogress = function () {
//         console.log('on progress');
//     }
//     xhr.send(myarr);
// }

submit.addEventListener('click', validation)



