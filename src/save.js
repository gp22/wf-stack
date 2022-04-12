import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import setClassName from './setClassName';

export default function save ({ attributes }) {
	const className = setClassName(attributes);

	return (
		<div {...useBlockProps.save({
			className
		})}>
			<InnerBlocks.Content/>
		</div>
	);
}
