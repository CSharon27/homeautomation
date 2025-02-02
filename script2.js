document.getElementById("toggleLight").addEventListener("click", function() {
    let statusDiv = document.getElementById("status");
    if (statusDiv.innerText === "Light is OFF") {
        statusDiv.innerText = "Light is ON";
    } else {
        statusDiv.innerText = "Light is OFF";
    }
});