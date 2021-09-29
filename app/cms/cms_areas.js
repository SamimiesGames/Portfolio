export class CMSArea {
    constructor(endpoint_id, default_content=null, redirects=null) {
        this.endpoint = document.getElementById(endpoint_id)
        this.dom = document.createElement("a")

        this.doms = []

        if (default_content != null) {
            this.add_contents(default_content)
        }
    }

    copy_dom() {
        const dom = this.dom.cloneNode(true)
        console.debug("Adding dom: ", dom)
        this.doms.push(dom)

        return dom
    }

    add_contents(contents) {
        for(const content of contents) {
            this.add_content(content)
        }
    }

    add_content(content) {
        const new_content = this.copy_dom()
        new_content.textContent = content.name
        new_content.href = content.redirect
    }

    render_all() {
        for(const dom of this.doms) {
            this.endpoint.appendChild(dom)
        }
    }
}


class Content {
    constructor(name, redirect = null) {
        this.name = name
        this.redirect = redirect
    }
}


export const CMSAreas = [
    new CMSArea(
        "redirects",
        [
            new Content("Projektit", "#projects"),
            new Content("Galleria", "galleria.html")
        ]
    )
]
