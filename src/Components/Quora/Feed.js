
import Project from './Project'
import data from '../../Data/intro.json'
import musicsurf from '../../Data/musicsurf.json'
import saladtime from '../../Data/saladtime.json'
import art from '../../Data/art.json'
import stonekeep from '../../Data/stonekeep.json'


import { useState } from 'react';

function Feed() {
    return (
        <div className="feed">
            <Project data={data} /> 
            <Project data={musicsurf} />
            <Project data={saladtime} />
            <Project data={stonekeep} />
            <Project data={art} />
        </div>
       

    );
}

export default Feed;