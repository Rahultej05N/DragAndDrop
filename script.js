document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".container");
    const resetButton = document.getElementById("resetButton");
    let draggedItem = null;
  
    // Add event listeners to draggable items
    const items = document.querySelectorAll(".item");
    items.forEach(function(item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  
    // Add event listeners to containers
    containers.forEach(function(container) {
      container.addEventListener("dragover", dragOver);
      container.addEventListener("dragenter", dragEnter);
      container.addEventListener("dragleave", dragLeave);
      container.addEventListener("drop", drop);
    });
  
     resetButton.addEventListener("click", resetContainers);
    
    function dragStart(e) {
      draggedItem = this;
      setTimeout(function() {
        draggedItem.style.opacity = "0.5"; // Change opacity of dragged item
      }, 0);
    }
  
    function dragEnd() {
      setTimeout(function() {
        draggedItem.style.opacity = "1"; // Reset opacity of dragged item
        draggedItem = null;
      }, 0);
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.style.backgroundColor = "lightblue";
    }
  
    function dragLeave() {
      this.style.backgroundColor = "white";
    }
  
    function drop() {
      this.style.backgroundColor = "white";
      this.appendChild(draggedItem);
  
      // Check if dropped in the second container
      if (this.classList.contains("container2")) {
        displaySuccessMessage(); // Call a function to display the success message or update the UI
      }
    }
  
    function displaySuccessMessage() {
      const message = document.createElement("p");
      message.textContent = "Item dropped successfully!";
      message.classList.add("success-message");
  
      document.body.appendChild(message);
  
      // Remove the success message after 3 seconds
      setTimeout(function() {
        message.remove();
      }, 3000);
    }
    
    
     
  });
  