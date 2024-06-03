// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoocha Han
// Created on: Apr 2024
// This file contains the JS functions for index.html

function CalculatePyramid() {
  //get elements by ID
  const length = parseFloat(document.getElementById("get_length").value)
  const width = parseFloat(document.getElementById("get_width").value)
  const height = parseFloat(document.getElementById("get_height").value)
  
  // caculate
  let ans = (length * width * height) / 3
  document.getElementById("Answer").innerHTML = "volume of pyramid is " + ans + "cm³."
}