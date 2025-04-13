const qrCodeImage = document.getElementById('qr-code');
const inputText = document.getElementById('input-text');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    const text = inputText.value;
    if (text) {
        // Use qrcode.js to generate the QR code image
        // Replace with your actual QR code generation code
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200`;
    }
});

function myfunction(){
    alert("Your QR-Generated");
    const popup = document.getElementById("popup");
      popup.style.display = "block";
}