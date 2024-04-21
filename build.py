import os
import re
import html

def build_script(html_file, js_file=None, css_file=None, file_name='app'):
    with open(html_file, 'r', encoding='utf-8') as file:
        html_content = file.read()

    head_match = re.search(r'<head>\n(.*?)\n</head>', html_content, re.DOTALL)
    body_match = re.search(r'<body>\n(.*?)\n</body>', html_content, re.DOTALL)

    head_content = head_match.group(1) if head_match else ''
    body_content = body_match.group(1) if body_match else ''

    escaped_head = re.sub(r'\\', r'\\\\', head_content)
    escaped_head = re.sub(r'"', r'\\"', escaped_head)

    escaped_body = re.sub(r'\\', r'\\\\', body_content)
    escaped_body = re.sub(r'"', r'\\"', escaped_body)

    css_content = ''
    if css_file:
        with open(css_file, 'r', encoding='utf-8') as file:
            css_content = file.read()

    js_content = ''
    if js_file:
        with open(js_file, 'r', encoding='utf-8') as file:
            js_content = file.read()

    js_code = f'''document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
    <head>
        {escaped_head}
        <style>
            {css_content}
        </style>
    </head>
    <body>
        {escaped_body}
    </body>
</html>
`;

{js_content}'''
    with open(f'{file_name}.js', 'w', encoding='utf-8') as file:
        file.write(js_code)

    print(f'HTML file converted to JavaScript file "{file_name}.js"')

build_script('game.html', 'game.js', 'game.css')