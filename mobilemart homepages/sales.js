document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var customerDetails = {};
    formData.forEach(function(value, key){
        customerDetails[key] = value;
    });
    console.log(customerDetails); // You can send this data to a server or process it as needed
    // Here, you can add code to send the data to a server using AJAX or perform other actions.
    alert('Form submitted successfully!');
    this.reset(); // Reset the form after submission
});

// Calculate total amount when price or quantity changes
document.getElementById('price').addEventListener('input', calculateTotalAmount);
document.getElementById('quantity').addEventListener('input', calculateTotalAmount);

function calculateTotalAmount() {
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseFloat(document.getElementById('quantity').value);
    var totalAmount = isNaN(price) || isNaN(quantity) ? 0 : price * quantity;
    document.getElementById('totalAmount').value = totalAmount.toFixed(2);
}
