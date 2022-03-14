/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Label text
     */
    label: string;
    /**
     * Label size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Text color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Uppercased text
     */
    allCaps?: boolean;
    /**
     * Custom font color
     */
    fontColor?: string;
}
/**
 * My Label
*/
declare const MyLabel: ({ allCaps, color, label, size, fontColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
