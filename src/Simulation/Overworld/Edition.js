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
                <h1>{data.edition.edition.date}</h1>
                {data.edition.edition.articles.map((data, index) => {
                    return (
                        <div key={index} className="border border-dark">
                            <h3>{data.headline}</h3>
                            <p>{data.body}</p>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Edition;