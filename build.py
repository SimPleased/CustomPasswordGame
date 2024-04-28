import os
import re
import html

def build_file(html_file, js_file=None, css_file=None, file_name='app', use_html=False):
    with open(html_file, 'r', encoding='utf-8') as file:
        html_content = file.read()

    head_match = re.search(r'<head>\n(.*?)\n</head>', html_content, re.DOTALL)
    body_match = re.search(r'<body>\n(.*?)\n</body>', html_content, re.DOTALL)

    head_content = head_match.group(1) if head_match else ''
    body_content = body_match.group(1) if body_match else ''

    css_content = ''
    if css_file:
        with open(css_file, 'r', encoding='utf-8') as file:
            css_content = file.read()

    js_content = ''
    if js_file:
        with open(js_file, 'r', encoding='utf-8') as file:
            js_content = file.read()

    if use_html:
        create_html(head_content, body_content, js_file, css_content, file_name)
    else:
        escaped_head = re.sub(r'\\', r'\\\\', head_content)
        escaped_head = re.sub(r'"', r'\\"', escaped_head)

        escaped_body = re.sub(r'\\', r'\\\\', body_content)
        escaped_body = re.sub(r'"', r'\\"', escaped_body)
        create_javascript(escaped_head, escaped_body, js_content, css_content, file_name)

    print(f'Converted files: {html_file}, {js_file}, {css_file}.\nTo {"HTML" if use_html else "JavaScript"} inside of {file_name}{".html" if use_html else ".js"}.')

def create_html(html_head, html_body, js_file, css, file_name):
    output_html = f'''<!DOCTYPE html>
<html lang="en">
    <head>
        {html_head}
        <style>
            {css}
        </style>
    </head>
    <body>
        {html_body}
        <script src="{js_file}"></script>
    </body>
</html>'''
    
    if output_html:
        with open(f'{file_name}.html', 'w', encoding='utf-8') as file:
            file.write(output_html)

def create_javascript(html_head, html_body, javascript, css, file_name):
    output_javascript = f'''document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
    <head>
        {html_head}
        <style>
            {css}
        </style>
    </head>
    <body>
        {html_body}
    </body>
</html>
`;

{javascript}'''
    
    if output_javascript:
        with open(f'{file_name}.js', 'w', encoding='utf-8') as file:
            file.write(output_javascript)

build_file('game.html', 'game.js', 'game.css')
build_file('game.html', 'game.js', 'game.css', "offline-version", True)