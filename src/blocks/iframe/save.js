import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import iframeUrl from './urlGenerator';
import Iframe from './iframe';



export default function save({ attributes }) {
	const {
		iframe_url,
		iframe_height,
		iframe_scrolling,
		iframe_allowFullScreen,
		lazyload,
		throttle,
		threshold,
		live,
		alignments
	} = attributes;


	var videoUrl = iframeUrl({ iframe_url });


	return (
		<div {...useBlockProps.save(
			{
				className: `align${alignments}`
			}
		)}>
			{
				lazyload ? <Iframe url={videoUrl} className="lazy" throttle={throttle} threshold={threshold} live={live} height={iframe_height} allowFullScreen={iframe_allowFullScreen} scrolling={iframe_scrolling} /> : <Iframe url={videoUrl} height={iframe_height} allowFullScreen={iframe_allowFullScreen} scrolling={iframe_scrolling} />
			}
		</div>
	);
}
