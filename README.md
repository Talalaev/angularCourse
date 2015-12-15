#Account Of Expenses (Учет затрат)


##Мы должны знать сколько тратим и на что!
Приложение призванно дать вам контроль над финансовыми ресурсами, организовать расходы с целью недопустить траты денег на ветер. 
##Но мы не можем тратить время на унылое ведение подсчетов!
Задача приложения сделать процесс учета быстрым и удобным.
    
###Цель приложения разрешить выше приведенные противоречия!   

####Что уже есть:
1. Фронт-энд скелет приложения ( AngularJS )
2. Структура организованная в 4 модуля ( сборка grunt-webpack )
3. Бек-энд приложения ( NodeJS, MongoDB )
4. Регистрация
5. Авторизация
6. Вывод все пользователей через resolve ( /users )
7. CRUD пользователей
8. CRUD покупок
    
####Что будет:
1. Покрытие тестами текущей функциональности
2. Доведение до ума текущих функций
3. Возможность учета доходов
4. Анализ доходы/расходы с графиками и диаграммами
5. Виджеты курса валют
6. Виджет бухгалтерского калькулятора
7. Всевозможные фичи для увеличения скорости взаимодействи пользователя с приложением
    
####Страницы:
1. "/"
2. "/users"
3. "/users/userName"
4. "/users/userName/profile"
5. "users/userName/buyings"

    Сервер -> "_/server.js" по адресу http://localhost:3000
    Backend -> "_/*.js", "_/config", "_/models"
    Исходники Front-end -> "_/components/js/allfolders", "_/components/js/app.js" собираются в "build.js"
    остальные файлы в директории "_/components/js/" ждут удаления
    сборка просто командой grunt
