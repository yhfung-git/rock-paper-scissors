// Footer Copyright Date
function copyrightYear() {
  date = new Date();
  year = date.getFullYear();
  document.getElementById("current-year").innerHTML = year;
};

copyrightYear();
