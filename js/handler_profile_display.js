const currentUrl = window.location.href;
const getLocation = currentUrl.split("#")[1];

const hideOtherIds = () => {
    document.getElementById("my-profile").classList.remove("show");
    document.getElementById("my-profile").classList.remove("active");
    document.getElementById("the_profile").classList.remove("active");
};

if (getLocation) {
    const getElement = document.getElementById(getLocation);

    // If profile
    if (getLocation == "the_profile") {
        document.getElementById("my-profile").classList.add("show");
        document.getElementById("my-profile").classList.add("active");
    }

    // If billing
    if (getLocation == "the_billing") {
        hideOtherIds();
        document.getElementById("billing-invoices").classList.add("show");
        document.getElementById("billing-invoices").classList.add("active");
    }

    // If Support
    if (getLocation == "the_support") {
        hideOtherIds();
        document.getElementById("support").classList.add("show");
        document.getElementById("support").classList.add("active");
    }
    getElement.classList.add("active");
}