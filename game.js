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

const getSelectionOrCaretPosition = () => {
    const selection = window.getSelection();
    let range;
  
    if (selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
    } else {
      range = document.createRange();
      range.setStart(passwordArea, 0);
      range.setEnd(passwordArea, 0);
    }
  
    return range;
}

const getStyle = (style) => {
    const range = getSelectionOrCaretPosition();
    const node = range.startContainer;
    const parentNode = node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
    return window.getComputedStyle(parentNode).getPropertyValue(style);
}

const setSelectOptionIndex = (selectElement, value) => {
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            selectElement.selectedIndex = i;
        }
    }
}

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
    }
}

const updateFormattingInfo = () => {
    boldBtn.classList.toggle('active', getStyle('font-weight') === '700');
    italicBtn.classList.toggle('active', getStyle('font-style') === 'italic');
    underlineBtn.classList.toggle('active', getStyle('text-decoration').split(' ').includes('underline'));
    strikeThroughBtn.classList.toggle('avtive', getStyle('text-decoration').split(' ').includes('line-through'));
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