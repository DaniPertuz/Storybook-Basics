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
const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor = ''
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
}

export default MyLabel;