import './FloodLoader.css';

function FloodLoader() {
    return (
        <>
            <div class="flood-border">
                <div class="floodlight">
                    <div class="the-flood"></div>
                </div>
            </div>
            <svg class="clip">
                <clipPath id="squircle" clipPathUnits="objectBoundingBox"><path d="m0.964,0.177 c-0.014,-0.061,-0.08,-0.126,-0.141,-0.141 C0.716,0.012,0.608,0,0.5,0 S0.284,0.012,0.177,0.036 c-0.061,0.014,-0.126,0.08,-0.141,0.141 c-0.048,0.216,-0.048,0.431,0,0.647 c0.014,0.061,0.08,0.126,0.141,0.141 c0.108,0.024,0.216,0.036,0.323,0.036 s0.216,-0.012,0.323,-0.036 c0.061,-0.014,0.126,-0.08,0.141,-0.141 c0.048,-0.216,0.048,-0.431,0,-0.647"></path></clipPath>
            </svg>
        </>
    );
}

export default FloodLoader;
