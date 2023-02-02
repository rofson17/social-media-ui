
const Card = ({ children }) => {
    console.log(children)
    return (
        <div className="bg-white shadow-md shadow-gray-400 rounded-md p-4 mb-5">
            {children}
        </div>
    )
}

export default Card