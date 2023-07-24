const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
        style={{margin: '0 auto', background: 'rgb(255 255 255)', display: 'block', shapeRendering: 'auto'}}
        width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-1.8333333333333333s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(30 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-1.6666666666666667s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(60 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-1.5s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(90 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-1.3333333333333333s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(120 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-1.1666666666666667s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(150 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-1s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(180 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(210 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(240 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-0.5s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(270 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(300 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(330 50 50)">
            <rect x="46" y="22" rx="4" ry="8" width="8" height="16" fill="#3e6d8d">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
            </g>
        </svg>
    )
}
export default Spinner;