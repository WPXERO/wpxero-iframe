import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	ToggleControl,
	RangeControl,
	TextControl,
	Placeholder,
	SelectControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

import iframeUrl from './urlGenerator';
import Iframe from './iframe';

// colors

export default function Edit({ attributes, setAttributes, clientId }) {
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
	let videoUrl = iframeUrl({ iframe_url });

	const [videoID, setVideoID] = useState('');

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Iframe Settings', 'wpxero-iframe')}
					initialOpen={false}
				>
					<TextControl
						label={__('Iframe Url', 'wpxero-iframe')}
						help={__(
							'Type or paste the specified iframe url that you want to display on the block.',
						)}
						value={iframe_url}
						placeholder={__(
							'Enter the URL to embed here...',
							'wpxero-iframe'
						)}
						onChange={(iframe_url) => setAttributes({ iframe_url })}
					/>

					<RangeControl
						label={__('Height', 'wpxero-iframe')}
						help={__(
							'Specifies the height of the iframe in pixels.', 'wpxero-iframe'
						)}
						value={iframe_height}
						onChange={(iframe_height) => setAttributes({ iframe_height })}
						min={200}
						max={1200}
					/>

					<SelectControl
						label={__('Scrolling', 'wpxero-iframe')}
						help={__(
							'Specifies whether scrollbars should be displayed within the iframe', 'wpxero-iframe'
						)}
						value={iframe_scrolling}
						options={[
							{ label: __('Auto', 'wpxero-iframe'), value: 'auto' },
							{ label: __('Yes', 'wpxero-iframe'), value: 'yes' },
							{ label: __('No', 'wpxero-iframe'), value: 'no' },
						]}
						onChange={(iframe_scrolling) => setAttributes({ iframe_scrolling })}
					/>
					<ToggleControl
						label={__('Allow Full Screen', 'wpxero-iframe')}

						help={iframe_allowFullScreen ? __('Allow Full Screen is enabled', 'wpxero-iframe') : __('Allow Full Screen is disabled', 'wpxero-iframe')}
						checked={iframe_allowFullScreen}
						onChange={(e) => setAttributes({ iframe_allowFullScreen: !iframe_allowFullScreen })}
					/>



					<ToggleControl
						label={__('Lazyload', 'wpxero-iframe')}
						help={lazyload ? __('Lazyload is enabled', 'wpxero-iframe') : __('Lazyload is disabled', 'wpxero-iframe')}
						checked={lazyload}
						onChange={(e) => setAttributes({ lazyload: !lazyload })}
					/>
					{

						lazyload && (
							<><RangeControl
								label={__('Throttle', 'wpxero-iframe')}
								help={__(
									'millisecond interval at which to process events', 'wpxero-iframe'
								)}
								value={throttle}
								onChange={(throttle) => setAttributes({ throttle })}
								min={0}
								max={1000} />

								<RangeControl
									label={__('Threshold', 'wpxero-iframe')}
									help={__(
										'scroll distance from element before its loaded', 'wpxero-iframe'
									)}
									value={threshold}
									onChange={(threshold) => setAttributes({ threshold })}
									min={0}
									max={1000} />

								<ToggleControl
									label={__('Live', 'wpxero-iframe')}
									help={__('auto bind lazy loading to ajax loaded elements ', 'wpxero-iframe')}
									checked={live}
									onChange={(e) => setAttributes({ live: !live })}
								/>
							</>
						)}
				</PanelBody>
			</InspectorControls>


			<BlockControls>
				<BlockAlignmentToolbar
					value={alignments}
					onChange={(alignments) => setAttributes({ alignments })}
				/>
			</BlockControls>

			<div
				{...useBlockProps({
					className: {
						'wpxero-iframe': true,
						[`wpxero-iframe-${clientId}`]: true,
						[`align${alignments}`]: alignments,
					}
				})}
			>
				{!iframe_url && (

					<Placeholder
						style={{ display: 'block', width: '100%' }}
						label={
							<>
								<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="28" height="28" viewBox="0 0 24 24">
									<path fill-rule="evenodd" d="M13,20 L20,20 L20,4 L4,4 L4,11 L11,11 C12.1045695,11 13,11.8954305 13,13 L13,20 Z M11,20 L11,13 L4,13 L4,20 L11,20 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z" />
								</svg>
								<p>{__('WPXero Iframe', 'wpxero-iframe')}</p>
							</>
						}>
						<div className="wpxero-iframe--warning flex-container">
							<>

								<TextControl
									className='wpxero-input-url'
									label={__('Iframe Url', 'wpxero-iframe')}
									help={__(
										'Paste a link to the content you want to display on your site.',
										'wpxero-iframe'
									)}
									placeholder={__(
										'Enter the URL to embed here...',
										'wpxero-iframe'
									)}
									onChange={setVideoID}

								/>
							</>


							<Button
								className='wpxero-submit-button'
								variant='primary'
								onClick={() => {
									setAttributes({ iframe_url: videoID });
								}}
							>

								{__('EMBED', 'wpxero-iframe')}
							</Button>
						</div>
					</Placeholder>
				)}

				{iframe_url && (
					<>
						<div className="wpxero-iframe--editor">
							{
								lazyload ? <Iframe url={videoUrl} className="lazy" throttle={throttle} threshold={threshold} live={live} height={iframe_height} allowFullScreen={iframe_allowFullScreen} scrolling={iframe_scrolling} /> : <Iframe url={videoUrl} height={iframe_height} allowFullScreen={iframe_allowFullScreen} scrolling={iframe_scrolling} />
							}
						</div>
					</>
				)}
			</div>
		</Fragment>
	);
}
