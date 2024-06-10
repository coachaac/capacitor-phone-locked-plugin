import { CapacitorPhoneLocked } from 'capacitor-phone-locked';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorPhoneLocked.echo({ value: inputValue })
}
