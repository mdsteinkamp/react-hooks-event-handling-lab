// Code Keypad Component Here

function Keypad (){

    function handleChange(e) {
        console.log('Entering password...')
    }

    return (
        <div>
            <form onChange={handleChange}>
                <input type="password" name="password" placeholder="Enter Password" />
            </form>
        </div>
    )
}

export default Keypad;