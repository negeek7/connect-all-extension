import {defineUnlistedScript} from "wxt/sandbox";

export default defineUnlistedScript(() => {
const floater = document.createElement('div');
const MAX_CONNECT = 50;

floater.id = "testFloater";

floater.style.position = 'fixed';
floater.style.bottom = '20px';
floater.style.right = '20px';
floater.style.width = '150px';
floater.style.height = '50px';
floater.style.backgroundColor = '#0D92F4';
floater.style.color = '#ffffff';
floater.style.display = 'flex';
floater.style.fontSize = '14px';
floater.style.alignItems = 'center';
floater.style.justifyContent = 'center';
floater.style.borderRadius = '10px';
floater.style.cursor = 'pointer';
floater.style.zIndex = '1000';

floater.style.transition = 'background-color 0.3s ease';

floater.addEventListener('mouseenter', () => {
    floater.style.backgroundColor = '#0A75C2';
});

floater.addEventListener('mouseleave', () => {
    floater.style.backgroundColor = '#20577f';
});

floater.textContent = 'Connect With All';

floater.addEventListener('click', () => {

    const connectButtons = Array.from(document.querySelectorAll('button'))
        .filter(button => button.innerText.trim() === "Follow" && button.offsetParent !== null);

    if(!connectButtons.length) {
        alert("Sorry, no connect button found");
        return;
    }

    for(let i=0; i < Math.min(connectButtons.length, MAX_CONNECT); i++) {
        let connectButton = connectButtons[i];

        // connect click handler
        handleConnectClick(connectButton, i)
        floater.textContent = "Undo";
    }

    function handleConnectClick(button, i){
        setTimeout(() => {
            button.click();
            // delay of 2 seconds
        }, i * 2000)
    }
});


document.body.appendChild(floater);
})




