import "./scss/app.scss"
import Banner  from "./components/Banner";

const app = ()=>{
    const header = document.querySelector('#banner')
    header.innerHTML = Banner()

}

// Initialize app
app()