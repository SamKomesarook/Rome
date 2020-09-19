const TypeWriter = function (txtElementArg, wordsArg, waitArg = 3000) {
  const txtElement = txtElementArg;
  const words = wordsArg;
  let txt = '';
  let wordIndex = 0;
  const wait = parseInt(waitArg, 10);
  let isDeleting = false;

  const type = () => {
    // Current index of word
    const current = wordIndex % words.length;
    // Get full text of current word
    const fullTxt = words[current];

    // Check if deleting
    if (isDeleting) {
      // Remove char
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      // Add char
      txt = fullTxt.substring(0, txt.length + 1);
    }

    // Insert txt into element
    txtElement.setAttribute('data-placeholder', txt);

    // Initial Type Speed
    let typeSpeed = 40;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!isDeleting && txt === fullTxt) {
      // Make pause at end
      typeSpeed = wait;
      // Set delete to true
      isDeleting = true;
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      // Move to next word
      wordIndex++;
      // Pause before start typing
      typeSpeed = 30;
    }

    setTimeout(() => type(), typeSpeed);
  };

  type();
};

export default TypeWriter;
