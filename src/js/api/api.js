const api = (userInput = '') => {

  function getAPIData(category, function_wrapper) {

    let url;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `${import.meta.env.VITE_API_KEY}`,
      }
    };

    switch (category) {
      case 'movie':
        url = new URL('/api/search/movie', window.location.origin);
        url.searchParams.set('query', userInput);
        break;
      case 'tv':
        url = new URL('/api/search/tv', window.location.origin);
        url.searchParams.set('query', userInput);
        break;
      case 'trending':
        url = new URL('/api/trending/all/week', window.location.origin);
    }

    fetch(url, options)
      .then(res => res.json())
      .then(res => function_wrapper(res.results))
      .catch(err => console.error(err));
  }

  return {
    getAPIData,
  }
}

export default api;