import { useContext } from "react"
import Context from "../Hooks/Context.js"

function ComponentA() {
    const values=useContext(Context)
    return (
        <div>
            <h1>Component A</h1>
            <h1>{values}</h1>
        </div>
    )
}

export default ComponentA