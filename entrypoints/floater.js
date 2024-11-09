const floater = document.createElement('div');


floater.id = "testFloater";


floater.style.position = "fixed";
floater.style.bottom = '20px';
floater.style.right = '20px';
floater.style.width = '150px';
floater.style.height = '50px';
floater.style.backgroundColor = '#4CAF50';
floater.style.color = '#ffffff';
floater.style.display = 'flex';
floater.style.alignItems = 'center';
floater.style.justifyContent = 'center';
floater.style.borderRadius = '8px';
floater.style.cursor = 'pointer';
floater.style.zIndex = '1000';
floater.innerText = 'Click me!';


document.body.appendChild(floater);