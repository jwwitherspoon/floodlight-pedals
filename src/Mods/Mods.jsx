import './Mods.css';

function Mods() {
    return (
        <div>
            <p>
                These are the mods I have done before and could do again.
                If you're interested in one of these or want a mod not listed here, email me
                at <a href="mailto:floodlight.pedals@gmail.com">floodlight.pedals@gmail.com</a>. Price is negotiable.
            </p>
            <div class="mod-container">
                <div class="mod-cell">
                    <img src="assets/img/mods/ds-1-tigress.jpg" alt="Boss DS-1 Tigress Mod"/>
                    <p>Tigress Mod (Boss DS-1 shown here)</p>
                </div>
                <div class="mod-cell">
                    <img src="assets/img/mods/ch-1-vibrato.jpg" alt="Boss CH-1 Vibrato Mod"/>
                    <p>Boss CH-1 Vibrato Mod</p>
                </div>
            </div>    
        </div>
    );
}

export default Mods;
