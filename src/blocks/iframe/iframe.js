
const iframe = (props) => {
    const { height, url, className, throttle, threshold, live, allowFullScreen, scrolling } = props;
    return (
        <iframe class={className} data-throttle={throttle} data-threshold={threshold} data-src={url} width="100%" height={height} src={url} loading={className} data-live={live} allowfullscreen={allowFullScreen} scrolling={scrolling}></iframe>
    )
}

export default iframe;