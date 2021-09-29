export class Content {
    constructor(name, dom, ...extra) {
        this.name = name
        this.extra = extra
        this.dom = document.getElementById(dom)
    }

    on_create(element) {}
}
