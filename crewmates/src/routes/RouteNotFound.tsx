import { Link } from "react-router-dom"

const RouteNotFound = () => {
    return (
        <>
            <h2>Woah there buddy! Looks like you landed on the wrong side of this here town!</h2>
            <img src="..\clown.gif" alt="ClownED"/>
            <Link className="block" to='/'>Click here to get back!</Link>
        </>
    )
}

export default RouteNotFound