var config = {};

// Администраторы бота:
config.admin_list = [5645953149] // ID админов бота

// Системные параметры бота:
config.proxy = null; // Прокси для соединения с серверами Telegram "https://t.me/proxy?server=104.149.143.118&port=443&secret=7lUPvpErJ3U_pUojxzuoBjRteS5pcmFuY2VsbC5pcg%3D%3D"
config.qiwi = '9da389087ryhfgrth565cd1rty2da6'; // API ключ QIWI кошелька (первые 3 галочки доступа)
config.mongodb = "https://data.mongodb-api.com/app/data-dipgn/endpoint/data/v1"; // URL MongoDB базы 
config.token = "99a4f050e2038011591f1f44cb16dd0e"; // API ключ бота
config.bot_username = "Garrymorebot" // Юзернейм бота
config.qiwi_update = 10000; // Частота проверки на новые транзакции QIWI
config.mm_interval = 100; // Интервал между сообщениями при рассылке

// Партнёрка бота:
config.ref1_percent = 0.15; // % партнёрских отчислений 1ого уровня
config.ref2_percent = 0.1; // % партнёрских отчислений 2ого уровня
config.min_payout = 5; // Минимальный размер выплаты


// Платёжные системы
config.qiwi_state = true; // Вкл/откл авто начисления QIWI
config.qiwi_num = '+79173985816'; // Номер QIWI

config.start_text = 'Добро пожаловать в наш магазин!'
config.about_text = "<b>+++"

module.exports = config;
