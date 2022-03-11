import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Disabled } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';
import { ContentPicker } from '@10up/block-components';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit(props)
{
    const {
        attributes: { selectedPosts },
        setAttributes,
    } = props;

    function handlePostSelection(post)
    {
        setAttributes({ selectedPosts: post });
    }

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Options', 'featured-pages-plugin')}
                    icon="admin-post"
                    initialOpen={true}
                >
                    <ContentPicker
                        onPickChange={handlePostSelection}
                        content={[{"id":279,"uuid":"8a0bea1f-ccfd-4177-8598-cbd9bc55ef29","type":"page"}]}
                        mode="post"
                        maxContentItems={4}
                        isOrderable={true}
                        label={__(
                            "Select featured pages",
                            'featured-pages-plugin'
                        )}
                        contentTypes={['post', 'page']}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <Disabled>
                    <ServerSideRender
                        block="create-block/featured-pages-plugin"
                        attributes={selectedPosts}
                    />
                </Disabled>
            </div>
        </>
    );
}
