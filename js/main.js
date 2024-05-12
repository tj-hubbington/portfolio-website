// Toggle hamburger menu open and closed
const menuController = document.getElementById('menu-trigger')
menuController.addEventListener('click', function(){
    console.log('open function was clicked');
    document.querySelector('.menu').classList.toggle('menu-open')
});

// Toggle project container size on homepage with condition to exclude the toggle when window is smaller than 768px
const projectClickBox1 = document.getElementById('project-1')
const projectClickBox2 = document.getElementById('project-2')
const projectClickBox3 = document.getElementById('project-3')

    if(window.innerWidth > 768){
        projectClickBox1.addEventListener('click', function(){
            document.querySelector('.project-container').classList.toggle('project-box-on-1')
            document.querySelector('.project-container').classList.remove('project-box-on-2')
            document.querySelector('.project-container').classList.remove('project-box-on-3');
    });

    projectClickBox2.addEventListener('click', function(){
        document.querySelector('.project-container').classList.remove('project-box-on-1')
        document.querySelector('.project-container').classList.remove('project-box-on-1')
        document.querySelector('.project-container').classList.toggle('project-box-on-2')
        document.querySelector('.project-container').classList.remove('project-box-on-3');
    });

    projectClickBox3.addEventListener('click', function(){
        document.querySelector('.project-container').classList.remove('project-box-on-1')
        document.querySelector('.project-container').classList.remove('project-box-on-2')
        document.querySelector('.project-container').classList.toggle('project-box-on-3');
    });
    };