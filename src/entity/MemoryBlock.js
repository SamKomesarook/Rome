class MemoryBlock {
  constructor(id, type, selected) {
    this.id = id;
    this.type = type;
    this.selected = selected;
    this.content = "memory";
    this.contentType = "letters";
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

  setContent(content) {
    this.content = content;
  }

  setContentType(contentType) {
    this.contentType = contentType;
  }

  setSelected(selected) {
      this.selected = selected;
  }
}

export default MemoryBlock;
