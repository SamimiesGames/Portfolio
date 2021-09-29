import { CMSAreas } from "./cms_areas.js";


export function load_cms() {
    console.info("Rendering CMS")
    for(const CMSArea of CMSAreas) {
        CMSArea.render_all()
    }
}

