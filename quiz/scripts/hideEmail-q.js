/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        if (isValidEmail(email)) {
            hiddenLocal = "*".repeat(email.split("@")[0].length);
            domain = email.split("@")[1];
            let newEmail = hiddenLocal + "@" + domain;
            let liEl = document.createElement("li");
            liEl.innerHTML = newEmail;
            document.querySelector("#emails").appendChild(liEl);
        }
    }
}

const isValidEmail = (email) => {
    if (email.match(/[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/g)) {
        return true;
    } 
    return false;
}