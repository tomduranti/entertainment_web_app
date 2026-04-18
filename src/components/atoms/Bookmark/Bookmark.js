const useBookmark = ({ setIsBookmark }) => {

    function clickHandler() {
        setIsBookmark(value => !value);
    }

    return {
        clickHandler,
    }
}

export default useBookmark;