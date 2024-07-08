// Left Sidebar
document.getElementById('toggle-nav').addEventListener('click', function () {
    const navBar = document.getElementById('nav-bar');
    const navItems = document.querySelectorAll('.nav-item');
    const navListItems = document.querySelectorAll('#nav-bar ul li');

    if (navBar.classList.contains('w-[72px]')) {
        navBar.classList.remove('w-[72px]');
        navBar.classList.add('min-w-[246px]');
        navItems.forEach(item => {
            item.classList.remove('hidden');
            item.classList.add('flex');
        });
        navListItems.forEach(item => {
            item.classList.remove('ml-[20px]', 'rounded-full');
            item.classList.add('pl-[20px]', 'rounded-l-none', 'rounded-r-full');
        });
    } else {
        navBar.classList.remove('min-w-[246px]');
        navBar.classList.add('w-[72px]');
        navItems.forEach(item => {
            item.classList.remove('flex');
            item.classList.add('hidden');
        });
        navListItems.forEach(item => {
            item.classList.remove('pl-[20px]', 'rounded-l-none', 'rounded-r-full');
            item.classList.add('ml-[20px]', 'rounded-full');
        });
    }
});
// Right Sidebar
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');
const toggleIcon = document.getElementById('toggle-icon');

toggleSidebar.addEventListener('click', function() {
if (sidebar.classList.contains('w-[66px]' , 'min-w-[66px]')) {
sidebar.classList.remove('w-[66px]' , 'min-w-[66px]');
sidebar.classList.add('w-[20px]');
toggleSidebar.classList.remove('block');
toggleSidebar.classList.add('fixed', 'bottom-1', 'right-[-10px]' , 'py-[10px]' , 'pl-[5px]' , 'pr-[10px]' , 'bg-white' , 'rounded-l-full' , 'rounded-r-none' , 'shadow-lg' , 'hover:pr-[30px]' , 'hover:pl-[10px]');
toggleIcon.classList.add('rotate-180')
// Adjust padding of sub-children
const subChildren = document.querySelectorAll('#sidebar > .hide-right > div');
subChildren.forEach(child => {
    child.classList.remove('p-[10px]');
    child.classList.add('hidden');
});
} else {
sidebar.classList.remove('w-[20px]');
sidebar.classList.add('w-[66px]' , 'min-w-[66px]');
toggleSidebar.classList.remove('fixed', 'bottom-1', 'right-[-10px]' , 'py-[10px]' , 'pl-[5px]' , 'pr-[10px]' , 'bg-white' , 'rounded-l-full' , 'rounded-r-none' , 'shadow-lg' , 'hover:pr-[30px]' , 'hover:pl-[10px]');
toggleSidebar.classList.add('block');
toggleIcon.classList.remove('rotate-180')
// Restore padding of sub-children
const subChildren = document.querySelectorAll('#sidebar > .hide-right > div');
subChildren.forEach(child => {
    child.classList.remove('hidden');
    child.classList.add('p-[10px]');
});
}
});

// Mail hover 
document.querySelectorAll('li').forEach(li => {
li.addEventListener('mouseover', function() {
// Toggle opacity of dragger icon
li.querySelector('.dragger-icon').classList.remove('opacity-0');
li.querySelector('.dragger-icon').classList.add('opacity-50');

// Toggle opacity of other icons with opacity-30
li.querySelectorAll('img.opacity-30').forEach(img => {
    img.classList.remove('opacity-30');
    img.classList.add('opacity-100');
});

// Toggle min-width of tools container
const toolsContainer = li.querySelector('.tools-container');
toolsContainer.classList.remove('min-w-[72px]');
toolsContainer.classList.add('max-w-[300px]' , 'w-full' , 'ml-[-55px]' , 'mr-[-10px]');

// Toggle visibility of time span and tools icons
toolsContainer.querySelector('span').classList.add('hidden');
toolsContainer.querySelector('.tools-icons').classList.remove('hidden');
toolsContainer.querySelector('.tools-icons').classList.add('flex');
});

li.addEventListener('mouseout', function() {
// Toggle opacity of dragger icon
li.querySelector('.dragger-icon').classList.remove('opacity-50');
li.querySelector('.dragger-icon').classList.add('opacity-0');

// Toggle opacity of other icons with opacity-30
li.querySelectorAll('img.opacity-100').forEach(img => {
    img.classList.remove('opacity-100');
    img.classList.add('opacity-30');
});

// Toggle min-width of tools container
const toolsContainer = li.querySelector('.tools-container');
toolsContainer.classList.remove('max-w-[300px]' , 'w-full' , 'ml-[-55px]' , 'mr-[-10px]');
toolsContainer.classList.add('min-w-[72px]');

// Toggle visibility of time span and tools icons
toolsContainer.querySelector('span').classList.remove('hidden');
toolsContainer.querySelector('.tools-icons').classList.remove('flex');
toolsContainer.querySelector('.tools-icons').classList.add('hidden');
});
});
