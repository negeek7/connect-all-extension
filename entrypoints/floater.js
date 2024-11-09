import {defineUnlistedScript} from "wxt/sandbox";

export default defineUnlistedScript(() => {
const floater = document.createElement('div');

floater.id = "testFloater";

floater.style.position = 'fixed';
floater.style.bottom = '20px';
floater.style.right = '20px';
floater.style.width = '150px';
floater.style.height = '50px';
floater.style.backgroundColor = '#0D92F4';
floater.style.color = '#ffffff';
floater.style.display = 'flex';
floater.style.alignItems = 'center';
floater.style.justifyContent = 'center';
floater.style.borderRadius = '10px';
floater.style.cursor = 'pointer';
floater.style.zIndex = '1000';

floater.textContent = 'Connect to all';

floater.addEventListener('click', () => {

    const connectButtons = Array.from(document.querySelectorAll('button'))
        .filter(button => button.innerText.trim() === "Follow" && button.offsetParent !== null);

    console.log(connectButtons, "connectButtons");
    connectButtons[1].click();
    alert("connect button clicked");
});


document.body.appendChild(floater);
})




