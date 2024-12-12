document.addEventListener("DOMContentLoaded", () => {
  // Get array of every .hidden element
  const elementsToAnimate = document.querySelectorAll(".hidden");

  // Create new observer for every class item
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.add("hidden");
        entry.target.classList.remove("visible");
      }
    });
  });

  // Launch the observer function for every element of the class hidden
  elementsToAnimate.forEach((element) => observer.observe(element));
});

// Button
document.getElementById("scrollButton").addEventListener("click", () => {
  document
    .getElementById("service-page")
    .scrollIntoView({ behavior: "smooth" });
});

// Typewriter effect
const type_writer_array = document.querySelectorAll(".type_write"); // Select all elements with the class .type_write

// Save the original text content for each typewriter element
type_writer_array.forEach((type_writer) => {
  type_writer.dataset.originalText = type_writer.innerHTML; // Store the original text
  type_writer.innerHTML = ""; // Clear the content before typing starts
});

let currentElementIndex = 0;

function typewriter(type_writer, callback) {
  const copy = type_writer.dataset.originalText;
  const size_word = copy.length;
  let i = 0; // Initialize the typing index

  function writeChar() {
    if (i < size_word) {
      type_writer.innerHTML += copy[i];
      i++;
      setTimeout(writeChar, 25); // Adjust typing speed as needed
    } else {
      callback(); // Proceed to the next typewriter element
    }
  }

  writeChar();
}

function processNextElement() {
  if (currentElementIndex < type_writer_array.length) {
    const currentElement = type_writer_array[currentElementIndex];
    typewriter(currentElement, () => {
      currentElementIndex++;
      processNextElement();
    });
  }
}

processNextElement(); // Start the typewriter effect
