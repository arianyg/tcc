function check(){
	var r=0;
	var q1=document.quiz.pergunta1.value;
	var q2=document.quiz.pergunta2.value;
	var q3=document.quiz.pergunta3.value;
	var q4=document.quiz.pergunta4.value;
	var q5=document.quiz.pergunta5.value;
	var q6=document.quiz.pergunta6.value;
	var q7=document.quiz.pergunta7.value;
	var q8=document.quiz.pergunta8.value;
	var q9=document.quiz.pergunta9.value;
	var q10=document.quiz.pergunta10.value;
	var result=document.getElementById('result');
	if (q1=="Não") {r++}
	if (q2=="Não") {r++}
	if (q3=="Não") {r++}
	if (q4=="Não") {r++}
	if (q5=="Não") {r++}
	if (q6=="Não") {r++}
	if (q7=="Não") {r++}
	if (q8=="Não") {r++}
	if (q9=="Sim") {r++}
	if (q10=="Sim") {r++}
	
	
	
	result.textContent= `${r}`;
}