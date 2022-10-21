import {useEffect} from 'react'

const Child = ({ returnData }) => {

    useEffect(() => {
        console.log("FUNCTION WAS CALLED");
    }, [returnData]);
    
    return <div>{returnData(" Samer")}</div>;
}

export default Child;