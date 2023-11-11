function AlertaEnviarMsg(e) {
    e.preventDefault();


    if (!validaForm()) {
        alert("Os campos precisam ser preenchidos.")
        return;
    };

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function validaForm() {
    const form = document.querySelectorAll('#my-form input');

    // ✅ Get all form elements
    //const formElements = Array.from(form.elements);
    let ret = false;
    form.forEach(element => {
        if (element.value === "") {
            ret = false;
            element.style.borderColor = "red"
            return;
        }
        element.style.borderColor = "green"
        ret = true;
    });
    return ret;

}