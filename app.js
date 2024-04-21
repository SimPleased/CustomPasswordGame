document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>The Custom Password Game</title>
        <style>
            :root {
    position: relative;
    background-color: #fffae9;
}

.logo {
    position: absolute;
    font-family: cursive;
    font-size: 30px;
    left: 10px;
    top: 0;
    transition: all 0.2s ease-in-out;
}

.logo:hover {
    font-size: 32px;
    left: 9px;
    top: -1px;
}

.title {
    margin-top: 80px;
    margin-left: 50%;
    text-align: center;
    transform: translateX(-50%);
}

.password-wrapper {
    max-width: 485px;
    margin: 167px auto 60px;
}

.password-box {
    position: relative;
}

.password-label {
    font-size: 20px;
}

.password-area {
    width: 100%;
    padding: 15px;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    min-height: 64px;
    background-color: white;
    transition: border-color .15s ease-in-out, border-radius .1s ease-in-out;
}

.password-area:focus {
    border-color: black;
}

.password-length {
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translate(100%, -50%);
    font-size: 24px;
    transition: opacity .5s ease-in-out;
    margin-top: 20px;
}

.toolbar {
    width: 100%;
    background-color: white;
    padding: 5px 15px;
    border-radius: 0 0 10px 10px;
    border: 1px solid black;
    border-top: none;
    display: inline-flex !important;
    flex-wrap: wrap;

}

.toolbar * {
    color: black;
    background-color: white;
    border: 1px solid #b3b3b3;
    font-size: 20px;
    padding: 5px 11px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, .05);
    transition: background-color .15s linear;
    cursor: pointer;
    margin: 5px;
}

.toolbar .active {
    background-color: black;
    color: white;
}
        </style>
    </head>
    <body>
            <div id=\"logo\" class=\"logo\">
        NEAL.FUN
    </div>

    <h1 class=\"title\">
        * The Custom Password Game
    </h1>

    <div class=\"password-wrapper\">
        <div class=\"password-box\">
            <label class=\"password-label\">Please choose a password</label>
            <div id=\"password-area\" class=\"password-area\" contenteditable=\"true\" translate=\"no\" tabindex=\"0\" spellcheck=\"false\" style=\"font-family: monospace; font-size: 28px;color: black;background-color: white;\"></div>
            <label id=\"password-length\" class=\"password-length\" style=\"opacity: 0;\"></label>
        </div>
        <div id=\"toolbar\" class=\"toolbar\" style=\"display: none;\">
            <button id=\"bold\" style=\"display: none;\">Bold</button>
            <button id=\"italic\" style=\"display: none;\">Italic</button>
            <button id=\"underline\" style=\"display: none;\">Underline</button>
            <button id=\"strike-through\" style=\"display: none;\">Strike Through</button>
            <button id=\"overline\" style=\"display: none;\">Overline</button>
            <select id=\"font-size\" style=\"display: none;\">
                <option value=\"0px\">0px</option>
                <option value=\"1px\">1px</option>
                <option value=\"4px\">4px</option>
                <option value=\"9px\">9px</option>
                <option value=\"12px\">12px</option>
                <option value=\"16px\">16px</option>
                <option value=\"25px\">25px</option>
                <option value=\"28px\">28px</option>
                <option value=\"32px\">32px</option>
                <option value=\"36px\">36px</option>
                <option value=\"49px\">49px</option>
                <option value=\"64px\">64px</option>
                <option value=\"81px\">81px</option>
            </select>
            <select id=\"font-family\" style=\"display: none;\">
                <option value=\"Monospace\">Monospace</option>
                <option value=\"Arial\">Arial</option>
                <option value=\"Times New Roman\">Times New Roman</option>
                <option value=\"Verdana\">Verdana</option>
                <option value=\"Courier New\">Courier New</option>
            </select>
            <select id=\"text-color\" style=\"display: none;\">
                <option value=\"#ffffff\">White</option>
                <option value=\"#000000\">Black</option>
                <option value=\"#a52a2a\">Brown</option>
                <option value=\"#d2691e\">Chocolate</option>
                <option value=\"#8b0000\">Dark Red</option>
                <option value=\"#ff0000\">Red</option>
                <option value=\"#dc143c\">Crimson</option>
                <option value=\"#ffa500\">Orange</option>
                <option value=\"#ffd700\">Gold</option>
                <option value=\"#ffff00\">Yellow</option>
                <option value=\"#00ff00ff\">Lime</option>
                <option value=\"#7cfc00ff\">Lawn Green</option>
                <option value=\"#008000ff\">Green</option>
                <option value=\"#00ffffff\">Aqua</option>
                <option value=\"#40e0d0ff\">Turquoise</option>
                <option value=\"#87ceebff\">Sky Blue</option>
                <option value=\"#0000ffff\">Blue</option>
                <option value=\"#ee82eeff\">Violet</option>
                <option value=\"#ffc0cbff\">Pink</option>
                <option value=\"#ff69b4ff\">Hot Pink</option>
                <option value=\"#ff00ffff\">Magenta</option>
                <option value=\"#dda0ddff\">Plum</option>
                <option value=\"#800080ff\">Purple</option>
                <option value=\"#00000000\">Transpaerent</option>
            </select>
            <select id=\"background-color\" style=\"display: none;\">
                <option value=\"#00000000\">Transpaerent</option>
                <option value=\"#ffffffff\">White</option>
                <option value=\"#000000ff\">Black</option>
                <option value=\"#a52a2aff\">Brown</option>
                <option value=\"#d2691eff\">Chocolate</option>
                <option value=\"#8b0000ff\">Dark Red</option>
                <option value=\"#ff0000ff\">Red</option>
                <option value=\"#dc143cff\">Crimson</option>
                <option value=\"#ffa500ff\">Orange</option>
                <option value=\"#ffd700ff\">Gold</option>
                <option value=\"#ffff00ff\">Yellow</option>
                <option value=\"#00ff00ff\">Lime</option>
                <option value=\"#7cfc00ff\">Lawn Green</option>
                <option value=\"#008000ff\">Green</option>
                <option value=\"#00ffffff\">Aqua</option>
                <option value=\"#40e0d0ff\">Turquoise</option>
                <option value=\"#87ceebff\">Sky Blue</option>
                <option value=\"#0000ffff\">Blue</option>
                <option value=\"#ee82eeff\">Violet</option>
                <option value=\"#ffc0cbff\">Pink</option>
                <option value=\"#ff69b4ff\">Hot Pink</option>
                <option value=\"#ff00ffff\">Magenta</option>
                <option value=\"#dda0ddff\">Plum</option>
                <option value=\"#800080ff\">Purple</option>
            </select>
          </div>
    </div>
    </body>
</html>
`;

const passwordArea = document.getElementById('password-area');
const passwordLength = document.getElementById('password-length');
const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const underlineBtn = document.getElementById('underline');
const strikeThroughBtn = document.getElementById('strike-through');
const overlineBtn = document.getElementById('overline');
const fontSizeSelect = document.getElementById('font-size');
const fontFamilySelect = document.getElementById('font-family');
const textColorSelect = document.getElementById('text-color');
const backgroundColorSelect = document.getElementById('background-color');

document.getElementById("logo").onclick = async () => {
    window.location.replace("https://neal.fun");
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        switch (event.key) {
            case 'b':
                wrapSelectionWithStyle('font-weight', 'bold');
                break;
            case 'i':
                wrapSelectionWithStyle('font-style', 'italic');
                break;
            case 'u':
                wrapSelectionWithStyle('text-decoration', 'underline');
                break;
            case 'o':
                wrapSelectionWithStyle('text-decoration', 'overline');
                break;
        }
    }
});

const getStyle = (style) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const node = selection.getRangeAt(0).startContainer;
        const parentNode = node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
        return window.getComputedStyle(parentNode)[style];
    }
}

const setSelectOptionIndex = (selectElement, value) => {
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            selectElement.selectedIndex = i;
        }
    }
}

const cullElements = (element) => {
    const children = [element.childNodes][0];
    let elementText = '';

    children.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            elementText += child.textContent;
        } else {
            cullElements(child)
        }
    });
    
    if (element !== passwordArea && elementText.length === 0) {
        if (element.children.length === 1) {
            mergeElement(element);
        } else if (children.length === 0) {
            element.remove()
        }
    }
}

const mergeElement = (element) => {
    const child = element.children[0];
    const childStyles = child.style;

    for (let i = 0; i < childStyles.length; i++) {
        const styleName = childStyles[i];
        const styleValue = childStyles.getPropertyValue(styleName);

        if (styleValue !== '') {
            if (styleName === 'text-decoration-line' && element.style.textDecorationLine) {
            const mergedStyleArr = new Set([
                ...element.style.textDecorationLine.split(' '),
                ...styleValue.split(' '),
            ]);
            element.style.textDecorationLine = Array.from(mergedStyleArr).join(' ');
            } else {
            element.style[styleName] = styleValue;
            }
        }
    }

    const selection = window.getSelection();

    element.innerHTML = child.innerHTML;

    const range = document.createRange();
    const startNode = element.firstChild;
    const endNode = element.lastChild;
    range.setStart(startNode, 0);
    range.setEnd(endNode, endNode.length);
    selection.removeAllRanges();
    selection.addRange(range);
};

const wrapSelectionWithStyle = (style, value) => {
    const span = document.createElement('span');
    span.style[style] = value;

    const selection = window.getSelection();
    
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const newNode = span.cloneNode(true);
      const fragment = range.extractContents();
      newNode.appendChild(fragment);
      range.insertNode(newNode);
      selection.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNodeContents(newNode);
      selection.addRange(newRange);
      cullElements(passwordArea);
    }
}

const updateFormattingInfo = () => {
    boldBtn.classList.toggle('active', getStyle('font-weight') === '700');
    italicBtn.classList.toggle('active', getStyle('font-style') === 'italic');
    underlineBtn.classList.toggle('active', getStyle('text-decoration').split(' ').includes('underline'));
    strikeThroughBtn.classList.toggle('active', getStyle('text-decoration').split(' ').includes('line-through'));
    overlineBtn.classList.toggle('active', getStyle('text-decoration').split(' ').includes('overline'));

    setSelectOptionIndex(fontSizeSelect, getStyle('font-size'));

    // Doesnt work currently maybe later.

    // setSelectOptionIndex(fontFamilySelect, getStyle('font-family'));
    // setSelectOptionIndex(textColorSelect, getStyle('color'));
    // setSelectOptionIndex(backgroundColorSelect, getStyle('background-color'))
}

passwordArea.addEventListener('keyup', updateFormattingInfo);
passwordArea.addEventListener('mouseup', updateFormattingInfo);

passwordArea.oninput = () => {
    passwordLength.style.opacity = passwordArea.textContent.trim().length !== 0 ? 1 : 0;
    passwordLength.textContent = passwordArea.textContent.trim().length;
};

// WARNING: The following code is WET AF

const showToolbar = () => {
    document.getElementById('toolbar').style.display = 'block';
    passwordArea.style.borderBottomLeftRadius = '0';
    passwordArea.style.borderBottomRightRadius = '0';
}

const addBoldInput = () => {
    boldBtn.style.display = 'block';
    showToolbar();

    boldBtn.onclick = () => wrapSelectionWithStyle('font-weight', 'bold');
}

const addItalicInput = () => {
    italicBtn.style.display = 'block';
    showToolbar();

    italicBtn.onclick = () => wrapSelectionWithStyle('font-style', 'italic');
}

const addUnderlineInput = () => {
    underlineBtn.style.display = 'block';
    showToolbar();

    underlineBtn.onclick = () => wrapSelectionWithStyle('text-decoration', 'underline');
}

const addStrikeThroughInput = () => {
    strikeThroughBtn.style.display = 'block';
    showToolbar();

    strikeThroughBtn.onclick = () => wrapSelectionWithStyle('text-decoration', 'line-through');
}

const addOverlineInput = () => {
    overlineBtn.style.display = 'block';
    showToolbar();

    overlineBtn.onclick = () => wrapSelectionWithStyle('text-decoration', 'overline');
}

const addFontSizeInput = () => {
    fontSizeSelect.style.display = 'block';
    showToolbar();

    fontSizeSelect.onchange = () => wrapSelectionWithStyle('fontSize', fontSizeSelect.value);
}

const addFontFamilyInput = () => {
    fontFamilySelect.style.display = 'block';
    showToolbar();

    fontFamilySelect.onchange = () => wrapSelectionWithStyle('font-family', fontFamilySelect.value);
}

const addTextColorInput = () => {
    textColorSelect.style.display = 'block';
    showToolbar();

    textColorSelect.onchange = () => wrapSelectionWithStyle('color', textColorSelect.value);
}

const addBackgroundColorInput = () => {
    backgroundColorSelect.style.display = 'block';
    showToolbar();

    backgroundColorSelect.onchange = () => wrapSelectionWithStyle('background-color', backgroundColorSelect.value);
}

addBoldInput();
addItalicInput();
addUnderlineInput();
addStrikeThroughInput();
addOverlineInput();
addFontSizeInput();
addFontFamilyInput();
addTextColorInput();
addBackgroundColorInput();