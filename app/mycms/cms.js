import {LinkableContent} from "./stubs/linkable_content.js";
import {Content} from "../cms/content.js";

import {CMSArea} from "../cms/cms_areas.js";


export function load_cms() {
    console.info("Load CMS")
    new CMSArea(
        "redirects",
        [
            new LinkableContent("Projektit", "redirect", "#projects"),
            new Content("Galleria", "redirect")
        ]
    )
    new CMSArea(
        "projects",
        [
            new LinkableContent("Hannankakut", "project", "https://public.bc.fi/s2101002/hannankakku/"),
            new LinkableContent("Hannankakut", "project", "https://public.bc.fi/s2101002/hannankakku/")
        ]
    )
}



