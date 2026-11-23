export function myAlert(message) {
            const overlay = document.createElement('div');
            overlay.classList.add('my-alert-overlay');

            const box = document.createElement('div');
            box.classList.add('my-alert-box');

            const text = document.createElement('p');
            text.classList.add('my-alert-message');
            text.textContent = message;

            const okButton = document.createElement('button');
            okButton.classList.add('my-alert-btn');
            okButton.textContent = 'OK';

            okButton.addEventListener('click', () => {
                overlay.remove();
            });

            box.appendChild(text);
            box.appendChild(okButton);
            overlay.appendChild(box);
            document.body.appendChild(overlay);

            okButton.focus();
        }