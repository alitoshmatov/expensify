import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '@components/Text';
import useThemeStyles from '@hooks/useThemeStyles';
import renderEmojis from './renderEmojis';
import type InlineCodeBlockProps from './types';
import type {TTextOrTPhrasing} from './types';

function InlineCodeBlock<TComponent extends TTextOrTPhrasing>({TDefaultRenderer, textStyle, defaultRendererProps, boxModelStyle}: InlineCodeBlockProps<TComponent>) {
    const styles = useThemeStyles();
    const flattenTextStyle = StyleSheet.flatten(textStyle);
    const {textDecorationLine, ...textStyles} = flattenTextStyle;
    const {elements, hasLargeStyle} = renderEmojis(defaultRendererProps, textStyles, styles);

    return (
        <TDefaultRenderer
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...defaultRendererProps}
        >
            <Text style={[boxModelStyle, textStyles, hasLargeStyle ? styles.onlyEmojisText : {}]}>{elements}</Text>
        </TDefaultRenderer>
    );
}
InlineCodeBlock.displayName = 'InlineCodeBlock';

export default InlineCodeBlock;
