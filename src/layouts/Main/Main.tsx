import React, {useEffect, useState} from "react";
import StartPage from "../StartPage/StartPage";

function Main () {
    const [ page, setPage ] = useState('start');
    const Page = StartPage;

    useEffect(() => {
        //todo change page depend on routing state
    }, [])

    return(
        <div>
            <Page/>
        </div>
    )
}

export default Main
