document.getElementById('button').addEventListener('click', loadUsers);

// Load GitHub Users
function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    
    xhr.onload = function() {
        if(this.status == 200) {
            var users = JSON.parse(this.responseText);
            
            var output = '';
            for(var i in users) {
                output += '<div class="users">';
                output += `<img src='${users[i].avatar_url}'>`;
                output += `<li>ID: ${users[i].id} </li>`;
                output += `<li>login: ${users[i].login} </li>`;
                output += '</ul>';
                output += '</div>';
            }
            
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}