    // Register service worker to control making site work offline

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/pwa-example/a2hs/sw.js')
            .then(() => {
                console.log('Service Worker Registered');
            });
    }

    // Code to handle install prompt on desktop

    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';

    window.addEventListener('beforeinstallprompt', (e) => {
        // 显示安装提示
        deferredPrompt.prompt();
        // 等待用户反馈
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });