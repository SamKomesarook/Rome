/**
 * MemoryBlock Object
 */
class MemoryBlock {
  constructor(id, type, selected) {
    this.id = id;
    this.type = type;
    this.selected = selected;
    this.content = "";
    this.contentType = "letters";
    this.animated = false;
  }

  /**
   * get id of memory
   * @return {int} memory id
   */
  getId() {
    return this.id;
  }

  /**
   * get memory type
   * @return {String} memory type
   */
  getType() {
    return this.type;
  }

  /**
   * get content of memory
   * @return {String} memory content
   */
  getContent() {
    return this.content;
  }

  /**
   * get content type of the memory can hold
   * @return {String} content type the the memory can hold, either letters of numbers
   */
  getContentType() {
    return this.contentType;
  }

  /**
   * get if the memory is currently selected
   * @return {Boolean} true if the memory is currently selected, false otherwise
   */
  getSelected() {
    return this.selected;
  }

  /**
   * get animated state of a memory
   * @return {Boolean} true when the animation state is true for the memory, false otherwise
   */
  getAnimated() {
    return this.animated;
  }

  /**
   * set the content of a memory
   * @param {String | int} content content that going to be written into the memory
   */
  setContent(content) {
    this.content = content;
  }

  /**
   * set the type of value that a memory can hold
   * @param {String} contentType specific content type that the memory can hold, either letters of numbers
   */
  setContentType(contentType) {
    this.contentType = contentType;
  }

  /**
   * set the selected state for a memory
   * @param {Boolean} selected if the memory is selected of not
   */
  setSelected(selected) {
    this.selected = selected;
  }

  /**
   * set animation state for a memory
   * @param {Boolean} animated animation state of a memory
   */
  setAnimated(animated) {
    this.animated = animated;
  }
}

export default MemoryBlock;
