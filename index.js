console.log('I am connected')

document.querySelector('#submit-form').addEventListener('click', (event) => {
    event.preventDefault();

    console.log(`I was clicked`)
    const name = document.getElementsByTagName('input')[0].value;
    const phone = document.getElementsByTagName('input')[2].value;
    const email = document.getElementsByTagName('input')[3].value;
    const message = document.getElementsByTagName('textarea')[0].value;

    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(message)

    if (name.length == 0 || email.length == 0){
        alert(`Name and Email are required`)
        return;
    } else {
        fetch('https://formsubmit.co/ajax/8bdcb058f529774aa91eb33ea6321f4d', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    

})