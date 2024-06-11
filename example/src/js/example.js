import { CapacitorPhoneLocked } from 'capacitor-phone-locked';

window.testEcho = () => {
    CapacitorPhoneLocked.checkPhoneLocked().then((lockValue)=>
    {
        console.log("Lock device value: ", lockValue);
    }),
    err =>{
        console.log("Error getting device locxk status")
    };

}
