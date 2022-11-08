import { Link } from "react-router-dom"

const Header = () => {
    return (
    <>
        <nav>
            <div id="headNavContainer">
                <Link to="/">Home</Link> 
                <Link to="/">Journalism</Link> 
                <Link to="/">Coding</Link> 
                <Link to="/">Data Visualizations</Link> 
                <Link to="/">About</Link> 
            </div>
        </nav>
    </>
    )
}

export default Header