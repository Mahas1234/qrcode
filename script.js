
    const btn = document.querySelector('.btn');
    const code = document.querySelector('.code');
    const input = document.querySelector('.input');
    const toast = document.querySelector('#toast');

    btn.addEventListener('click', generate);
    input.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            generate();
        }
    });

    function generate() {
        const data = input.value;
        const URL = `https://api.qrserver.com/v1/create-qr-code/?size=2000x2000&data=${data}`;
        code.src = URL;

        toastDiv();
    }

    function toastDiv() {
        toast.classList.add("show");
        setTimeout(function() {
            toast.classList.remove("show");
        }, 2000);
    }

