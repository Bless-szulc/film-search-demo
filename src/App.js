
// import response from './apifetch.js';
import React, {useEffect, useState} from "react";

const MovieImage = ({link}) => {
    return <img src={link}/>
}

function App() {
    const [jsonData, setJsonData] = useState();
    const api_key = "d1b0cd372f3245a37cbdde3cb4caa572";
    const imagepage = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setJsonData(json);
            })
    },[])

    console.log(jsonData);
    console.log(`${imagepage}${jsonData?.poster_path}`);
    console.log(`${imagepage}${jsonData?.backdrop_path}`);

    const img1 = `${imagepage}${jsonData?.poster_path}`;
    const img2 = `${imagepage}${jsonData?.backdrop_path}`;

  return (
    <div>
        <MovieImage link={img1}/>
        <MovieImage link={img2}/>
    </div>
  );
}

export default App;
