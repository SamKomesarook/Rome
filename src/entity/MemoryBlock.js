class MemoryBlock {
  constructor(id, type, selected) {
    this.id = id;
    this.type = type;
    this.selected = selected;
    this.content = "";
    this.contentType = "letters";
    this.animated = false;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }

  getContent() {
    return this.content;
  }

  getContentType() {
    return this.contentType;
  }

  getSelected() {
    return this.selected;
  }

  getAnimated() {
    return this.animated;
  }

  setContent(content) {
    this.content = content;
  }

  setContentType(contentType) {
    this.contentType = contentType;
  }

  setSelected(selected) {
    this.selected = selected;
  }

  setAnimated(animated) {
    this.animated = animated;
  }
}

export default MemoryBlock;
