var questions = [
	{
		question: 'Inside which HTML element do we put the JavaScript?',
		option1: 'script',
		option2: 'javascript',
		option3: 'js',
		correctOption: 'script',
	},
	{
		question: 'Where is the correct place to insert a JavaScript?',
		option1: 'The head section',
		option2: 'The body section',
		option3: 'Both the head and body section are correct',
		correctOption: 'Both the head and body section are correct',
	},
	{
		question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
		option1: 'script href=xxx.js',
		option2: 'script name=xxx.js',
		option3: 'script src=xxx.js',
		correctOption: 'script src=xxx.js',
	},
];

var index = 0;
var score = 0;

function renderQuestions() {
	if (index < questions.length) {
		var questionsBox = document.getElementById('questions');

		questionsBox.innerHTML = `
<div>
   <p>"${questions[index].question}"</p>
   <div class="form-check d-flex flex-column">
      <div>
         <input class="form-check-input" type="radio"  value="${questions[index].option1}" name="options" id="option1">
         <label class="form-check-label" for="option1">
         ${questions[index].option1}
         </label>
      </div>
      <div>
         <input class="form-check-input" type="radio" value="${questions[index].option2}"name="options" id="option2">
         <label class="form-check-label" for="option2">
         ${questions[index].option2}
         </label>
      </div>
      <div>
         <input class="form-check-input"  type="radio"  value="${questions[index].option3}" name="options" id="option3">
         <label class="form-check-label"  for="option3">
         ${questions[index].option3}
         </label> 
      </div>
      <div class="btn-div mt-3">
         <button id="next" disabled class="btn text-white">Next</button>
      </div>
   </div>
</div>
</div>
</div>

`;

		// Enabling next button on options clicking
		var options = document.getElementsByName('options');
		var nextBtn = document.getElementById('next');

		for (var i = 0; i < options.length; i++) {
			options[i].addEventListener('click', function () {
				nextBtn.disabled = false;
			});
		}

		// Next button incrementing index and rendering questions func invoked start
		nextBtn.addEventListener('click', function () {
			// Check the selected answer
			for (var i = 0; i < options.length; i++) {
				
				
				if (options[i].checked) {
					console.log(options[i].value.trim());
					console.log(questions[index].correctOption);
					if (options[i].value === questions[index].correctOption) {
						console.log("heki");
						
						score++;
					}
				}
			}

			// Move to the next question
			index++;
			renderQuestions();
		});

		// end
	} else {
		document.getElementById('questions').innerHTML = `<p>Quiz completed! Your score: ${score}</p>`;
	}
}

renderQuestions();
