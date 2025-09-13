document.querySelectorAll('.project-filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
            const category = project.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
document.querySelectorAll('.experience-filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.experience-card');
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.querySelectorAll('.skill-filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const skills = document.querySelectorAll('.skill-card');

        skills.forEach(skill => {
            const category = skill.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                skill.style.display = 'block';
            } else {
                skill.style.display = 'none';
            }
        });
    });
});
// Make entire button clickable
document.querySelectorAll('.project-links button').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        openModal(type);
    });
});


document.querySelectorAll('.project-links button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default <a> behavior if inside button

        const type = button.innerText.toLowerCase().includes('demo') ? 'demo' : 'code';
        const modal = document.getElementById("modal");
        const title = document.getElementById("modal-title");
        const message = document.getElementById("modal-message");
        const confirmBtn = document.getElementById("confirm-btn");
        const icon = document.getElementById("modal-icon");

        if (type === "demo") {
            title.textContent = "Visit Demo?";
            message.textContent = "You will be redirected to the demo page.";
            confirmBtn.href = "https://your-demo-link.com"; // Replace with actual link
            confirmBtn.textContent = "Yes, go to demo";
            icon.innerHTML = '<i class="fa-solid fa-rocket"></i>';
        } else {
            title.textContent = "View Code?";
            message.textContent = "You will be redirected to the code repository.";
            confirmBtn.href = "https://your-code-link.com"; // Replace with actual link
            confirmBtn.textContent = "Yes, view code";
            icon.innerHTML = '<i class="fa-solid fa-code"></i>';
        }

        modal.style.display = "flex";
    });
});
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
document.querySelectorAll('.experience-filters button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active from all
        document.querySelectorAll('.experience-filters button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.experience-card');
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.getElementById("contactMeBtn").addEventListener("click", () => {
    const panel = document.getElementById("contactPanel");
    panel.classList.add("show");
});

// Show testimonial modal
document.querySelector('.add-testimonial-btn').addEventListener('click', function() {
    document.getElementById('testimonialModal').style.display = 'flex';
});

// Close testimonial modal
function closeTestimonialModal() {
    document.getElementById('testimonialModal').style.display = 'none';
}

// Add testimonial on submit
document.getElementById('testimonialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('testimonialName').value.trim() || "Anonymous";
    const text = document.getElementById('testimonialText').value.trim();
    if (!text) return;

    // Create testimonial card
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
        <i class="fa-solid fa-quote-left"></i>
        <h3>${name}</h3>
        <p>"${text}"</p>
        <div class="stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            <i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
    `;
    document.querySelector('.testimonial-container').appendChild(card);

    // Reset form and close modal
    this.reset();
    closeTestimonialModal();
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('testimonialModal');
    if (event.target === modal) {
        closeTestimonialModal();
    }
});

function closeContactPanel() {
    document.getElementById("contactPanel").classList.remove("show");
}


document.getElementById("supportBtn").addEventListener("click", () => {
    document.getElementById("qrModal").style.display = "flex";
});

function closeQRModal() {
    document.getElementById("qrModal").style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
    const qrModal = document.getElementById("qrModal");
    if (event.target === qrModal) {
        qrModal.style.display = "none";
    }
}





