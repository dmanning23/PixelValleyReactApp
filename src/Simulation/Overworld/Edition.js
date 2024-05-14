import { useQuery } from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import { GET_EDITION } from '../../Queries/GetEdition';

const Edition = (props) => {

    const { loading, error, data } = useQuery(GET_EDITION, {
        variables: { editionId: props.editionId }
    });

    if (loading) {
        return (
            <ReactLoading type="spinningBubbles" color="#444" />
        );
    }
    else if (error) {
        return (
            <p>Something went wrong...</p>
        );
    }
    else {
        return (
            <div>
                <h1>{props.newspaperName}</h1>
                <h3>{data.edition.edition.date}</h3>
                <div className="accordion" id="accordionExample">
                    {data.edition.edition.articles.map((data, index) => {
                        return <div key={index} className="accordion-item">
                            <h4 className="accordion-header" id={`heading${index}`} >
                                <button className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}>
                                    <h4>{data.headline}</h4>
                                </button>
                            </h4>
                            <div id={`collapse${index}`}
                                className="accordion-collapse collapse show"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample" >
                                <div className="accordion-body">
                                    <p>{data.body}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Edition;