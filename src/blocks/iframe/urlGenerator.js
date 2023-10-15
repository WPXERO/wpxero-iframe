const iframeUrl = (props) => {
    const { iframe_url } = props;
    let videoUrl = iframe_url;

    // let videoUrl;
    function get_youtube_viedo_Id(url) {

        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    function get_vimeo_video_id(url) {
        const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
        const match = url.match(regExp);
        return (match && match[2].length === 9) ? match[2] : null;

    }

    // youtube video embed url
    const youtubeVideoId = get_youtube_viedo_Id('http://www.youtube.com/watch?v=' + iframe_url + '');
    const vimeoVideoId = get_vimeo_video_id(iframe_url);
    if (youtubeVideoId !== null) {
        videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`
    }
    if (vimeoVideoId !== null) {
        videoUrl = `https://player.vimeo.com/video/${vimeoVideoId}`
    }

    return videoUrl;

}

export default iframeUrl;


