document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            name: "Jordi Pecellín",
            occupation: "Biologist and plant expert",
            photo: "./assets/photos/member1.jpg",
            socialMedia: {
                face: "www.facebook.com",
                x: "www.x.com",
                insta: "www.instagram.com",
                linked: "www.linkedin.com",
            },
        },
        {
            name: "Isabel González",
            occupation: "Design Assistant",
            photo: "./assets/photos/member2.jpg",
            socialMedia: {
                face: "www.facebook.com",
                x: "www.x.com",
                insta: "www.instagram.com",
                linked: "www.linkedin.com",
            },
        },
        {
            name: "Marcus Johnson",
            occupation: "Botanical Stylist",
            photo: "./assets/photos/member3.jpg",
            socialMedia: {
                face: "www.facebook.com",
                x: "www.x.com",
                insta: "www.instagram.com",
                linked: "www.linkedin.com",
            },
        },
        {
            name: "Aisha Nikosi",
            occupation: "Ecology Manager",
            photo: "./assets/photos/member4.jpg",
            socialMedia: {
                face: "www.facebook.com",
                x: "www.x.com",
                insta: "www.instagram.com",
                linked: "www.linkedin.com",
            },
        },
    ];

    const teamSlide = document.querySelector('.content-slider-team');
    const fadeableContent = teamSlide.querySelector('.fadeable-content');
    const dots = document.querySelectorAll('.dot-team');
    const nameElement = teamSlide.querySelector('.name-team');
    const occupationElement = teamSlide.querySelector('.occupation');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {

            fadeableContent.classList.remove('fade-in');
            fadeableContent.classList.add('fade-out');
    
            setTimeout(function() {
    
                dots.forEach(dot => dot.classList.remove('active-dot-team'));
    

                dot.classList.add('active-dot-team');
    

                const teamMember = teamMembers[index];
                nameElement.textContent = teamMember.name;
                occupationElement.textContent = teamMember.occupation;
                document.querySelector('.img-team-slider').style.backgroundImage = `url(${teamMember.photo})`;

                fadeableContent.classList.remove('fade-out');
                fadeableContent.classList.add('fade-in');
            }, 500); 
        });
    });

    const firstTeamMember = teamMembers[0];
    nameElement.textContent = firstTeamMember.name;
    occupationElement.textContent = firstTeamMember.occupation;
    document.querySelector('.img-team-slider').style.backgroundImage = `url(${firstTeamMember.photo})`;
    fadeableContent.classList.add('fade-in');
});


  