document.getElementById("Checkout").addEventListener("click", function (e) {
    e.preventDefault();

    const billingForm = document.getElementById("billingForm");
    const paymentForm = document.getElementById("paymentForm");

    const billingFields = billingForm.querySelectorAll("input, select");
    for (const field of billingFields) {
        if (!field.checkValidity()) {
            Swal.fire({
                title: "Incomplete Billing Information",
                text: `Invalid input in field: ${field.placeholder || field.name}. ${field.validationMessage}`,
                icon: "error",
                confirmButtonText: "Try Again",
            });
            field.focus();
            return;
        }
    }

    const paymentFields = paymentForm.querySelectorAll("input, select");
    for (const field of paymentFields) {
        if (!field.checkValidity()) {
            Swal.fire({
                title: "Incomplete Payment Information",
                text: `Invalid input in field: ${field.placeholder || field.name}. ${field.validationMessage}`,
                icon: "error",
                confirmButtonText: "Try Again",
            });
            field.focus();
            return;
        }
    }

    const cardNumber = document.getElementById("cardNumber").value.replace(/-/g, "");
    const expMonth = document.getElementById("expMonth").value;
    const cvv = document.getElementById("cvv").value;

    if (!/^\d{16}$/.test(cardNumber)) {
        Swal.fire({
            title: "Invalid Card Number",
            text: "Please enter a valid 16-digit credit card number.",
            icon: "error",
            confirmButtonText: "Try Again",
        });
        return;
    }

    if (!/^(0[1-9]|1[0-2])$/.test(expMonth)) {
        Swal.fire({
            title: "Invalid Expiry Month",
            text: "Please enter a valid expiry month (01-12).",
            icon: "error",
            confirmButtonText: "Try Again",
        });
        return;
    }

    if (!expYear) {
        Swal.fire({
            title: "Invalid Expiry Year",
            text: "Please select an expiry year.",
            icon: "error",
            confirmButtonText: "Try Again",
        });
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        Swal.fire({
            title: "Invalid CVV",
            text: "Please enter a valid 3-digit CVV.",
            icon: "error",
            confirmButtonText: "Try Again",
        });
        return;
        
    }

    Swal.fire({
        title: "Payment Successful!",
        text: "Your order has been processed successfully.",
        icon: "success",
        confirmButtonText: "Go to Home",
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "../homePage.html";
        }
    });
});