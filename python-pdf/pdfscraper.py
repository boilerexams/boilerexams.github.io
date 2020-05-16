# -*- coding: utf-8 -*-
"""
Created on Thu May 14 12:07:00 2020

@author: acrog
"""
'''
Notes: try joining box top and bottom edges together
       first box top edge should be at y =0
       last box bottom edge should be at y = height of image
       **determine the letter each box is closest to then use max height
       and min height of all boxes to solve it
'''


import cv2
import math
import requests
import os
from pdf2image import convert_from_path
import numpy as np

def dist(p1,p2):
    return math.sqrt((p2[0]-p1[0])**2+(p2[1]-p1[1])**2)

def vconcat_resize_min(im_list, interpolation=cv2.INTER_CUBIC):
    w_min = min(im.shape[1] for im in im_list)
    im_list_resize = [cv2.resize(im, (w_min, int(im.shape[0] * w_min / im.shape[1])), interpolation=interpolation)
                      for im in im_list]
    return cv2.vconcat(im_list_resize)
'''

FIND PDF

'''
whichclass = 26600
whichexam = 'FE'
whichsemester = 'F'
whichyear = 2018
whichmath = 'MA266'
directory = whichmath+'pdfs'

offset = 40
offsetBetween = 65

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

pdf = convert_from_path(directory+'/'+testtitle+'/'+pdfname, poppler_path=r'C:\Program Files\poppler-0.68.0_x86\poppler-0.68.0\bin')

numPages = 1
for page in pdf:
    page.save(f'{directory}/{testtitle}/pages/{testtitle}-P{numPages}.png', 'PNG')
    img = cv2.imread(f'{directory}/{testtitle}/pages/{testtitle}-P{numPages}.png')
    #img[0:190, 0:img.shape[1]] = np.full((190, img.shape[1], 3),255)
    #image = img[170:img.shape[0], 0:img.shape[1]]
    cv2.imwrite(f'{directory}/{testtitle}/pages/{testtitle}-P{numPages}.png',img)
    numPages += 1



'''

scrape pdf

'''
page1 = cv2.imread(f'{whichmath}pdfs/{testtitle}/pages/{testtitle}-P1.png')
page2 = cv2.imread(f'{whichmath}pdfs/{testtitle}/pages/{testtitle}-P2.png')
pg1 = page1#[170:page1.shape[0], 0:page1.shape[1]]
pg2 = page2#[170:page2.shape[0], 0:page2.shape[1]]

cv2.namedWindow('stack',cv2.WINDOW_NORMAL)
cv2.resizeWindow('stack', 1000, 1000)
vertical = np.hstack((pg1,pg2))

cv2.imshow('stack',vertical)
cv2.waitKey(0)
cv2.destroyAllWindows()

inputValue = int(input("Title page number: "))
questionNumber = 1
# Load image, grayscale, Gaussian blur, Otsu's threshold
for imgNum in range(inputValue,numPages):
    imgStr = f'{whichmath}pdfs/{testtitle}/pages/{testtitle}-P'+str(imgNum+1)+'.png'
    #imgStr = 'Outlier images/Q'+str(imgNum+1)+'.png'
    #imgStr = 'FA2019MA266/FA2019MA266-'+str(imgNum+1).rjust(2,'0')+'.png'
    #imgStr = f'{whichmath}pdfs/{testtitle}/pages/{testtitle}-P6.png'
    image = cv2.imread(imgStr)
    #image[0:180, 0:image.shape[1]] = np.full((180, image.shape[1], 3),255)
    
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (7,7), 0)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]
    
    # Create rectangular structuring element and dilate
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))
    
    dialateValue = 3
    
    dilate = cv2.dilate(thresh, kernel, iterations=dialateValue)
    # Find contours and draw rectangle
    cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    
    coordinates = []
    allBoxes = []
    yMax = 0
    for c in cnts:
        x,y,w,h = cv2.boundingRect(c)
        #cv2.rectangle(image, (x, y), (x+w, y+h),(255,255,12), 2)
        allBoxes.append([x,y,w,h])
        if y+h > yMax:
            yMax = y+h
        if w < 65 and h < 65:
            coordinates.append([x,y,w,h])
    
    coordinates = sorted(coordinates, key=lambda x: x[0], reverse=True)
    print(coordinates)
    
    allBoxes = sorted(allBoxes, key=lambda x: x[1], reverse=True)
    
    #cv2.rectangle(image, (coordinates[len(coordinates)-1][0], coordinates[len(coordinates)-1][1]), (coordinates[len(coordinates)-1][0]+coordinates[len(coordinates)-1][2], coordinates[len(coordinates)-1][1]+coordinates[len(coordinates)-1][3]),(255,255,12), 2)        
    questionYCoord = [coordinates[len(coordinates)-1][1]]
    
    for i in range(len(coordinates)-2,0,-1):
        if abs(coordinates[i][0] - coordinates[len(coordinates)-1][0]) <= 20:
            #cv2.rectangle(image, (coordinates[i][0], coordinates[i][1]), (coordinates[i][0]+coordinates[i][2], coordinates[i][1]+coordinates[i][3]),(255,255,12), 2)
            questionYCoord.append(coordinates[i][1])
        else: 
            break
    questionYCoord.sort()
    newImage = image.copy()
    questions = []
    for i in range(len(questionYCoord)):
        if i != len(questionYCoord)-1:
            questions.append(newImage[(questionYCoord[i]-offsetBetween):(questionYCoord[i+1]-offsetBetween), 0:(newImage.shape[1])])
        else:
            # page numbers or not
            questions.append(newImage[(questionYCoord[i]-offsetBetween):(allBoxes[0][1]-offsetBetween), 0:(newImage.shape[1])])
            #questions.append(newImage[(questionYCoord[i]-offsetBetween):(newImage.shape[0]), 0:(newImage.shape[1])])
    
    ''' i in range(len(questions)):
            cv2.namedWindow('question '+ str(i+1),cv2.WINDOW_NORMAL)
            cv2.resizeWindow('question '+ str(i+1), 1000, 1000)
            cv2.imshow("question " + str(i+1), questions[i])
    cv2.waitKey(0)
    cv2.destroyAllWindows()'''
    
    '''
    
    FInd indivual questions and answers
    
    '''
    
    
    for numQuestions in range(len(questions)):
        
        if not os.path.exists(directory+'/'+testtitle+'/questions'):
            os.makedirs(directory+'/'+testtitle+'/questions')
        
        if not os.path.exists(directory+'/'+testtitle+'/answers'):
            os.makedirs(directory+'/'+testtitle+'/answers')
        
        
        image = questions[numQuestions]
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(gray, (7,7), 0)
        thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]
        
        # Create rectangular structuring element and dilate
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))
        
        dialateValue = 2
        
        dilate = cv2.dilate(thresh, kernel, iterations=dialateValue)
        # Find contours and draw rectangle
        cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        cnts = cnts[0] if len(cnts) == 2 else cnts[1]
        
        coordinates = []
        allBoxes = []
        yMax = 0
        for c in cnts:
            x,y,w,h = cv2.boundingRect(c)
            #cv2.rectangle(image, (x, y), (x+w, y+h),(255,255,12), 2)
            allBoxes.append([x,y,w,h])
            if y+h > yMax:
                yMax = y+h
            if w < 65 and h < 65:
                coordinates.append([x,y,w,h])
        
        
    
        closeValues = []
        closePoints = []
        for i in range(len(coordinates)):
            numValues = 0
            for j in range(len(coordinates)):
                if abs(coordinates[i][0]-coordinates[j][0]) <= 15: 
                    numValues += 1
                
            if numValues >= 4:
                closeValues.append(coordinates[i][0])
                closePoints.append(coordinates[i][0:2])
        
        xValue = min(closeValues)
        
        numPrint = 0
        letterLocations = []
        letterCenters = []
        yValues = []
        for i in range(len(coordinates)):
            
            if abs(coordinates[i][0]-xValue) <= 20 and numPrint < 5:
                numPrint += 1
                letterLocations.append(coordinates[i])
                letterCenters.append([coordinates[i][0]+coordinates[i][2]/2, coordinates[i][1]+coordinates[i][3]/2])
                yValues.append(coordinates[i][1])
                #cv2.rectangle(image, (coordinates[i][0], coordinates[i][1]), (coordinates[i][0] + coordinates[i][2], coordinates[i][1] + coordinates[i][3]), (36,255,12), 2)
        
        dialateValue = 6
        
        dilate = cv2.dilate(thresh, kernel, iterations=dialateValue)
        # Find contours and draw rectangle
        cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        cnts = cnts[0] if len(cnts) == 2 else cnts[1]
        
        coordinates = []
        allBoxes = []
        yMax = 0
        for c in cnts:
            x,y,w,h = cv2.boundingRect(c)
            #cv2.rectangle(image, (x, y), (x+w, y+h),(255,255,12), 2)
            allBoxes.append([x,y,w,h])
            if y+h > yMax:
                yMax = y+h
            if w < 65 and h < 65:
                coordinates.append([x,y,w,h])
        
        
        yValue = min(yValues)
        closestDist = 1000
        closestYValue = yValue
        for i in range(len(allBoxes)):
            if allBoxes[i][1] + allBoxes[i][3] - yValue < 0 and abs(allBoxes[i][1] + allBoxes[i][3] - yValue) < closestDist:
                closestDist = abs(allBoxes[i][1] + allBoxes[i][3] - yValue)
                closestYValue = allBoxes[i][1] + allBoxes[i][3]
                
        offset = yValue-closestYValue
        question = image[0:(yValue-offset), 0:(image.shape[1])]
        cv2.imwrite(directory+'/'+testtitle+'/questions/Q'+str(questionNumber)+'.png',question)
        
        question = image[0:(yValue-offset), 0:(image.shape[1])]
        answers = image[(yValue-offset):(yMax), 0:(image.shape[1])]
        
        '''
        
        ALTERING ANSWER IMAGE
        
        '''
        
        gray = cv2.cvtColor(answers, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(gray, (7,7), 0)
        thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]
        dialateValue = 2
        count = 0
        while True:
            dilate = cv2.dilate(thresh, kernel, iterations=dialateValue)
            # Find contours and draw rectangle
            cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            cnts = cnts[0] if len(cnts) == 2 else cnts[1]
            
            count = 0
            for c in cnts:
                count += 1
            break
            if count < 8 or count > 12:
                dialateValue += 1
                if dialateValue >= 250:
                    print("ERROR")
                    break
            else:    
                break
        coordAns = []
        centers = []
        xMax = 0
        for c in cnts:
            x,y,w,h = cv2.boundingRect(c)
            if x+w > xMax:
                xMax = x+w
            coordAns.append([x,y,w,h])
            centers.append([((x+w)+x)/2,((y+h)+y)/2, x, y, w, h])
            #cv2.rectangle(answers, (x, y), (x+w, y+h),(255,255,12), 2)
        
        for i in range(len(letterCenters)):
            letterCenters[i][1] -= yValue-offset
            letterLocations[i][1] -= yValue-offset
        print(centers)
        
        pointsCloseToLetters = [[],[],[],[],[]]
        for i in range(len(centers)):
            minDist = 100000
            boxValue = 0
            for j in range(len(letterCenters)):
                if dist(centers[i][0:2],letterCenters[j]) < minDist:
                    boxValue = j
                    minDist = dist(centers[i][0:2],letterCenters[j])
                    
            pointsCloseToLetters[boxValue].append(centers[i])
        
        options = ['E','D','C','B','A']
        for i in range(len(pointsCloseToLetters)):
            maxHeight = 0
            minHeight = 10000
            maxWidth = 0
            minWidth = 10000
            for j in range(len(pointsCloseToLetters[i])):
                #max height
                if pointsCloseToLetters[i][j][3] + pointsCloseToLetters[i][j][5] > maxHeight:
                    maxHeight = pointsCloseToLetters[i][j][3] + pointsCloseToLetters[i][j][5]
                if pointsCloseToLetters[i][j][3] < minHeight:
                    minHeight = pointsCloseToLetters[i][j][3]
                if pointsCloseToLetters[i][j][2] + pointsCloseToLetters[i][j][4] > maxWidth:
                    maxWidth = pointsCloseToLetters[i][j][2] + pointsCloseToLetters[i][j][4]
                if pointsCloseToLetters[i][j][2] < minWidth:
                    minWidth = pointsCloseToLetters[i][j][2]
            print(f'({minWidth, minHeight}) ({maxWidth, maxHeight})')
            minWidth = letterLocations[i][0] + letterLocations[i][2]
            specificAnswer = answers[minHeight:maxHeight, minWidth:maxWidth]
            cv2.imwrite(directory+'/'+testtitle+'/answers/Q'+str(questionNumber)+options[i]+'.png',specificAnswer)
            cv2.rectangle(answers, (minWidth, minHeight), (maxWidth, maxHeight),(0,255,0), 2)
        
        cv2.rectangle(image, (0, 0), (image.shape[1], yValue-offset),(36,255,12), 2)
        
        #cv2.namedWindow('img',cv2.WINDOW_NORMAL)
        #cv2.resizeWindow('img', 1000, 1000)
        
        #cv2.imshow('img', image)
        
        #cv2.namedWindow('dilate',cv2.WINDOW_NORMAL)
        #cv2.resizeWindow('dilate', 1000, 1000)
        
        
        #cv2.namedWindow('thresh',cv2.WINDOW_NORMAL)
        #cv2.resizeWindow('thresh', 1000, 1000)
        
        #cv2.imshow('thresh', thresh)
        #cv2.imshow('dilate', dilate)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
        
        #cv2.namedWindow('image',cv2.WINDOW_NORMAL)
        #cv2.resizeWindow('image', 1000, 1000)
        im_v_resize = vconcat_resize_min([question, answers])
        cv2.imshow("question "+str(questionNumber), im_v_resize)
        #cv2.imshow("answers "+str(questionNumber), answers)
        #cv2.imshow('image', image)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
        questionNumber += 1
    
    
    
    
    