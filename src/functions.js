import { useState } from 'react';

const Functions = () => {

    function getAPIData({ userInput }) {

        const url = new URL('/api/search/movie', window.location.origin);
        url.searchParams.set('query', userInput);

        console.log(url)


        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTJhZmY5MWUyZDU3MjBiNmVkNTc0MTUxY2RhZWRmYSIsIm5iZiI6MTc3NjExNDgyMy44MjIsInN1YiI6IjY5ZGQ1Yzg3M2QwMjdkNWVhOGQ5M2I3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IdglMUZG8uVpADdT97TiddyhT2SLJ4qTO4sOMiiXzU0'
            }
          };
          
          fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }


    return {
        getAPIData,
    }
}

export default Functions;