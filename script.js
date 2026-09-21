// Typing animation

const text =
    "Thank you for being my greatest inspiration ❤️";

let index = 0;

function typeText() {

    if (index < text.length) {

        document.getElementById("typing").textContent +=
            text.charAt(index);

        index++;

        setTimeout(typeText, 70);
    }
}

typeText();


// Music

const music =
    document.getElementById("birthdayMusic");

function toggleMusic() {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }
}


// Surprise button

function showSurprise() {

    document
        .getElementById("surprise")
        .scrollIntoView({
            behavior: "smooth"
        });

    createConfetti();
}


// Falling hearts/confetti

function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > 0.5 ? "❤️" : "✨";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-30px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration =
            Math.random() * 3000 + 3000;

        heart.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],

            {
                duration: duration,
                easing: "linear"
            }

        );

        setTimeout(() => {

            heart.remove();

        }, duration);

    }
}


// Automatically create some particles

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.opacity = "0.7";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    const animation =
        heart.animate(

            [
                {
                    transform: "translateY(0)",
                    opacity: 0
                },

                {
                    transform:
                        "translateY(-110vh)",
                    opacity: 0.8
                }
            ],

            {
                duration: 7000,
                easing: "linear"
            }

        );

    animation.onfinish = () => heart.remove();

}, 700);