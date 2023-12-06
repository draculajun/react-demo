import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{padding: 20 + 'px'}}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error == null ? '' : error.statusText || error.message}</i>
            </p>
        </div>
    );
}