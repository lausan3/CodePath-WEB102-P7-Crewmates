import { Link } from "react-router-dom"

const RouteNotFound = () => {
    return (
        <div className="main-ctn">
            <div className="center-box">
                <h2>Woah there buddy! Looks like you landed on the wrong side of this here town!</h2>
                <img src="..\clown.gif" height="500" width="500" alt="ClownED"/>
                <Link className="block" to='/'>Click here to get back!</Link>
            </div>
        </div>
    )
}

export default RouteNotFound