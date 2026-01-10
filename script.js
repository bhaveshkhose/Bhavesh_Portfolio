// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('#theme-toggle');
  const htmlElement = document.documentElement;

  // Load saved theme from localStorage or use default
  const savedTheme = localStorage.getItem('theme') || htmlElement.getAttribute('data-theme') || 'dark';
  
  // Apply saved theme
  htmlElement.setAttribute('data-theme', savedTheme);
  
  // Set checkbox state based on theme
  themeToggle.checked = savedTheme === 'dark';

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    //    We use a ternary operator as a compact if/else statement.
    //    - The condition is 'themeToggle.checked'. Is the checkbox currently checked?
    //    - If it's true (checked), the value of newTheme will be 'dark'.
    //    - If it's false (unchecked), the value of newTheme will be 'light'.
    const newTheme = themeToggle.checked ? 'dark' : 'light';

    // 2. Apply the new theme.
    //    The setAttribute method changes the 'data-theme' attribute on the <html> element.
    //    This triggers the CSS rules you defined earlier for html[data-theme='dark'].
    htmlElement.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
  });

  
});