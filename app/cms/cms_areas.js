export class CMSArea {
    constructor(endpoint_id, default_content = null) {
        this.endpoint = document.getElementById(endpoint_id)

        this.doms = []

        if (default_content != null) {
            this.add_contents(default_content)
        }

        this.render_all()
    }

    add_contents(contents) {
        for(const content of contents) {
            this.add_content(content)
        }
    }

    add_content(content) {
        const new_content = content.dom.cloneNode(true)
        new_content.hidden = false
        new_content.textContent = content.name

        content.on_create(new_content)

        this.doms.push(new_content)
    }

    render_all() {
        for(const dom of this.doms) {
            this.endpoint.appendChild(dom)
        }
    }
}
