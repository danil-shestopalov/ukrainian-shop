function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращение отправки формы по умолчанию
  
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
  
    // Отправка данных формы на сервер или обработка их с помощью JavaScript
    // ...
  
    closeModal();
  });