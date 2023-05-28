document.addEventListener("DOMContentLoaded", function() {
  const itemsPerPage = 5; // Number of items to display per page
  let currentPage = 1; // Current page

  // Get the list of items
  const itemList = document.getElementById("item-list");
  const items = itemList.getElementsByClassName("item");

  // Function to display items for the current page
  function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Hide all items
    Array.from(items).forEach(function(item) {
      item.style.display = "none";
    });

    // Display items for the current page
    for (let i = startIndex; i < endIndex; i++) {
      if (items[i]) {
        items[i].style.display = "block";
      }
    }
  }

  // Function to update the pagination buttons
  function updatePagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pagination = document.getElementById("pagination");

    // Clear existing buttons
    pagination.innerHTML = "";

    // Create a button for each page
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.innerText = i;

      // Highlight the current page button
      if (i === currentPage) {
        button.classList.add("active");
      }

      // Add event listener to switch page
      button.addEventListener("click", function() {
        currentPage = i;
        displayItems();
        updatePagination();
      });

      pagination.appendChild(button);
    }
  }

  // Initial setup
  displayItems();
  updatePagination();
});
