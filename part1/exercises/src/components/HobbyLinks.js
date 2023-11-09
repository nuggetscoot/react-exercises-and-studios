import React from 'react';

export default function Hobbylinks() {
    let hobbyLinks = [
        'https://kcollect.net/dashboard',
        'https://neokyo.com/en#',
    ];
    
    return (
        <div>
            <h3>Hobby Links</h3>
            <a href={hobbyLinks[0]}> Keep Track Of Collection</a> <br></br>
            <a href={hobbyLinks[1]}> Shop For Collection</a>

        </div>
    );
}
