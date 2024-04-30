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
                <option value=\"#000000ff\">Black</option>
                <option value=\"#ffffffff\">White</option>
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
                <option value=\"#00000000\">Transparent</option>
            </select>
            <select id=\"background-color\" style=\"display: none;\">
                <option value=\"#00000000\">Transparent</option>
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
                applyStyleToSelection('font-weight', 'bold');
                break;
            case 'i':
                applyStyleToSelection('font-style', 'italic');
                break;
            case 'u':
                applyStyleToSelection('text-decoration', 'underline');
                break;
            case 'o':
                applyStyleToSelection('text-decoration', 'overline');
                break;
        }
    }
});

const getComputedStyleRecursively = (element, style, value) => {
    if (element === passwordArea) return false;
    if (window.getComputedStyle(element)[style].split(' ').includes(value))
        return true;
    
    return element.parentElement && getComputedStyleRecursively(element.parentElement, style, value);
}

const getElementFromFragment = elementFragment => document.getElementById(elementFragment.getAttribute('id'));

const isSelectionStyle = (style, value) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedNodes = range.cloneContents().childNodes;
    const parentElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE ?
        range.commonAncestorContainer.parentElement
        : range.commonAncestorContainer;

    for (let node of selectedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (!window
                .getComputedStyle(
                    getElementFromFragment(node)
                )[style]
                .split(' ')
                .includes(value)) {
                return false
            }
        } else if (node.nodeType === Node.TEXT_NODE && node.nodeValue !== '') {
            if (!window
                .getComputedStyle(parentElement)[style]
                .split(' ')
                .includes(value)) {
                return false
            }
        }
    }

    return window
        .getComputedStyle(
            range.startContainer.nodeType === Node.TEXT_NODE
            ? range.startContainer.parentElement
            : range.startContainer
        )[style]
        .split(' ')
        .includes(value);
}

const getStyle = (style) => {
    const selection = window.getSelection();
    const node = selection.getRangeAt(0).startContainer;
    return window.getComputedStyle(
        node.nodeType === Node.TEXT_NODE
        ? node.parentNode
        : node
    )[style];
}

const setSelectOptionIndex = (selectElement, value) => {
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            selectElement.selectedIndex = i;
        }
    }
}

const cullElements = (element) => {
    let lastChild = element.childNodes[0];
    let lastChildsStyleText = '';
    let elementText = '';

    [...element.childNodes].forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent !== '') {
                elementText += node.textContent;
                lastChildsStyleText = '';
            }
        } else if (lastChildsStyleText === node.style.cssText && lastChildsStyleText !== '') {
            mergeSameStyleElements(lastChild, node)
        } else if (node.nodeType === Node.ELEMENT_NODE && node.innerHTML === '') {
            node.remove();
        }
        else {
            lastChildsStyleText = node.style.cssText;
            lastChild = node;
            cullElements(node)
        }
    });
    
    if (element !== passwordArea && elementText.length === 0) {
        if (element.children.length === 1) {
            mergeChildElement(element);
        } else if (element.childNodes.length === 0) {
            element.remove()
        }
    }
}

const mergeSameStyleElements = (element1, element2) => {
    element1.innerHTML += element2.innerHTML;

    const selection = window.getSelection();
    let range = document.createRange();
    element2.remove();
    range.selectNodeContents(element1);
    selection.removeAllRanges();
    selection.addRange(range);
}

const mergeChildElement = (element) => {
    const child = element.children[0];

    [...child.style].forEach(styleName => {
        const styleValue = child.style.getPropertyValue(styleName);

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
    });

    const selection = window.getSelection();
    const range = document.createRange();
    element.innerHTML = child.innerHTML;
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
};

const applyStyleToSelection = (style, value) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const span = document.createElement('span');
    span.style[style] = value;

    const range = selection.getRangeAt(0);
    const styledNode = span.cloneNode(true);
    styledNode.appendChild(range.extractContents());
    styledNode.setAttribute(
        "id",
        window.crypto
            .randomUUID()
            .toString()
    );
    range.insertNode(styledNode);

    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(styledNode);
    selection.addRange(newRange);
    cullElements(passwordArea);
};

// WIP
// Currently broken in some cases

const splitElementHelper = (element, start, end) => {
    const split = document.createElement('span');
    split.style.cssText = element.style.cssText;
    split.setAttribute(
        "id",
        window.crypto
            .randomUUID()
            .toString()
    );

    let currentIndex = 0;
    [element.childNodes][0].forEach(node => {
        if (node.textContent.length + currentIndex >= end) {
            if (node.nodeType === Node.TEXT_NODE) {
                split.innerHTML += node.textContent.slice(
                    Math.max(start - currentIndex, 0),
                    Math.min(end - currentIndex, node.textContent.length)
                );
            } else {
                split.innerHTML += splitElement(node, currentIndex, start)[0].innerHTML;
            }
            return;
        }

        if (currentIndex <= start) {
            currentIndex += node.textContent.length;
        } else {
            split.innerHTML += node.innerHTML;
            currentIndex = start + split.textContent.length;
        }

        if (currentIndex === end) return;
    });

    return split;
}

const splitElement = (element, start, end) => {
    const splitElement = [];
    
    if (end > element.textContent.length) throw `The end was greater than the length of the given element.
    End: ${end}
    Element length: ${element.textContent.length}`;
    if (start > end) throw `The end offset was less than the start offset.
    Start: ${start}
    End: ${end}`;
    if (!start && start !== 0) throw `The start was not set properly: ${start}`;
    
    if (start !== 0) {
        splitElement.push(
            splitElementHelper(element, 0, start)
        );
    }

    if (start !== end) {
        splitElement.push(
            splitElementHelper(element, start, end)
        );
    }
    
    if (end !== element.textContent.length) {
        splitElement.push(
            splitElementHelper(element, end, element.textContent.length)
        );
    }

    element.replaceWith(...splitElement);
    return splitElement;
}

// This fn is currently WIP
//
// The only reason it might not work is because
// of the splitElement() fn.
//
// Although the fn seems to be wroking

const removeStyleFromSelection = (style, value) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedElements = range.cloneContents().childNodes;
    const commonAncestorElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
        ? range.commonAncestorContainer.parentElement
        : range.commonAncestorContainer;
    let currentElement;
    
    for (let i = 0; i < selectedElements.length; i++) {
        currentElement = selectedElements[i].nodeType === Node.TEXT_NODE 
            ? commonAncestorElement
            : getElementFromFragment(selectedElements[i]);

        if (i === 0) {
            currentElement = getElementFromFragment(
                splitElement(
                    currentElement,
                    range.startOffset,
                    Math.min(
                        range.endOffset,
                        currentElement.textContent.length
                    )
                )[1]
            );
        } else if (i === selectedElements.length - 1) {
            currentElement = getElementFromFragment(
                splitElement(
                    currentElement,
                    0,
                    Math.min(
                        range.endOffset,
                        currentElement.textContent.length
                    )
                )[0]
            );
        }

        currentElement.style[style] = currentElement.style[style].replace(value, '');
    }
}

const updateFormattingInfo = () => {
    boldBtn.classList.toggle('active', isSelectionStyle('font-weight', '700'));
    italicBtn.classList.toggle('active', isSelectionStyle('font-style', 'italic'));
    underlineBtn.classList.toggle('active', isSelectionStyle('text-decoration', 'underline'));
    strikeThroughBtn.classList.toggle('active', isSelectionStyle('text-decoration', 'line-through'));
    overlineBtn.classList.toggle('active', isSelectionStyle('text-decoration', 'overline'));
    
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

    boldBtn.onclick = () => {
        if ([...boldBtn.classList].includes('active'))
        {
            removeStyleFromSelection('font-weight', 'bold');
        } else {
            applyStyleToSelection('font-weight', 'bold');
        }
    }
}

const addItalicInput = () => {
    italicBtn.style.display = 'block';
    showToolbar();

    italicBtn.onclick = () => {
        if ([...italicBtn.classList].includes('active'))
        {
            removeStyleFromSelection('font-style', 'italic');
        } else {
            applyStyleToSelection('font-style', 'italic');
        }
    }
}

const addUnderlineInput = () => {
    underlineBtn.style.display = 'block';
    showToolbar();

    underlineBtn.onclick = () => {
        if ([...underlineBtn.classList].includes('active'))
        {
            removeStyleFromSelection('text-decoration', 'underline');
        } else {
            applyStyleToSelection('text-decoration', 'underline');
        }
    }
}

const addStrikeThroughInput = () => {
    strikeThroughBtn.style.display = 'block';
    showToolbar();

    strikeThroughBtn.onclick = () => {
        if ([...underlineBtn.classList].includes('active'))
        {
            removeStyleFromSelection('text-decoration', 'line-through');
        } else {
            applyStyleToSelection('text-decoration', 'line-through');
        }
    }
}

const addOverlineInput = () => {
    overlineBtn.style.display = 'block';
    showToolbar();

    overlineBtn.onclick = () => {
        if ([...underlineBtn.classList].includes('active'))
        {
            removeStyleFromSelection('text-decoration', 'overline');
        } else {
            applyStyleToSelection('text-decoration', 'overline');
        }
    }
}

const addFontSizeInput = () => {
    fontSizeSelect.style.display = 'block';
    showToolbar();

    fontSizeSelect.onchange = () => applyStyleToSelection('fontSize', fontSizeSelect.value);
}

const addFontFamilyInput = () => {
    fontFamilySelect.style.display = 'block';
    showToolbar();

    fontFamilySelect.onchange = () => applyStyleToSelection('font-family', fontFamilySelect.value);
}

const addTextColorInput = () => {
    textColorSelect.style.display = 'block';
    showToolbar();

    textColorSelect.onchange = () => applyStyleToSelection('color', textColorSelect.value);
}

const addBackgroundColorInput = () => {
    backgroundColorSelect.style.display = 'block';
    showToolbar();

    backgroundColorSelect.onchange = () => applyStyleToSelection('background-color', backgroundColorSelect.value);
}

// WIP
const getElementsOfStyle = (element) => {
    
}

// WIP
const findMatches = (strings) => {
    const text = passwordArea.textContent;
    const regex = new RegExp(strings.join("|"), "g");

    let matches = text.match(regex);
    return matches;
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

// Not implemented as of yet
const checkRules = (currentRule) => {
    const rules = [
        (input) => {

        }
    ]
}

