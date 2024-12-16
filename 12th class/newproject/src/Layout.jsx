import { Link } from "react-router-dom"

function Layout(){
    return(
        <>
        <div>
            <ul style={{listStyle:"none", display:"flex", gap:"20px", color:"black"}}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                
            </ul>
        </div>
        </>
    )
}

export default Layout