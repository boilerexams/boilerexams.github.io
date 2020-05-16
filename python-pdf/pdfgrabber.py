# -*- coding: utf-8 -*-
"""
Created on Fri May 15 14:43:38 2020

@author: acrog
"""

import requests
import os
from pdf2image import convert_from_path


whichclass = 26600
whichexam = 'FE'
whichsemester = 'F'
whichyear = 2018
whichmath = 'MA266'
directory = whichmath+'pdfs'

url = f'https://www.math.purdue.edu/php-scripts/courses/oldexams/serve_file.php?file={whichclass}{whichexam}-{whichsemester}{whichyear}.pdf'
response = requests.get(url, verify = False)

if not os.path.exists(directory):
    os.makedirs(directory)

testtitle = f'{whichmath[-3:]}-{whichexam}-{whichsemester}-{whichyear}'
pdfname = f'{testtitle}.pdf'

if not os.path.exists(directory+'/'+testtitle):
    os.makedirs(directory+'/'+testtitle)

if not os.path.exists(directory+'/'+testtitle+'/pages'):
    os.makedirs(directory+'/'+testtitle+'/pages')

with open(directory+'/'+testtitle+'/'+pdfname, "wb") as file:
    file.write(response.content)

pdf = convert_from_path(pdfname, poppler_path=r'C:\Program Files\poppler-0.68.0_x86\poppler-0.68.0\bin')

imgnum = 1
for page in pdf:
    page.save(f'{directory}/{testtitle}/pages/{testtitle}-P{imgnum}.png', 'PNG')
    imgnum += 1