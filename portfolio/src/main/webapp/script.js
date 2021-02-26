// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I moved 4 times before going to college', 'I love baking', 'I play on the club spikeball team here at Syraucse Univ.',
    'I have 20+ wins on Warzone','I like hiking and cliff jumping'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function addRandomfood(){
    //list of foods
    const foods = ['Korean Meatballs', ' Chicken & Rice', 'Eggs Benedict'
, 'Steak & Potatoes','Mac & Cheese','Beef & Chicken Enchiladas', 'Fried Rice',
'Chorizo & Eggs & Potatoes' ]

//Picking random food from foods list
const food = foods[Math.floor(Math.random() * foods.length)];

//adding to the html
const foodContainer = document.getElementById('food-container');
  foodContainer.innerText = food;
}
