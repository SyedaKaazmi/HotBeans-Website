/* script.js */
const reveals = document.querySelectorAll(".reveal");

/* Scroll reveal functionality */
function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100){
      section.classList.add("active");
    }
  });
}

/* Card toggle functionality */
function toggleCard(card) {
  const container = document.querySelector('.cards');
  const allCards = document.querySelectorAll('.card');

  // remove active from others
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('active');
  });

  // toggle clicked one
  card.classList.toggle('active');

  // enable shrink mode
  if (card.classList.contains('active')) {
    container.classList.add('active-mode');
  } else {
    container.classList.remove('active-mode');
  }
}

// Toggle expanded card (Jobs or Courses)
function toggleCard(card) {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('active');
  });
  card.classList.toggle('active');
}


/* Job card toggle functionality */
function toggleJob(card) {
  const allJobs = document.querySelectorAll('.job-card');

  allJobs.forEach(job => {
    if (job !== card) {
      job.classList.remove('active');
    }
  });

  card.classList.toggle('active');
}



/* Attach click event to cards */
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
