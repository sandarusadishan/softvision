const WebGLFallback = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#020617",
                color: "white",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <div>
                <h2>⚠ Your device does not support 3D graphics</h2>
                <p>
                    This website uses modern WebGL technology.<br />
                    Please update your browser or graphics driver.
                </p>
                <img
                    src="/fallback.svg"
                    alt="fallback"
                    style={{ maxWidth: "300px", marginTop: "20px" }}
                />
            </div>
        </div>
    );
};

export default WebGLFallback;
