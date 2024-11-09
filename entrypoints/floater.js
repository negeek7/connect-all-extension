import {defineUnlistedScript} from "wxt/sandbox";

export default defineUnlistedScript(() => {
const floater = document.createElement('div');

floater.id = "testFloater";

floater.style.position = 'fixed';
floater.style.bottom = '20px';
floater.style.right = '20px';
floater.style.width = '150px';
floater.style.height = '50px';
floater.style.backgroundColor = 'black';
floater.style.color = '#ffffff';
floater.style.display = 'flex';
floater.style.alignItems = 'center';
floater.style.justifyContent = 'center';
floater.style.borderRadius = '8px';
floater.style.cursor = 'pointer';
floater.style.zIndex = '1000';

floater.textContent = 'Click me!';

floater.addEventListener('click', () => {
    console.log("FLOATER CLICKED!")
});


document.body.appendChild(floater);
})


