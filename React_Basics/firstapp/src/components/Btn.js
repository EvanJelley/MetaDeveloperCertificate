const Btn = ({ changeStyle, isDark }) => {
    return <button onClick={changeStyle}>{isDark ? "LightMode" : "DarkMode"}</button>
}

export default Btn;