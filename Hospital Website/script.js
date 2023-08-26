// Simulate visitor count increment
let visitorCount = 0;

function incrementVisitorCount() {
    visitorCount++;
    document.getElementById('visitorCount').textContent = visitorCount;
}

// Add event listener for page load
window.addEventListener('load', incrementVisitorCount);

document.getElementById('bookAppointment').addEventListener('click', () => {
    alert('Emergency appointment booked!');
});

