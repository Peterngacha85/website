const Menu_a = document.getElementById('menu_icon_a');
const Menu_b = document.getElementById('menu_icon_b');
const Home = document.getElementById('home');
const welcome_statement = document.getElementById('welcome_statement');
const icon = document.querySelector('.fa-bars');
const home = document.getElementById('Home');
 


let margin_value = -500;
const side_bar_on = () => {
    if(margin_value == -500){
        Show();
    }
    else{
       Hide();
    }

}
const Show = () => {
    Home.style.marginLeft = "0px";
        Home.style.display = "block";
        Menu_a.style.display = "none";
        Menu_a.style.float = "right";
        Menu_b.style.display = "block"
         welcome_statement.style.top = "350px";
        social_links.style.display = "flex";
        social_links.style.justifyContent = "center";
        margin_value = 0;
}
function Hide() {
    Home.style.marginLeft = "-500px";
    welcome_statement.style.top = "150px"
    Menu_b.style.display = "none"
    Menu_a.style.display = "block"
    margin_value = -500;
 social_links.style.display = "block";
    social_links.style.textAlign = "right";
}
