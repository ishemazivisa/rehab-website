document.querySelectorAll
('button').forEach(button =>
    {
        button.addEventListener('click',() => {
            console.log('Button Clicked!');
        });
    });

    document.querySelector('form')
    .addEventListener('submit',() =>
    {
        preventDefault()
        console.log('Form submitted!');
    });