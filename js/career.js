function selectJob(num){
    const buttons = document.querySelectorAll(".btn");
    
    // select each button
    buttons.forEach(btn => btn.classList.remove('active'));           
    buttons[num - 1].classList.add('active');

    // change page with num
    window.location.href = `page/career_description.html?id=${num}`;
}