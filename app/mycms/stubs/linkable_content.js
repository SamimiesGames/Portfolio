import { Content} from "../../cms/content.js";


export class LinkableContent extends Content {
    on_create(element) {
        super.on_create(element);
        
        element.href = this.extra[0]
    }
}

