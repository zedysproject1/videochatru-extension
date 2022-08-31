const showSwalChangelog = async function (version) {
    console.dir(version)
    if (version === "") {
        version = chrome.runtime.getManifest().version
    }
    const steps = ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.7.1', '1.0', '1.1', '1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.2.0', '1.3.0', '1.3.1', '1.3.2', '1.3.3']
    const swalQueueStep = Swal.mixin({
        progressSteps: steps,
        heightAuto: false,
        confirmButtonText: chrome.i18n.getMessage('confirmButtonText'),
        cancelButtonText: chrome.i18n.getMessage('cancelButtonText'),
        showDenyButton: true,
        denyButtonText: chrome.i18n.getMessage('denyButtonText'),
        // allowOutsideClick: false,
        allowEnterKey: true,
        progressStepsDistance: "4%",
        reverseButtons: true,

        // TODO: FIX FLICKERING ON MODAL CHANGE
        showClass: {
            backdrop: 'swal2-noanimation', // disable backdrop animation
            popup: 'swal2-noanimation', // disable popup animation
        },
        hideClass: {
            backdrop: 'swal2-noanimation', // disable popup fade-out animation
            // popup: 'swal2-noanimation', // disable popup animation
        },
    })

    const titles = [
        'v0.1 (2021-09-27)',
        'v0.2 (2021-10-01)',
        'v0.3 (2021-10-13)',
        'v0.4 (2021-11-01)',
        'v0.5 (2021-12-27)',
        'v0.6 (2021-12-31)',
        'v0.7 (2022-01-03)',
        'v0.7.1 (2022-01-07)',
        'v1.0 (2022-05-24)',
        'v1.1 (2022-05-27)',
        'v1.1.1 (2022-08-04)',
        'v1.1.2 (2022-08-04)',
        'v1.1.3 (2022-08-04)',
        'v1.1.4 (2022-08-05)',
        'v1.2.0 (2022-08-05)',
        'v1.3.0 (2022-08-07)',
        'v1.3.1 (2022-08-07)',
        'v1.3.2 (2022-08-09)',
        'v1.3.3 (2022-08-12)'
    ]

    const values = {
        "en": [
            // v0.1 (2021-09-27)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/92cc2320b896b315cf5c6f9a4247d2bda826e582...027dea2001889f300ef5d3d5cc4cd3317ef6bfae" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.2 (2021-10-01)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/027dea2001889f300ef5d3d5cc4cd3317ef6bfae...23032cf9f5eac63cac82f79d018a185e828ac9b2" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.3 (2021-10-13)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/23032cf9f5eac63cac82f79d018a185e828ac9b2...b0604cbda3d3d8bd42597170d8e34a5b557780d5" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.4 (2021-11-01)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/b0604cbda3d3d8bd42597170d8e34a5b557780d5...4716e2f00dd519fbf30d5e4ee2c7d069b8af483a" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.5 (2021-12-27)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/4716e2f00dd519fbf30d5e4ee2c7d069b8af483a...a9a59c7142e6a4331bc96fe2262679ae323ce225" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.6 (2021-12-31)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/a9a59c7142e6a4331bc96fe2262679ae323ce225...66bd53e275adc37d283a17395f6e5a9bf35f8a67" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.7 (2022-01-03)
            '- Fixed report+left arrow hotkey.<br>' +
            '- Disabled nsfwjs unblur by default.<br>' +
            '- Fix typo: nsfjw -> faceapi in gender\'s tooltips.<br>' +
            '- Add dark mode.<br>',
            '- Switch from ko-fi to buymeacoffee.',

            // v0.7.1 (2022-01-07)
            '- Added a Google form asking the user why they removed the extension, the response is sent to the public channel in Discord.',

            // v1.0 (2022-05-24)
            '- Extension adapted to manifest v3.<br>' +
            '— Will work in Chrome in 2023+.<br>' +
            '- Added alternative IP geolocation API.<br>' +
            '— It works via https, but it is much inferior to its http counterpart (1k requests per day, cannot determine the mobile Internet).<br>' +
            '- A detailed instruction of how to activate the normal api has been added to the github wiki.<br>' +
            '— If the http api is not available, the link to the article will be in the IP tab.<br>' +
            '- A warning now appears on the login screen that Chatruletka and ome.tv are the same project.<br>' +
            '— Many people uninstalled the extension without understanding why they couldn\'t use it on their Chatruletka instance.<br>' +
            '- The donate button has been replaced by a button with a call to leave a review in the Chrome Web Store.<br>' +
            '- \'Settings\' tab now expands to half the screen, can be turned off.<br>' +
            '- If you change an important setting, the extension will remind you to refresh page only after pressing the \'Start\' button.<br>' +
            '- By default, the map displays Europe (in the English version).<br>' +
            '- Extension in English version is now called \'Chatruletka (ome.tv) extension\'.<br>' +
            '- Control panel header now contains version number.<br>' +
            '- Clicking the \'Stop\' button now resets the IP tab.<br>' +
            '- Fixed a decrease in the number of manual skips when auto skipping due to too long connection.<br>' +
            '- Removed extension groups/chats in Telegram.',

            // v1.1 (2022-05-27)
            '- Increased the width of the control menu.<br>' +
            '- Added option to hide the header (enabled by default).<br>' +
            '- Added scroller bar to the login window.<br>' +
            '- Fixed crash when trying to hide non-existent logo.<br>' +
            '- Added an exception monitoring system to report errors in parts of extension code.',

            // v1.1.1 (2022-08-04)
            '- Attempt to fix tab freezing with enabled ws hacks.<br>' +
            '- Limit version string in the control panel to 3 characters',

            // v1.1.2 (2022-08-04)
            '- Disabled sending "face data", which was potentially causing the tab to freeze when ws hacks was enabled.',

            // v1.1.3 (2022-08-04)
            '- Increased delay before resizing after window resize.',

            // v1.1.4 (2022-08-05)
            '- Attempt to fix https ip api provider.',

            // v1.2.0 (2022-08-05)
            '- IP geolocation should now work without the need to allow insecure content (but with a bit more delay).<br>' +
            '- The back-up geolocation service was cut because its limit applied to all users of the extension, not just you as I thought before<br>' +
            '- Option to show more information about IP (tor vpn mobile) is now enabled by default.',

            // v1.3.0 (2022-08-07)
            '- Add a modal queue that welcomes new users with bunch of useless information.<br>' +
            '- Add an iknowwhatyoudownload button to open a link with possible torrent downloads of the interlocutor.<br>' +
            '- Add an option to show ISP (disabled by default).<br>' +
            '- Add the ability to disable the collection of errors.<br>' +
            '- Show seconds >=0 in TM (IP tab).<br>' +
            '- Change a way how hiding interface parts work<br>' +
            '- Allow risky \'prikol\' thing only if extension is unpacked.<br>' +
            '- Add notion to use replace not delete in risky ws hacks.<br>' +
            '- Sanitization of innerHTML assignments.<br>' +
            '- Hid the instructions for bypassing the ban behind the paywall due to reaching 5000 users gap.',

            // v1.3.1 (2022-08-07)
            '- Fix: Adapt dark mode css for alerts.',

            // v1.3.2 (2022-08-09)
            '- Fix: \'Check Torrents\' button for non en/ru UI locales',

            // v1.3.3 (2022-08-12)
            '- The case when the interlocutor disclosed several IP addresses was taken into account: information on all of them will be displayed.'
        ],
        "ru": [
            // v0.1 (2021-09-27)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/92cc2320b896b315cf5c6f9a4247d2bda826e582...027dea2001889f300ef5d3d5cc4cd3317ef6bfae" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.2 (2021-10-01)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/027dea2001889f300ef5d3d5cc4cd3317ef6bfae...23032cf9f5eac63cac82f79d018a185e828ac9b2" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.3 (2021-10-13)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/23032cf9f5eac63cac82f79d018a185e828ac9b2...b0604cbda3d3d8bd42597170d8e34a5b557780d5" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.4 (2021-11-01)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/b0604cbda3d3d8bd42597170d8e34a5b557780d5...4716e2f00dd519fbf30d5e4ee2c7d069b8af483a" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.5 (2021-12-27)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/4716e2f00dd519fbf30d5e4ee2c7d069b8af483a...a9a59c7142e6a4331bc96fe2262679ae323ce225" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.6 (2021-12-31)
            '<a href="https://github.com/qrlk/videochatru-extension/compare/a9a59c7142e6a4331bc96fe2262679ae323ce225...66bd53e275adc37d283a17395f6e5a9bf35f8a67" style=\"text-decoration: none!important;\" target=\"_blank\">View changes on github.</a>',

            // v0.7 (03.01.2022)
            '- Исправлена горячая клавиша репорт+стрелка влево.<br>' +
            '- Отключено размывание nsfwjs по умолчанию.<br>' +
            '- Исправлена опечатка: nsfjw -> faceapi во всплывающих подсказках скипа faceapi.<br>' +
            '- Добавлен темный режим.<br>',
            '- Переход с ko-fi на buymeacoffee.',

            // v0.7.1 (07.01.2022)
            '- Добавлена форма Google, спрашивающая пользователя, почему он удалил расширение, ответ отправляется в публичный канал в Discord.',

            // v1.0 (2022-05-24)
            '- Расширение адаптировано под manifest v3<br>' +
            '— Будет работать в Chrome в 2023+ г.<br>' +
            '- Добавлен альтернативный API пробива IP.<br>' +
            '— Он работает через https, но сильно уступает его http аналогу (1к запросов в день, не может определить мобильный интернет).<br>' +
            '- В вики на гитхабе добавлен подробный разбор как активировать нормальный api.<br>' +
            '— Если http апи недоступен, ссылка на статью будет в вкладке IP.<br>' +
            '- На экране с логином теперь появляется предупреждение о том, что Чат Рулетка и оме.тв это одно и то же. <br>' +
            '— Многие люди удаляли расширение, не понимая, почему они не могут использовать его на своём инстансе Чат Рулетки.<br>' +
            '- Кнопка доната заменена кнопкой с призывом оставить отзыв в Chrome Web Store.<br>' +
            '- Вкладка \'Настройки\' теперь расширяется до половины экрана, можно отключить.<br>' +
            '- Если вы меняете важную настройку, расширение напомнит перезагрузиться только после нажатия на кнопку \'Старт\'.<br>' +
            '- По умолчанию на карте отображается Европа (в английской версии).<br>' +
            '- Расширение в английской версии теперь называется \'Chatruletka (ome.tv) extension\'.<br>' +
            '- Теперь в заголовке контрольной панели отображается версия расширения.<br>' +
            '- При нажатии на кнопку \'Стоп\' теперь вкладка IP сбрасывается.<br>' +
            '- Пофикшено уменьшение числа ручных скипов при автопропуске из-за слишком долгого подключения.<br>' +
            '- Вырезаны/удалены группы/чаты расширения в Telegram.',

            // v1.1 (27 мая 2022 г.)
            '- Увеличена ширина меню управления.<br>' +
            '- Добавлена возможность скрыть заголовок (по умолчанию вкл).<br>' +
            '- Добавлена полоса прокрутки в окно входа.<br>' +
            '- Исправлен вылет при попытке скрыть несуществующий логотип.<br>' +
            '- Добавлена система мониторинга ошибок для сообщения об ошибках в коде расширения.',

            // v1.1.1 (2022-08-04)
            '- Попытка исправить зависание вкладок с включенными взломами ws.<br>' +
            '- Ограничить строку версии в панели управления до 3 символов',

            // v1.1.2 (2022-08-04)
            '- Отключена отправка "данных лица", которая была причиной зависания вкладки при включенном ws hacks.',

            // v1.1.3 (2022-08-04)
            '- Увеличена задержка перед изменением размера после изменения размера окна.',

            // v1.1.4 (2022-08-05)
            '- Неудачная попытка исправить резервного провайдера ip геолокации.',

            // v1.2.0 (05.08.2022)
            '- IP-геолокация теперь должна работать без необходимости разрешать небезопасный контент (но с немного большей задержкой).<br>' +
            '- Служба резервной геолокации вырезана, потому что ее политика лимитов распространялась на всех пользователей расширения, а не только на конкретного, как я думал раньше.<br>' +
            '- Опция отображения дополнительной информации об IP (tor vpn mobile) теперь включена по умолчанию.',

            // v1.3.0 (2022-08-07)
            '- Добавлена модальная очередь, которая приветствует новых пользователей кучей бесполезной информации.<br>' +
            '- Добавлена кнопка iknowwhatyoudownload для открытия ссылки с возможными торрент-загрузками собеседника.<br>' +
            '- Добавлена возможность показывать провайдера (по умолчанию отключена).<br>' +
            '- Добавлена возможность отключения сбора ошибок.<br>' +
            '- Показываются секунды >=0 в TM (вкладка IP).<br>' +
            '- Изменён способ скрытия частей интерфейса.<br>' +
            '- Опасная функция "прикол" доступна только в том случае, если расширение распаковано.<br>' +
            '- Добавлен призыв не использовать удаление картинок в ws hacks, тк воспринимается как пустая.<br>' +
            '- Sanitization присвоений innerHTML.<br>' +
            '- Спрятал инструкцию по обходу бана за пейвол из-за достижения порога в 5000 пользователей.',

            // v1.3.1 (2022-08-07)
            '- Исправлено: тёмная тема адаптирована для приветственного окна.',

            // v1.3.2 (09.08.2022)
            '- Исправлено: кнопка \'Проверить торренты\' для локалей пользовательского интерфейса, отличных от en/ru',

            // v1.3.3 (2022-08-12)
            '- Учтён случай, когда собеседник раскрыл несколько IP адресов: будет отображаться информация по всем.'
        ],
    }

    let currentStep

    for (currentStep = steps.indexOf(version); currentStep < steps.length;) {
        const result = await swalQueueStep.fire({
            title: titles[currentStep],
            html: `<div style="text-align: left">${values[chrome.i18n.getMessage('lang')][currentStep]}</div>`,
            showCancelButton: currentStep > 0,
            currentProgressStep: currentStep,
        })

        if (result.value) {
            currentStep++
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            currentStep--
        } else {
            break
        }
    }
}