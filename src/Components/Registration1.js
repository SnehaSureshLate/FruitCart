function Registration1(){

    const handleSelect = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
    };
    

    return (
        <div>
            <label>Colors</label>
            <select onChange={handleSelect}>
                <option value="">Select Color</option>
                <option value="Red" >Red</option>
                <option value="Green" >Green</option>
                <option value="Blue" >Blue</option>
            </select>
        </div>
    );
}
export default Registration1;