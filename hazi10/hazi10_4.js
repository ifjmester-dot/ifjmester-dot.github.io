const box = document.getElementById('box');
        
        // Kezdőpozíció és lépésköz (pixelben)
        let posX = 200;
        let posY = 200;
        const step = 20;

        document.addEventListener('keydown', (event) => {
            // Képernyő és a négyzet méreteinek lekérése (határok ellenőrzéséhez)
            const maxX = window.innerWidth - box.offsetWidth;
            const maxY = window.innerHeight - box.offsetHeight;

            switch (event.key.toLowerCase()) {
                case 'arrowup':
                case 'w':
                    posY = Math.max(0, posY - step);
                    break;
                case 'arrowdown':
                case 's':
                    posY = Math.min(maxY, posY + step);
                    break;
                case 'arrowleft':
                case 'a':
                    posX = Math.max(0, posX - step);
                    break;
                case 'arrowright':
                case 'd':
                    posX = Math.min(maxX, posX + step);
                    break;
            }

            // Új pozíció alkalmazása a DOM elemen
            box.style.left = `${posX}px`;
            box.style.top = `${posY}px`;
        });