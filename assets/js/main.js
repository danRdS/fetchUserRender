const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response => response.json())
.then(data => {
    const lista = document.querySelector('#lista');
 
    data.map(item => {
        const li = document.createElement('li');
        li.setAttribute('id', item.id);
        li.innerHTML = `
            <span class="index">${item.id}</span>
            <span><p>ID:</p> ${item.id}</span>
            <span><p>Nome:</p> ${item.name}</span>
            <span><p>Login:</p> ${item.username}</span>
            <span id="email"><p>Email:</p> ${item.email}</span>
            <span><p>Tel.:</p> ${item.phone}</span>
            <span><p>Site:</p> ${item.website}</span>
            <fieldset>
                <legend>Endereço</legend>
                <span><p>Cidade:</p> ${item.address.city}</span>
                <span><p>Rua:</p> ${item.address.street}</span>
                <span><p>Nº:</p> ${item.address.suite}</span>
            </fieldset>
        `
        lista.appendChild(li);
    })
 })
 .catch(err => console.error(err.message))

 const btnTop = document.querySelector('.btn');
 
 window.onscroll = () => scrollFunction();

 function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        btnTop.classList.add('visible');
    } else {
        btnTop.classList.remove('visible');
    }
 }

 function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }