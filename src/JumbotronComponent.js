import React from 'react'
import { Button} from 'react-bootstrap'

function JumbotronComponent(props) {
    return (
        <div class="container my-5">
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h1 class="text-body-emphasis">Hello world!</h1>
                <p class="lead">
                {props.children}
                </p>
            </div>
        </div>
    );
}

export default JumbotronComponent;