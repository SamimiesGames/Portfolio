const CAKE_STORE = document.getElementById("hannankakku")
const RESP = document.getElementById("responsiivisuus")


export function add_events() {
    CAKE_STORE.onclick = () => {
        window.open("https://public.bc.fi/s2101002/hannankakku/")
    }
}

