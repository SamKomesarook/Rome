class HtmlElementUtil {
  static hasParentWithId = (child, parentID) => {
    if (child.parentNode === null || child.parentNode === undefined) {
      return false;
    }
    if (child.parentNode.id === parentID) {
      return true;
    }
    return HtmlElementUtil.hasParentWithId(child.parentNode, parentID);
  };
}

export default HtmlElementUtil;
